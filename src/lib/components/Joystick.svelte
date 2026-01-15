<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { JoystickManager, JoystickOutputData } from 'nipplejs';
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
	let joystickZone = $state<HTMLElement>();
	let cmdStack = $state<string[]>([]);
	let beep = $state<HTMLAudioElement>();
	let joystick = $state<JoystickManager>();
	let activeDirections = $state<Set<string>>(new Set());

	const DIRECTION_THRESHOLD = 30; // Minimum distance to register direction

	export function addClass(className: string) {
		if (wrap) wrap.classList.add(className);
	}

	export function removeClass(className: string) {
		if (wrap) wrap.classList.remove(className);
	}

	function getCardinalDirection(angle: number): string | null {
		// Normalize angle to 0-360
		const normalizedAngle = ((angle % 360) + 360) % 360;

		// INVERTED mapping: nipplejs reports finger direction, but we need the opposite
		// (matching original scroll-based behavior where revealed sensor was opposite of swipe)
		// Using 90° zones for cardinal directions (45° tolerance each side)
		// Swipe right (315-45°) → 'left' command (nextPage)
		// Swipe up (45-135°) → 'bottom' command (nextAya)
		// Swipe left (135-225°) → 'right' command (prevPage)
		// Swipe down (225-315°) → 'top' command (prevAya)
		if (normalizedAngle >= 315 || normalizedAngle < 45) {
			return 'left'; // swipe right → left
		} else if (normalizedAngle >= 45 && normalizedAngle < 135) {
			return 'bottom'; // swipe up → bottom
		} else if (normalizedAngle >= 135 && normalizedAngle < 225) {
			return 'right'; // swipe left → right
		} else if (normalizedAngle >= 225 && normalizedAngle < 315) {
			return 'top'; // swipe down → top
		}

		return null;
	}

	function handleJoystickMove(evt: unknown, data: JoystickOutputData) {
		if (!data.direction || data.distance < DIRECTION_THRESHOLD) return;

		const direction = getCardinalDirection(data.angle.degree);
		if (!direction) return;

		// Only register if this direction hasn't been registered yet in this gesture
		if (!activeDirections.has(direction)) {
			activeDirections.add(direction);
			cmdStack.push(direction);

			if (beep) {
				beep.currentTime = 0;
				beep.play();
			}
		}
	}

	function handleJoystickEnd() {
		if (cmdStack.length > 0) {
			ontouchend?.(cmdStack);
		}
		cmdStack = [];
		activeDirections = new Set();
	}

	function handleClick() {
		onclick?.();
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
		if (cmdStack.length > 0) {
			ontouchend?.(cmdStack);
		}
		cmdStack = [];
	}

	onMount(async () => {
		beep = new Audio(utils.beepData);

		if (joystickZone) {
			const nipplejs = (await import('nipplejs')).default;
			joystick = nipplejs.create({
				zone: joystickZone,
				mode: 'dynamic',
				color: '#607c3c',
				size: 120,
				restOpacity: 0.5,
				fadeTime: 100,
				dynamicPage: true,
				shape: 'square'
			});

			joystick.on('move', handleJoystickMove);
			joystick.on('end', handleJoystickEnd);
		}
	});

	onDestroy(() => {
		joystick?.destroy();
	});
</script>

<svelte:window onkeydown={onKeydown} onkeyup={onKeyup} />

<button onclick={handleClick}>
	<div class="wrap idle" bind:this={wrap}>
		<div class="joystick-zone" bind:this={joystickZone}>
			<div class="circle">
				{@render children?.()}
			</div>
		</div>
	</div>
</button>

<style>
	button {
		border: none;
		padding: 0;
		background: transparent;
	}

	.wrap {
		width: 100vw;
		height: 100vh;
		background-color: #ddd;
		position: relative;
		overflow: hidden;
		touch-action: none;
	}

	.joystick-zone {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.circle {
		width: 100px;
		height: 100px;
		background-color: #607c3c;
		color: #fff;
		font-size: 30px;
		font-weight: bold;
		border-radius: 50%;
		text-align: center;
		line-height: 100px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
		z-index: 10;
	}

	.idle .circle {
		background-color: #f00;
	}

	:global(.front) {
		opacity: 1 !important;
	}

	:global(.back) {
		opacity: 0.3 !important;
		border: 2px solid #607c3c !important;
		background: transparent !important;
	}
</style>
