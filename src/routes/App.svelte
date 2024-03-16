<script lang="ts">
	import Info from './Info.svelte';
	import { onMount } from 'svelte';
	import * as quran from '$lib/quranData';
	import * as utils from '$lib/utils';
	import { localStore } from '$lib/localStore';
	import { derived, type Writable } from 'svelte/store';
	import { page } from '$app/stores';
	import Joystick from '$lib/components/Joystick.svelte';
	import AriaNotifier from '$lib/components/AriaNotifier.svelte';
	import Player from '$lib/components/Player.svelte';

	let control: Joystick;
	let notifier: AriaNotifier;
	let player: Player;

	let playerTime: number;

	let currentIndex: Writable<number> = localStore('index', 0);

	const current = derived(currentIndex, ($currentIndex) => {
		const [sura, aya] = quran.data.ayaIndex[$currentIndex];
		return {
			juz: quran.getJuzFromIndex($currentIndex),
			page: quran.getPageFromIndex($currentIndex),
			sura: sura + 1,
			suraName: quran.getSuraData(sura + 1).name,
			aya: aya + 1,
			url: quran.getAudioUrl($currentIndex)
		};
	});

	const pageTitle = derived(
		current,
		($current) => `Surah ${$current.sura} ${$current.suraName} Ayat ${$current.aya} - Akses Qurani`
	);

	let isPlaying: boolean = false;

	// This reactive statement will triggered on change to
	// isPlaying and currentIndex
	$: {
		if (isPlaying) {
			if (player.current().url != $current.url) {
				player.load($current.url);
			}
			player.play();

			player.preload();
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

	function onKeyup(ev: KeyboardEvent) {
		const keyMap = {
			Space: actions.togglePlayer,
			ArrowUp: actions.prevAya,
			ArrowDown: actions.nextAya,
			ArrowRight: actions.nextPage,
			ArrowLeft: actions.prevPage
		};
		const action = keyMap[ev.code as keyof typeof keyMap];
		if (action) {
			ev.preventDefault();
			action();
		}
	}

	function onKeydown(ev: KeyboardEvent) {
		// TODO: key combination
	}

	onMount(() => {
		player.load(quran.getAudioUrl($currentIndex));
		player.preload();
	});
</script>

<svelte:head>
	<title>{$pageTitle}</title>
</svelte:head>

<svelte:window on:keydown={onKeydown} on:keyup={onKeyup} />

<Info />

<div aria-hidden={$page.state.showInfo}>
	<div class="status" aria-hidden="true">
		Surah {$current.sura}
		{$current.suraName}.<br />
		Ayat {$current.aya}.<br />
		Halaman {$current.page}.<br />
		Juz {$current.juz}.
	</div>

	<Joystick bind:this={control} on:touchend={handleCommand} on:click={actions.togglePlayer} />
</div>

<div class="time" aria-hidden="true">{utils.formatTime(playerTime)}</div>

<Player
	bind:this={player}
	on:ended={actions.nextAya}
	bind:currentTime={playerTime}
	bind:currentIndex={$currentIndex}
/>

<AriaNotifier bind:this={notifier} />

<style>
	.status,
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
