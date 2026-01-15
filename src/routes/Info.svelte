<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { config } from '$lib/globalState';
	import { tick } from 'svelte';

	let closeButton = $state<HTMLButtonElement>();

	function onKeydown(event: KeyboardEvent) {
		if ($page.state.mode == 'info' && event.key == 'Escape') {
			close();
		}
	}

	$effect(() => {
		if ($page.state.mode == 'info') {
			tick().then(() => {
				if (closeButton) closeButton.focus();
			});
		}
	});

	function show() {
		pushState('', { mode: 'info' });
	}

	function close() {
		history.back();
	}
</script>

<svelte:window onkeydown={onKeydown} />

{#if $page.state.mode != 'info'}
	<button class="float" onclick={show}>
		<Icon
			name="info"
			title="Informasi dan panduan penggunaan"
			width="2rem"
			height="2rem"
			aria-hidden={$page.state.mode == 'info'}
		/>
	</button>
{/if}

{#if $page.state.mode == 'info'}
	<div class="content" class:show={$page.state.mode == 'info'}>
		<button bind:this={closeButton} onclick={close}>
			<Icon name="leftArrow" title="Kembali" width="2rem" height="2rem" />
		</button>
		<h1>{$config.name}</h1>
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
