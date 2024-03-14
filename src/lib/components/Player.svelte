<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
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
	}

	export function pause() {
		audioElement.pause();
	}

	export function preload() {
		if (currentIndex < quran.data.ayaIndex.length - 1) {
			preloader1.src = quran.getAudioUrl(currentIndex + 1);
			preloader1.load();
		}

		// preload next page
		const currentPage = quran.getPageFromIndex(currentIndex);
		if (currentPage < 604) {
			preloader2.src = quran.getAudioUrl(quran.getAyaIndexFromPage(currentPage + 1));
			preloader2.load();
		}

		// preload next sura
		const [sura] = quran.data.ayaIndex[currentIndex];
		if (sura < 114) {
			preloader3.src = quran.getAudioUrl(quran.getAyaIndexFromPage(sura + 1));
			preloader3.load();
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
