<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { TinySlider } from 'svelte-tiny-slider';

	let wrap: HTMLElement;

	$: if (wrap) {
		if ($page.state.mode == 'welcome') {
			wrap.classList.remove('close');
		} else {
			wrap.classList.add('close');
		}
	}

	function close() {
		console.log('close');
		history.back();
	}

	function generateSlides(length = 10, sig = 0): Array<{ src: string; alt: string }> {
		return Array.from({ length }).map((_, index) => {
			index = sig || index;

			return {
				src: `https://source.unsplash.com/random/300x600?sig=${index}`,
				alt: `Image ${index}`
			};
		});
	}
</script>

<div class="welcome close" bind:this={wrap}>
	<TinySlider>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="item" on:click={close}>
			<h2>Akses Qurani</h2>
			<img src="img/access-quran.png" alt="Logo Akses Qurani" />
			<p>Tap layar untuk mulai, swipe untuk melihat petunjuk penggunaan.</p>
			<p>Untuk pengguna screenreader, gunakan dua jari saat melakukan swipe atau tap di layar.</p>
		</a>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="item" on:click={close}>
			<h2>Pindah Halaman</h2>
			<Icon name="swipePointer" width="40vw" height="40vw" style="transform: rotate(-25deg)" />
			<p>Swipe ke kanan atau kiri <kbd>←</kbd> untuk berpindah halaman.</p>
			<p>Aplikasi ini menggunakan standar halaman Mushaf Madinah.</p>
		</a>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="item" on:click={close}>
			<h2>Pindah Ayat</h2>
			<Icon name="swipePointer" width="40vw" height="40vw" style="transform: rotate(-25deg)" />
			<p>Swipe ke atas atau bawah untuk berpindah ayat.</p>
		</a>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="item" on:click={close}>
			<h2>Pindah Surah</h2>
			<Icon name="swipePointer" width="40vw" height="40vw" style="transform: rotate(-25deg)" />
			<p>Swipe ke <code>kanan+bawah</code> atau kiri+bawah untuk berpindah surah.</p>
		</a>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="item" on:click={close}>
			<h2>Pindah Juz</h2>
			<Icon name="swipePointer" width="40vw" height="40vw" style="transform: rotate(-25deg)" />
			<p>Swipe ke kanan+atas atau kiri+atas untuk berpindah juz.</p>
		</a>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="item" on:click={close}>
			<button>Mulai</button>
		</a>
	</TinySlider>
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
	.item {
		text-decoration: none;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.item img {
		width: 50vw;
		height: auto;
	}
	.item h2,
	.item p {
		text-align: center;
		max-width: 70%;
		line-height: 1.3;
	}
</style>
