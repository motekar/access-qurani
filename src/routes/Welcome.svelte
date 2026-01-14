<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { TinySlider } from 'svelte-tiny-slider';
	import { config } from '$lib/globalState';

	let wrap: HTMLElement;

	$: if (wrap) {
		if ($page.state.mode == 'welcome') {
			wrap.classList.remove('close');
		} else {
			wrap.classList.add('close');
		}
	}

	function close() {
		history.back();
	}
</script>

<div class="welcome close" bind:this={wrap}>
	<div class="container">
		<TinySlider>
			{#snippet children({ sliderWidth })}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="item" on:click={close} style="width: {sliderWidth}px;">
					<h2>{$config.name}</h2>
					<img src="img/access-quran.png" alt={'Logo ' + $config.name} />
					<p>Tap layar untuk mulai, swipe untuk melihat petunjuk penggunaan.</p>
					<p>
						Untuk pengguna screenreader, gunakan dua jari saat melakukan swipe atau tap di layar.
					</p>
				</a>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="item" on:click={close} style="width: {sliderWidth}px;">
					<h2>Pindah Halaman</h2>
					<Icon
						aria-hidden="true"
						name="swipePointer"
						width="30%"
						height="30%"
						style="transform: rotate(-25deg)"
					/>
					<p>Swipe ke kanan atau kiri <kbd>←</kbd> untuk berpindah halaman.</p>
					<p>Aplikasi ini menggunakan standar halaman Mushaf Madinah.</p>
				</a>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="item" on:click={close} style="width: {sliderWidth}px;">
					<h2>Pindah Ayat</h2>
					<Icon
						aria-hidden="true"
						name="swipePointer"
						width="30%"
						height="30%"
						style="transform: rotate(-25deg)"
					/>
					<p>Swipe ke atas atau bawah untuk berpindah ayat.</p>
				</a>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="item" on:click={close} style="width: {sliderWidth}px;">
					<h2>Pindah Surah</h2>
					<Icon
						aria-hidden="true"
						name="swipePointer"
						width="30%"
						height="30%"
						style="transform: rotate(-25deg)"
					/>
					<p>Swipe ke <code>kanan+bawah</code> atau kiri+bawah untuk berpindah surah.</p>
				</a>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="item" on:click={close} style="width: {sliderWidth}px;">
					<h2>Pindah Juz</h2>
					<Icon
						aria-hidden="true"
						name="swipePointer"
						width="30%"
						height="30%"
						style="transform: rotate(-25deg)"
					/>
					<p>Swipe ke kanan+atas atau kiri+atas untuk berpindah juz.</p>
				</a>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="item" on:click={close} style="width: {sliderWidth}px;">
					<button>Mulai</button>
				</a>
			{/snippet}
		</TinySlider>
	</div>
</div>

<style>
	.welcome {
		width: 100vw;
		height: 100vh;
		background-color: white;
		position: absolute;
		z-index: 999999;
	}
	.welcome.close {
		display: none;
	}
	.container {
		max-width: 700px;
		margin: 0 auto;
	}
	.item {
		text-decoration: none;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.item img {
		width: 30%;
		height: auto;
	}
	.item h2,
	.item p {
		text-align: center;
		max-width: 70%;
		line-height: 1.3;
	}
</style>
