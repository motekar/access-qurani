<script lang="ts">
	import { createEventDispatcher, onMount, tick } from 'svelte';
	import * as quran from '$lib/quranData';

	export let currentIndex: number = 0;
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
			index: currentIndex,
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
		if (currentIndex < quran.data.ayaIndex.length - 1) {
			const nextAya = quran.getAudioUrl(currentIndex + 1);
			if (preloader1.src != nextAya) {
				preloader1.src = nextAya;
				preloader1.load();
			}
		}

		// preload next page
		const currentPage = quran.getPageFromIndex(currentIndex);
		if (currentPage < 604) {
			const nextPageAya = quran.getAudioUrl(quran.getAyaIndexFromPage(currentPage + 1));
			if (preloader2.src != nextPageAya) {
				preloader2.src = nextPageAya;
				preloader2.load();
			}
		}

		// preload next sura
		const [suraIdx] = quran.data.ayaIndex[currentIndex];
		if (suraIdx < 113) {
			const nextSuraAya = quran.getAudioUrl(quran.getAyaIndexFromSura(suraIdx + 2));
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
