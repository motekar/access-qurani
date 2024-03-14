<script lang="ts">
	import { base } from '$app/paths';
	import { createEventDispatcher, onMount } from 'svelte';
	import * as utils from '$lib/utils';

	let wrap: HTMLElement;
	let scroller: HTMLElement;
	let cmdStack: string[] = [];
	let beep: HTMLAudioElement;

	export function addClass(className: string) {
		wrap.classList.add(className);
	}

	export function removeClass(className: string) {
		wrap.classList.remove(className);
	}

	const dispatch = createEventDispatcher();

	function resetScroll() {
		wrap.style.overflow = 'hidden';

		wrap.scrollLeft = (scroller.offsetWidth - wrap.offsetWidth) / 2;
		wrap.scrollTop = (scroller.offsetHeight - wrap.offsetHeight) / 2;

		setTimeout(() => {
			wrap.style.overflow = 'scroll';
		}, 100);
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
		beep.play();
	}

	function onClick() {
		dispatch('click');
	}

	function onTouchEnd() {
		resetScroll();
		dispatch('touchend', cmdStack);
		cmdStack = [];
	}

	onMount(() => {
		resetScroll();

		initSensors();

		beep = new Audio(utils.beepData);
	});
</script>

<button on:touchend={onTouchEnd} on:click={onClick}>
	<div class="wrap idle" bind:this={wrap}>
		<div class="scroller" bind:this={scroller}>
			<div class="circle">
				<img src="{base}/img/access-quran.png" width="100" height="100" alt="Logo Akses Qurani" />
			</div>
			<div class="sensor top"></div>
			<div class="sensor right"></div>
			<div class="sensor bottom"></div>
			<div class="sensor left"></div>
		</div>
	</div>
</button>

<style>
	button {
		border: none;
		padding: 0;
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
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
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
