<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { tick } from 'svelte';

	let closeButton: HTMLButtonElement;

	function onKeydown(event: KeyboardEvent) {
		if ($page.state.showInfo && event.key == 'Escape') {
			close();
		}
	}

	$: if ($page.state.showInfo) {
		tick().then(() => {
			if (closeButton) closeButton.focus();
		});
	}

	function show() {
		pushState('', { showInfo: true });
	}

	function close() {
		history.back();
	}
</script>

<svelte:window on:keydown={onKeydown} />

{#if !$page.state.showInfo}
	<button class="float" on:click={show}>
		<Icon
			name="info"
			title="Informasi dan panduan penggunaan"
			width="2rem"
			height="2rem"
			aria-hidden={$page.state.showInfo}
		/>
	</button>
{/if}

{#if $page.state.showInfo}
	<div class="content" class:show={$page.state.showInfo}>
		<button bind:this={closeButton} on:click={close}>
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
