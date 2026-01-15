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

	export function load(url: string) {
		if (!audioElement) return;
		let audioUrl = url;
		// Fix first time play on first aya
		if (!isPlaying) playingBasmala = 0;
		if (url.match(/001\./) && playingBasmala != $currentState.sura && needBasmala($currentIndex)) {
			audioUrl = getBasmalaUrl($currentState.sura);
			playingBasmala = $currentState.sura;
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
			url: audioElement?.src || '',
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
