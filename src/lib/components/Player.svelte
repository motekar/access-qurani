<script lang="ts">
	import { createEventDispatcher, onMount, tick } from 'svelte';
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

	export let currentTime: number = 0;

	const dispatch = createEventDispatcher();

	let audioElement: HTMLAudioElement;
	let preloader1: HTMLAudioElement;
	let preloader2: HTMLAudioElement;
	let preloader3: HTMLAudioElement;
	let playingBasmala: number = 0;
	let isPlaying: boolean = false;

	export function load(url: string) {
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
			url: audioElement.src,
			time: currentTime
		};
	}

	export function play() {
		audioElement.play();
		isPlaying = true;
		preload();
	}

	export function pause() {
		audioElement.pause();
		isPlaying = false;
	}

	async function preload() {
		// if not using tick, currentIndex is not accurate
		await tick();

		if ($currentIndex < data.ayaIndex.length - 1) {
			const nextAya = getAudioUrl($currentIndex + 1);
			if (preloader1.src != nextAya) {
				preloader1.src = nextAya;
				preloader1.load();
			}
		}

		// preload next page
		if ($currentState.page < 604) {
			const nextPageAya = getAudioUrl(getAyaIndexFromPage($currentState.page + 1));
			if (preloader2.src != nextPageAya) {
				preloader2.src = nextPageAya;
				preloader2.load();
			}
		}

		// preload next sura
		if ($currentState.sura < 114) {
			const nextSuraAya = getAudioUrl(getAyaIndexFromSura($currentState.sura + 1));
			if (preloader3.src != nextSuraAya) {
				preloader3.src = nextSuraAya;
				preloader3.load();
			}
		}
	}

	function onEnded() {
		if (playingBasmala != 0) {
			// retrigger play function and return
			// to prevent nextAya triggered
			load(getAudioUrl($currentIndex));
			return play();
		}
		dispatch('ended');
	}

	onMount(() => {
		preloader1 = new Audio();
		preloader1.preload = 'auto';
		preloader2 = new Audio();
		preloader2.preload = 'auto';
		preloader3 = new Audio();
		preloader3.preload = 'auto';
	});
</script>

<audio preload="auto" bind:this={audioElement} on:ended={onEnded} bind:currentTime></audio>

<div class="time" aria-hidden="true">{formatTime(currentTime)}</div>

<style>
	.time {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: 20%;
		z-index: 999;
		font-size: larger;
		top: calc(50% + 100px);
		font-size: 20px;
	}
</style>
