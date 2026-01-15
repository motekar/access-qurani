<script lang="ts">
	import { onMount, tick } from 'svelte';
	import * as utils from '$lib/utils';

	let {
		onclick,
		ontouchend,
		children
	}: {
		onclick?: () => void;
		ontouchend?: (detail: string[]) => void;
		children?: any;
	} = $props();

	let wrap = $state<HTMLElement>();
	let scroller = $state<HTMLElement>();
	let cmdStack = $state<string[]>([]);
	let beep = $state<HTMLAudioElement>();

	export function addClass(className: string) {
		if (wrap) wrap.classList.add(className);
	}

	export function removeClass(className: string) {
		if (wrap) wrap.classList.remove(className);
	}

	function resetScroll() {
		if (!wrap || !scroller) return;
		wrap.style.overflow = 'hidden';

		wrap.scrollLeft = (scroller.offsetWidth - wrap.offsetWidth) / 2;
		wrap.scrollTop = (scroller.offsetHeight - wrap.offsetHeight) / 2;

		setTimeout(() => {
			if (wrap) wrap.style.overflow = 'scroll';
		}, 100);
	}

	function initSensors() {
		if (!wrap || !scroller) return;
		scroller.style.transform = 'initial';
		scroller.style.top = 'initial';
		scroller.style.left = 'initial';

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
		if (beep) beep.play();
	}

	function handleClick() {
		onclick?.();
	}

	function handleTouchEnd() {
		resetScroll();
		ontouchend?.(cmdStack);
		cmdStack = [];
	}

	function onKeydown(ev: KeyboardEvent) {
		const keySensorMap = {
			ArrowUp: 'top',
			ArrowRight: 'right',
			ArrowDown: 'bottom',
			ArrowLeft: 'left'
		};
		const keyCommand = keySensorMap[ev.code as keyof typeof keySensorMap];
		if (keyCommand) {
			ev.preventDefault();
			cmdStack.push(keyCommand);
			if (beep) {
				beep.currentTime = 0;
				beep.play();
			}
		}
	}

	function onKeyup() {
		ontouchend?.(cmdStack);
		cmdStack = [];
	}

	onMount(async () => {
		await tick();

		resetScroll();

		initSensors();

		beep = new Audio(utils.beepData);
	});
</script>

<svelte:window onkeydown={onKeydown} onkeyup={onKeyup} />

<button ontouchend={handleTouchEnd} onclick={handleClick}>
	<div class="wrap idle" bind:this={wrap}>
		<div class="scroller" bind:this={scroller}>
			<div class="circle">
				{@render children?.()}
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
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
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
