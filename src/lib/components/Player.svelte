<script lang="ts">
	import { onMount, tick } from 'svelte';
	import {
		data,
		getAudioUrl,
		getAyaIndexFromPage,
		getAyaIndexFromSura,
		getBasmalaUrl,
		needBasmala
	} from '$lib/quranData';
	import { formatTime } from '$lib/utils';
	import { currentIndex, current as currentState } from '$lib/globalState';

	let {
		currentTime = $bindable(0),
		onended,
		onerror
	}: {
		currentTime?: number;
		onended?: () => void;
		onerror?: (error: Event) => void;
	} = $props();

	let audioElement = $state<HTMLAudioElement>();
	let preloader1 = $state<HTMLAudioElement>();
	let preloader2 = $state<HTMLAudioElement>();
	let preloader3 = $state<HTMLAudioElement>();
	let playingBasmala = $state(0);
	let isPlaying = $state(false);
	let intendedUrl = $state('');

	export function load(url: string) {
		if (!audioElement) return;
		let audioUrl = url;
		intendedUrl = url;

		// Parse sura and aya from URL (format: SSSAAA.mp3)
		const match = url.match(/(\d{3})(\d{3})\.mp3$/);
		if (match) {
			const sura = parseInt(match[1], 10);
			const aya = parseInt(match[2], 10);

			// Check if this is first aya and needs basmala
			// sura 1 (Al-Fatihah) and sura 9 (At-Taubah) don't need basmala
			// playingBasmala tracks which sura's basmala we're currently playing
			if (aya === 1 && sura !== 1 && sura !== 9 && playingBasmala !== sura) {
				audioUrl = getBasmalaUrl(sura);
				playingBasmala = sura;
			} else {
				playingBasmala = 0;
			}
		} else {
			playingBasmala = 0;
		}

		if (audioElement.src != audioUrl) {
			audioElement.src = audioUrl;
			audioElement.load();
		}
		preload();
	}

	export function current() {
		return {
			url: intendedUrl,
			time: currentTime
		};
	}

	export function play() {
		if (!audioElement) return;
		audioElement.play();
		isPlaying = true;
		preload();
	}

	export function pause() {
		if (!audioElement) return;
		audioElement.pause();
		isPlaying = false;
	}

	async function preload() {
		// if not using tick, currentIndex is not accurate
		await tick();

		if ($currentIndex < data.ayaIndex.length - 1 && preloader1) {
			const nextAya = getAudioUrl($currentIndex + 1);
			if (preloader1.src != nextAya) {
				preloader1.src = nextAya;
				preloader1.load();
			}
		}

		// preload next page
		if ($currentState.page < 604 && preloader2) {
			const nextPageAya = getAudioUrl(getAyaIndexFromPage($currentState.page + 1));
			if (preloader2.src != nextPageAya) {
				preloader2.src = nextPageAya;
				preloader2.load();
			}
		}

		// preload next sura
		if ($currentState.sura < 114 && preloader3) {
			const nextSuraAya = getAudioUrl(getAyaIndexFromSura($currentState.sura + 1));
			if (preloader3.src != nextSuraAya) {
				preloader3.src = nextSuraAya;
				preloader3.load();
			}
		}
	}

	function handleEnded() {
		if (playingBasmala != 0) {
			// retrigger play function and return
			// to prevent nextAya triggered
			load(getAudioUrl($currentIndex));
			return play();
		}
		onended?.();
	}

	function handleError(e: Event) {
		console.error('Audio playback error:', e);
		isPlaying = false;
		onerror?.(e);
	}

	onMount(() => {
		preloader1 = new Audio();
		preloader1.preload = 'auto';
		preloader2 = new Audio();
		preloader2.preload = 'auto';
		preloader3 = new Audio();
		preloader3.preload = 'auto';

		return () => {
			if (preloader1) preloader1.src = '';
			if (preloader2) preloader2.src = '';
			if (preloader3) preloader3.src = '';
			if (audioElement) {
				audioElement.src = '';
				audioElement.pause();
			}
		};
	});
</script>

<audio
	preload="auto"
	bind:this={audioElement}
	onended={handleEnded}
	onerror={handleError}
	bind:currentTime
></audio>

<div class="time" aria-hidden="true">{formatTime(currentTime)}</div>

<style>
	.time {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: calc(50% + 100px);
		z-index: 999;
		font-size: 20px;
	}
</style>
