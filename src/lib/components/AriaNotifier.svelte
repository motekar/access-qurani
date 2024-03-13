<script lang="ts">
	let element: HTMLElement;

	export function notify(message: string) {
		element.textContent = message;
	}
</script>

<div aria-live="polite" bind:this={element}></div>

<style>
	div {
		position: absolute;
		margin: -1px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
</style>
