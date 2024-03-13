<script lang="ts">
	import { onMount } from 'svelte';
	import * as quran from '$lib/quranData';
	import * as utils from '$lib/utils';
	import { localStore } from '$lib/localStore';
	import { derived, type Writable } from 'svelte/store';
	import Joystick from '$lib/components/Joystick.svelte';
	import AriaNotifier from '$lib/components/AriaNotifier.svelte';

	let control: Joystick;
	let notifier: AriaNotifier;

	let player: HTMLAudioElement;
	let playerTime: number;
	let preloader1: HTMLAudioElement;
	let preloader2: HTMLAudioElement;
	let preloader3: HTMLAudioElement;

	let currentIndex: Writable<number> = localStore('index', 0);

	const current = derived(currentIndex, ($currentIndex) => {
		const [sura, aya] = quran.data.ayaIndex[$currentIndex];
		return {
			juz: quran.getJuzFromIndex($currentIndex),
			page: quran.getPageFromIndex($currentIndex),
			sura: sura + 1,
			aya: aya + 1,
			url: quran.getAudioUrl($currentIndex)
		};
	});

	const pageTitle = derived(
		current,
		($current) =>
			`Surah ${$current.sura} Ayat ${$current.aya} - Halaman ${$current.page} - Akses Qurani`
	);

	let isPlaying: boolean = false;

	// This reactive statement will triggered on change to
	// isPlaying and currentIndex
	$: {
		if (isPlaying) {
			if (player.src != $current.url) {
				player.src = $current.url;
				player.load();
			}
			player.play();

			preloadAudios();
			control.removeClass('idle');
		} else {
			player && player.pause();
			control && control.addClass('idle');
		}
	}

	function ariaNotify(message: string) {
		if (isPlaying) return;
		notifier.notify(message);
	}

	const actions = {
		togglePlayer() {
			// Just change the state, player will play or pause
			// on reactive statement above
			isPlaying = !isPlaying;

			if (isPlaying) utils.requestWakeLock();
			else {
				utils.releaseWakeLock();
				ariaNotify(
					`Surah ${$current.sura}, ayat ${$current.aya}, Halaman ${$current.page}, juz ${$current.juz}`
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
			ariaNotify(`Ayat ${$current.aya}, surah ${$current.sura}`);
		},
		prevAya() {
			if ($currentIndex > 0) $currentIndex--;
			ariaNotify(`Ayat ${$current.aya}, surah ${$current.sura}`);
		},
		nextPage() {
			if ($current.page >= 604) return;
			$currentIndex = quran.getAyaIndexFromPage($current.page + 1);
			ariaNotify('Halaman ' + $current.page);
		},
		prevPage() {
			if ($current.page <= 1) return;
			$currentIndex = quran.getAyaIndexFromPage($current.page - 1);
			ariaNotify('Halaman ' + $current.page);
		},
		nextSura() {
			if ($current.sura >= 114) return;
			$currentIndex = quran.getAyaIndexFromSura($current.sura + 1);
			ariaNotify('Surah ' + $current.sura);
		},
		prevSura() {
			if ($current.sura <= 1) return;
			$currentIndex = quran.getAyaIndexFromSura($current.sura - 1);
			ariaNotify('Surah ' + $current.sura);
		},
		nextJuz() {
			if ($current.juz >= 30) return;
			$currentIndex = quran.getAyaIndexFromJuz($current.juz + 1);
			ariaNotify('Juz ' + $current.juz);
		},
		prevJuz() {
			if ($current.juz <= 1) return;
			$currentIndex = quran.getAyaIndexFromJuz($current.juz - 1);
			ariaNotify('Juz ' + $current.juz);
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

		'left,top,bottom': actions.firstSura,
		'left,bottom,top': actions.firstSura,

		'right,top,bottom': actions.lastSura,
		'right,bottom,top': actions.lastSura
	};

	function handleCommand(event: CustomEvent) {
		const command = event.detail as string[];
		const commandStr = command.join(',');
		const action = commandActions[commandStr as keyof typeof commandActions];
		if (action) action();
	}

	function preloadAudios() {
		if ($currentIndex < quran.data.ayaIndex.length - 1) {
			preloader1.src = quran.getAudioUrl($currentIndex + 1);
			preloader1.load();
		}

		// preload next page
		if ($current.page < 604) {
			preloader2.src = quran.getAudioUrl(quran.getAyaIndexFromPage($current.page + 1));
			preloader2.load();
		}

		// preload next sura
		if ($current.sura < 114) {
			preloader3.src = quran.getAudioUrl(quran.getAyaIndexFromPage($current.sura + 1));
			preloader3.load();
		}
	}

	onMount(() => {
		preloader1 = new Audio();
		preloader1.preload = 'auto';
		preloader2 = new Audio();
		preloader2.preload = 'auto';
		preloader3 = new Audio();
		preloader3.preload = 'auto';

		player.src = quran.getAudioUrl($currentIndex);
		player.load();

		preloadAudios();
	});
</script>

<svelte:head>
	<title>{$pageTitle}</title>
</svelte:head>

<Joystick bind:this={control} on:touchend={handleCommand} on:click={actions.togglePlayer} />
<AriaNotifier bind:this={notifier} />

<div class="info">
	Surah {$current.sura}.<br />
	Ayat {$current.aya}.<br />
	Halaman {$current.page}.<br />
	Juz {$current.juz}.
</div>
<audio preload="auto" bind:this={player} on:ended={actions.nextAya} bind:currentTime={playerTime}
></audio>
<div class="time" aria-hidden="true">{utils.formatTime(playerTime)}</div>

<style>
	:global(body),
	:global(html) {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	button {
		border: none;
		padding: 0;
	}
	.info,
	.time {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: 20%;
		z-index: 999;
		font-size: larger;
	}
	.time {
		top: calc(50% + 100px);
		font-size: 20px;
	}
</style>
