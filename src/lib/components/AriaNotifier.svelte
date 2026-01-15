<script lang="ts">
	let element1 = $state<HTMLElement>();
	let element2 = $state<HTMLElement>();
	let useFirst = $state(true);
	let timeoutId = $state<number>();

	function calculateTimeout(message: string): number {
		// Average reading speed: ~150 words per minute
		// Average word length: ~5 characters
		const CHARS_PER_SECOND = (150 * 5) / 60; // chars per second
		const MIN_TIMEOUT = 1000; // Minimum 1 second
		const BUFFER_TIME = 500; // Additional buffer time in ms

		// Calculate based on character count
		const timeout = (message.length / CHARS_PER_SECOND) * 1000 + BUFFER_TIME;

		// Return at least MIN_TIMEOUT
		return Math.max(timeout, MIN_TIMEOUT);
	}

	export function notify(message: string) {
		console.log('[AriaNotifier] notify called:', message);

		// Clear any existing timeout
		if (timeoutId) {
			window.clearTimeout(timeoutId);
		}

		// Clear both elements first
		if (element1) element1.textContent = '';
		if (element2) element2.textContent = '';

		// Use requestAnimationFrame to ensure DOM update is processed
		// before setting new content - this helps screen readers detect the change
		requestAnimationFrame(() => {
			const activeElement = useFirst ? element1 : element2;
			if (activeElement) activeElement.textContent = message;

			// Toggle for next call
			useFirst = !useFirst;
		});

		// Set new timeout based on message length
		const timeout = calculateTimeout(message);
		timeoutId = window.setTimeout(() => {
			if (element1) element1.textContent = '';
			if (element2) element2.textContent = '';
		}, timeout);
	}
</script>

<div aria-live="assertive" aria-atomic="true" bind:this={element1}></div>
<div aria-live="assertive" aria-atomic="true" bind:this={element2}></div>

<style>
	div {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
