<script lang="ts">
	import { createEventDispatcher, onMount, tick } from 'svelte';
	import { data, getAudioUrl, getAyaIndexFromPage, getAyaIndexFromSura } from '$lib/quranData';
	import { currentIndex, current as currentState } from '$lib/globalState';

	export let currentTime: number = 0;

	const dispatch = createEventDispatcher();

	let audioElement: HTMLAudioElement;
	let preloader1: HTMLAudioElement;
	let preloader2: HTMLAudioElement;
	let preloader3: HTMLAudioElement;

	export function load(url: string) {
		audioElement.src = url;
		audioElement.load();
		tick().then(preload);
	}

	export function current() {
		return {
			url: audioElement.src,
			time: currentTime
		};
	}

	export function play() {
		audioElement.play();
		// if not using tick, currentIndex is not accurate
		tick().then(preload);
	}

	export function pause() {
		audioElement.pause();
	}

	export function preload() {
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
