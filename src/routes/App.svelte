<script lang="ts">
	import Info from './Info.svelte';
	import { onMount, tick } from 'svelte';
	import * as quran from '$lib/quranData';
	import * as utils from '$lib/utils';
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';
	import { currentIndex, current, config } from '$lib/globalState';
	import Joystick from '$lib/components/Joystick.svelte';
	import AriaNotifier from '$lib/components/AriaNotifier.svelte';
	import Player from '$lib/components/Player.svelte';
	import { base } from '$app/paths';
	import Welcome from './Welcome.svelte';
	import { pushState } from '$app/navigation';
	import {
		ChevronUp,
		ChevronDown,
		ChevronLeft,
		ChevronRight,
		SkipForward,
		SkipBack,
		BookOpen,
		Book,
		HelpCircle,
		Play,
		Pause
	} from 'lucide-svelte';

	let control = $state<Joystick>();
	let notifier = $state<AriaNotifier>();
	let player = $state<Player>();
	let isInstalled = $state(false);
	let pageFlipAudio = $state<HTMLAudioElement>();
	let pageFlipAudio2 = $state<HTMLAudioElement>();

	const pageTitle = derived(
		current,
		($current) =>
			`Surah ${$current.sura} ${$current.suraName} Ayat ${$current.aya} - ${$config.name}`
	);

	// detect page change and play sound effect
	let lastPage = $state(1);
	$effect(() => {
		if ($current.page != lastPage) {
			if (pageFlipAudio) playPageFlipSound(Math.abs($current.page - lastPage) > 1);
			lastPage = $current.page;
		}
	});

	let isPlaying = $state(false);

	// This effect will trigger on change to isPlaying and currentIndex
	$effect(() => {
		if (isPlaying && player) {
			if (player.current().url != $current.url) {
				player.load($current.url);
			}
			player.play();

			if (control) control.removeClass('idle');
		} else {
			if (player) player.pause();
			if (control) control.addClass('idle');
		}
	});

	function ariaNotify(message: string) {
		if (isPlaying) return;
		if (notifier) notifier.notify(message);
	}

	const actions = {
		togglePlayer() {
			// Just change the state, player will play or pause
			// on effect above
			isPlaying = !isPlaying;

			if (isPlaying) utils.requestWakeLock();
			else {
				utils.releaseWakeLock();
				ariaNotify(
					`Surah ${$current.sura} ${$current.suraName}, ayat ${$current.aya}, Halaman ${$current.page}, juz ${$current.juz}`
				);
			}
		},
		nextAya() {
			// Reach end of annaas
			if ($currentIndex >= quran.data.ayaIndex.length - 1) {
				if (isPlaying) isPlaying = false;
				return;
			}
			$currentIndex++;
			ariaNotify(`Ayat ${$current.aya}, surah ${$current.sura} ${$current.suraName}`);
		},
		prevAya() {
			if ($currentIndex > 0) $currentIndex--;
			ariaNotify(`Ayat ${$current.aya}, surah ${$current.sura} ${$current.suraName}`);
		},
		nextPage() {
			if ($current.page >= 604) return;
			$currentIndex = quran.getAyaIndexFromPage($current.page + 1);
			ariaNotify(
				`Halaman ${$current.page} Surah ${$current.sura} ${$current.suraName} ayat ${$current.aya}`
			);
		},
		prevPage() {
			if ($current.page <= 1) return;
			$currentIndex = quran.getAyaIndexFromPage($current.page - 1);
			ariaNotify(
				`Halaman ${$current.page} Surah ${$current.sura} ${$current.suraName} ayat ${$current.aya}`
			);
		},
		nextSura() {
			if ($current.sura >= 114) return;
			$currentIndex = quran.getAyaIndexFromSura($current.sura + 1);
			ariaNotify(`Surah ${$current.sura} ${$current.suraName}`);
		},
		prevSura() {
			if ($current.sura <= 1) return;
			$currentIndex = quran.getAyaIndexFromSura($current.sura - 1);
			ariaNotify(`Surah ${$current.sura} ${$current.suraName}`);
		},
		nextJuz() {
			if ($current.juz >= 30) return;
			$currentIndex = quran.getAyaIndexFromJuz($current.juz + 1);
			ariaNotify(
				`Juz ${$current.juz} Surah ${$current.sura} ${$current.suraName} ayat ${$current.aya}`
			);
		},
		prevJuz() {
			if ($current.juz <= 1) return;
			$currentIndex = quran.getAyaIndexFromJuz($current.juz - 1);
			ariaNotify(
				`Juz ${$current.juz} Surah ${$current.sura} ${$current.suraName} ayat ${$current.aya}`
			);
		},
		firstSura() {
			$currentIndex = 0;
			ariaNotify('Surah ' + $current.sura);
		},
		lastSura() {
			$currentIndex = quran.getAyaIndexFromSura(114);
			ariaNotify('Surah ' + $current.sura);
		}
	};

	const commandActions = {
		left: actions.nextPage,
		right: actions.prevPage,
		top: actions.prevAya,
		bottom: actions.nextAya,

		'left,top': actions.nextSura,
		'top,left': actions.nextSura,

		'right,top': actions.prevSura,
		'top,right': actions.prevSura,

		'left,bottom': actions.nextJuz,
		'bottom,left': actions.nextJuz,

		'right,bottom': actions.prevJuz,
		'bottom,right': actions.prevJuz,

		'left,top,bottom': actions.lastSura,
		'left,bottom,top': actions.lastSura,

		'right,top,bottom': actions.firstSura,
		'right,bottom,top': actions.firstSura
	};

	function handleCommand(commands: string[]) {
		const commandStr = commands.join(',');
		const action = commandActions[commandStr as keyof typeof commandActions];
		if (action) action();
	}

	function onKeyup(ev: KeyboardEvent) {
		// TODO: fix togglePlayer triggered twice when joystick button focused
		if (ev.code == 'Space') actions.togglePlayer();
	}

	function playPageFlipSound(multi: boolean) {
		if (!multi && pageFlipAudio) {
			pageFlipAudio.currentTime = 0;
			pageFlipAudio.play();
		} else if (pageFlipAudio2) {
			pageFlipAudio2.currentTime = 0;
			pageFlipAudio2.play();
		}
	}

	onMount(() => {
		tick().then(() => pushState('', { mode: 'welcome' }));

		if (player) player.load(quran.getAudioUrl($currentIndex));
		isInstalled = window.matchMedia('(display-mode: standalone)').matches;
		pageFlipAudio = new Audio(base + 'audio/pageflip.mp3');
		pageFlipAudio2 = new Audio(base + 'audio/pageflip-multi.mp3');
	});
</script>

<svelte:head>
	<title>{$pageTitle}</title>
</svelte:head>

<svelte:window onkeyup={onKeyup} />

{#if $page.state.mode != 'welcome'}
	<Info />
{/if}

<div aria-hidden={$page.state.mode != undefined} class="relative h-screen w-screen overflow-hidden bg-zinc-950 text-white select-none">
	<!-- Background Elements / Hints -->
	<div class="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-6">
		<!-- Top Row -->
		<div class="flex items-start justify-between">
			<!-- Top Left: Next Surah -->
			<div class="flex flex-col items-start opacity-50 transition-opacity duration-300">
				<div class="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-emerald-400">
					<ChevronLeft size={16} /> <ChevronUp size={16} />
				</div>
				<span class="text-xs text-zinc-400">Next Surah</span>
			</div>

			<!-- Top Center: Prev Aya -->
			<div class="flex flex-col items-center gap-1 opacity-70 transition-opacity duration-300">
				<ChevronUp size={32} class="animate-pulse" />
				<span class="text-xs font-bold uppercase tracking-widest text-zinc-400">Prev Ayat</span>
			</div>

			<!-- Top Right: Prev Surah -->
			<div class="flex flex-col items-end opacity-50 transition-opacity duration-300">
				<div class="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-emerald-400">
					<ChevronUp size={16} /> <ChevronRight size={16} />
				</div>
				<span class="text-xs text-zinc-400">Prev Surah</span>
			</div>
		</div>

		<!-- Player Info (Moved to Top Quarter) -->
		<div class="absolute top-[18%] left-0 right-0 flex flex-col items-center gap-4 text-center z-20 pointer-events-none">
			<div class="flex flex-col gap-1">
				<span class="text-lg font-medium text-emerald-400">Surah {$current.sura}</span>
				<h1 class="text-4xl font-bold leading-tight tracking-tight">{$current.suraName}</h1>
			</div>

			<div class="flex items-center gap-4">
				<div class="h-px w-12 bg-zinc-700"></div>
				<span class="text-2xl font-light text-zinc-100">Ayat {$current.aya}</span>
				<div class="h-px w-12 bg-zinc-700"></div>
			</div>
		</div>

		<!-- Middle Row (Arrows Only) -->
		<div class="flex items-center justify-between mt-auto mb-auto h-full pointer-events-none">
			<!-- Left: Next Page -->
			<div class="flex flex-col items-start gap-1 opacity-70 transition-opacity duration-300">
				<ChevronLeft size={32} class="animate-pulse" />
				<span class="text-xs font-bold uppercase tracking-widest text-zinc-400">Next Page</span>
			</div>

			<!-- Center is empty for Joystick -->
			<div class="flex-1"></div>

			<!-- Right: Prev Page -->
			<div class="flex flex-col items-end gap-1 opacity-70 transition-opacity duration-300">
				<ChevronRight size={32} class="animate-pulse" />
				<span class="text-xs font-bold uppercase tracking-widest text-zinc-400">Prev Page</span>
			</div>
		</div>

		<!-- Bottom Row -->
		<div class="flex items-end justify-between">
			<!-- Bottom Left: Next Juz -->
			<div class="flex flex-col items-start opacity-50 transition-opacity duration-300">
				<span class="text-xs text-zinc-400">Next Juz</span>
				<div class="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-emerald-400">
					<ChevronLeft size={16} /> <ChevronDown size={16} />
				</div>
			</div>

			<!-- Bottom Center: Next Aya -->
			<div class="flex flex-col items-center gap-1 opacity-70 transition-opacity duration-300">
				<span class="text-xs font-bold uppercase tracking-widest text-zinc-400">Next Ayat</span>
				<ChevronDown size={32} class="animate-pulse" />
			</div>

			<!-- Bottom Right: Prev Juz -->
			<div class="flex flex-col items-end opacity-50 transition-opacity duration-300">
				<span class="text-xs text-zinc-400">Prev Juz</span>
				<div class="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-emerald-400">
					<ChevronDown size={16} /> <ChevronRight size={16} />
				</div>
			</div>
		</div>
	</div>

	<!-- Info Footer (Moved to Bottom Quarter) -->
	<div class="pointer-events-none absolute bottom-[18%] left-0 right-0 z-20 flex justify-center gap-6 text-xs font-medium text-zinc-500 uppercase tracking-widest">
		<span>Halaman {$current.page}</span>
		<span>•</span>
		<span>Juz {$current.juz}</span>
	</div>

	<!-- Interaction Layer (Joystick) -->
	<Joystick bind:this={control} ontouchend={handleCommand} onclick={actions.togglePlayer}>
		<!-- Central Puck / Logo -->
		<div class="relative flex h-32 w-32 items-center justify-center rounded-full bg-zinc-900/20 shadow-2xl backdrop-blur-sm border border-white/5 transition-transform duration-200 active:scale-95">
			{#if isPlaying}
				<!-- Spinning Ring Animation -->
				<div class="absolute inset-0 rounded-full border-2 border-t-emerald-400 border-r-transparent border-b-emerald-400 border-l-transparent animate-[spin_3s_linear_infinite]"></div>
			{/if}
			<img
				src="{base}/img/access-quran.png"
				class="h-20 w-20 object-contain opacity-80"
				alt="Access Quran Logo"
			/>
		</div>
	</Joystick>
</div>

<Player bind:this={player} onended={actions.nextAya} />

<AriaNotifier bind:this={notifier} />

<style>
	/* Global overrides if needed, but Tailwind handles most */
</style>
