<script lang="ts">
	let element: HTMLElement;
	let clearTimeout: number;

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
		// Clear any existing timeout
		if (clearTimeout) {
			window.clearTimeout(clearTimeout);
			element.textContent = '';
		}

		element.textContent = message;

		// Set new timeout based on message length
		const timeout = calculateTimeout(message);
		clearTimeout = window.setTimeout(() => {
			element.textContent = '';
		}, timeout);
	}
</script>

<div
	aria-live="assertive"
	bind:this={element}
></div>

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
