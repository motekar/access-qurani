<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { tick } from 'svelte';

	export let open = false;

	let closeButton: HTMLButtonElement;

	function onKeydown(event: KeyboardEvent) {
		if (open && event.key == 'Escape') {
			open = false;
		}
	}

	$: if (open) {
		tick().then(() => {
			closeButton.focus();
		});
	}
</script>

<svelte:window on:keydown={onKeydown} />

{#if !open}
	<button class="float" on:click|stopPropagation={() => (open = true)}>
		<Icon
			name="info"
			title="Informasi dan panduan penggunaan"
			width="2rem"
			height="2rem"
			aria-hidden={open}
		/>
	</button>
{/if}

{#if open}
	<div class="content" class:show={open}>
		<button bind:this={closeButton} on:click|stopPropagation={() => (open = false)}>
			<Icon name="leftArrow" title="Kembali" width="2rem" height="2rem" />
		</button>
		<h1>Akses Qurani</h1>
		<h2>Panduan Penggunaan</h2>
		<h2>Tentang Aplikasi</h2>
	</div>
{/if}

<style>
	button {
		border: none;
		background: none;
		padding: 0;
	}

	button.float {
		position: fixed;
		top: 1em;
		right: 1em;
		z-index: 99999;
	}
	.content {
		display: none;
		background-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		padding: 1em;
		z-index: 999999;
	}
	.content.show {
		display: block;
	}
</style>
