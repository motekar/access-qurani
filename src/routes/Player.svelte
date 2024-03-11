<script lang="ts">
	import { onMount } from 'svelte';
	import * as quran from '$lib/quranData';
	import * as utils from '$lib/utils';
	import { localStore } from '$lib/localStore';
	import { derived, type Writable } from 'svelte/store';

	let wrap: HTMLElement;
	let scroller: HTMLElement;
	let player: HTMLAudioElement;
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
			wrap.classList.remove('idle');
		} else {
			player && player.pause();
			wrap && wrap.classList.add('idle');
		}
	}

	let cmdStack: string[] = [];

	const actions = {
		togglePlayer() {
			// Just change the state, player will play or pause
			// on reactive statement above
			isPlaying = !isPlaying;

			if (isPlaying) utils.requestWakeLock();
			else utils.releaseWakeLock();
		},
		nextAya() {
			// Reach end of annaas
			if ($currentIndex >= quran.data.ayaIndex.length - 1) {
				if (isPlaying) isPlaying = false;
				return;
			}
			$currentIndex++;
		},
		prevAya() {
			if ($currentIndex > 0) $currentIndex--;
		},
		nextPage() {
			if ($current.page >= 604) return;
			$currentIndex = quran.getAyaIndexFromPage($current.page + 1);
		},
		prevPage() {
			if ($current.page <= 1) return;
			$currentIndex = quran.getAyaIndexFromPage($current.page - 1);
		},
		nextSura() {
			if ($current.sura >= 114) return;
			$currentIndex = quran.getAyaIndexFromSura($current.sura + 1);
		},
		prevSura() {
			if ($current.sura <= 1) return;
			$currentIndex = quran.getAyaIndexFromSura($current.sura - 1);
		},
		nextJuz() {
			if ($current.juz >= 30) return;
			$currentIndex = quran.getAyaIndexFromJuz($current.juz + 1);
		},
		prevJuz() {
			if ($current.juz <= 1) return;
			$currentIndex = quran.getAyaIndexFromJuz($current.juz - 1);
		},
		firstSura() {
			$currentIndex = 0;
		},
		lastSura() {
			$currentIndex = quran.getAyaIndexFromSura(114);
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

		'left,left': actions.nextJuz,
		'left,right,left': actions.nextJuz,

		'right,right': actions.prevJuz,
		'right,left,right': actions.prevJuz,

		'left,top,bottom': actions.firstSura,
		'left,bottom,top': actions.firstSura,

		'right,top,bottom': actions.lastSura,
		'right,bottom,top': actions.lastSura
	};

	function resetScroll() {
		wrap.style.overflow = 'hidden';

		wrap.scrollLeft = (scroller.offsetWidth - wrap.offsetWidth) / 2;
		wrap.scrollTop = (scroller.offsetHeight - wrap.offsetHeight) / 2;

		setTimeout(() => {
			wrap.style.overflow = 'scroll';
		}, 100);
	}

	function onTouchEnd() {
		resetScroll();
		handleCommand(cmdStack);
		cmdStack = [];
	}

	function handleCommand(command: string[]) {
		if (command.length == 0) return actions.togglePlayer();

		const commandStr = command.join(',');
		console.log(commandStr);
		const action = commandActions[commandStr as keyof typeof commandActions];
		if (action) action();
	}

	function initSensors() {
		const observer = new IntersectionObserver(onSensorsTriggered, {
			root: wrap,
			threshold: 0.3 // Trigger when 30% of the element is out of view
		});
		wrap.querySelectorAll('.sensor').forEach((sensor) => observer.observe(sensor));
	}

	function onSensorsTriggered(entries: IntersectionObserverEntry[]) {
		const visibleSensors: string[] = [];

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				visibleSensors.push(entry.target.classList[1]); // Extract class name
			}
		});

		if (!visibleSensors.length) return;

		// Generate string command based on visible sensors
		cmdStack.push(visibleSensors.join(','));
		utils.playBeep(50, 1000);
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
		resetScroll();
		// wrap.classList.remove('cloak');

		initSensors();

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

<button on:touchend={onTouchEnd}>
	<div class="info">Page: {$current.page}<br />Juz: {$current.juz}</div>
	<audio preload="auto" bind:this={player} on:ended={actions.nextAya}></audio>
	<div class="wrap idle" bind:this={wrap}>
		<div class="scroller" bind:this={scroller}>
			<div class="circle">{$current.sura}:{$current.aya}</div>
			<div class="sensor top"></div>
			<div class="sensor right"></div>
			<div class="sensor bottom"></div>
			<div class="sensor left"></div>
		</div>
	</div>
</button>

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
	.info {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: 30%;
		z-index: 999;
		font-size: larger;
	}
	.wrap {
		width: 100vw;
		height: 100vh;
		background-color: #ddd;
		position: relative;
		overflow: scroll;
	}

	.scroller {
		width: calc(100vw + 200px);
		height: calc(100vh + 200px);
		position: absolute;
	}

	.circle {
		width: 100px;
		height: 100px;
		background-color: #607c3c;
		color: #fff;
		font-size: 30px;
		font-weight: bold;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		line-height: 100px;
		cursor: pointer;
	}
	.idle .circle {
		background-color: #f00;
	}

	.sensor {
		width: 100px;
		height: 100px;
		position: absolute;
		background-color: transparent;
	}

	.top {
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.right {
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}

	.bottom {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.left {
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
</style>
