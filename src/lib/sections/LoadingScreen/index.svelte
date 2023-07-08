<script lang="ts">
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	let loadingScreen2;

	onMount(() => {
		animate(
			loadingScreen2,
			{
				opacity: 0,
				display: 'none'
			},
			{
				duration: 0.6
			}
		);
	});
</script>

<div class="loading !bg-black opacity-100 !z-40" bind:this={loadingScreen2} />

<style lang="postcss">
	.loading {
		@apply fixed inset-0 h-screen w-screen flex items-center justify-center z-50;
	}

	/* .anime-cube-grid {
		width: 50px;
		height: 50px;
		margin: 100px auto;
	}

	.anime-cube-grid .anime-cube {
		@apply bg-bright-primary;
		width: 33%;
		height: 33%;
		float: left;
		animation: anime-cubeGridScaleDelay 1.3s infinite ease-in-out;
	}
	.anime-cube-grid .anime-cube1 {
		animation-delay: 0.2s;
	}
	.anime-cube-grid .anime-cube2 {
		animation-delay: 0.3s;
	}
	.anime-cube-grid .anime-cube3 {
		animation-delay: 0.4s;
	}
	.anime-cube-grid .anime-cube4 {
		animation-delay: 0.1s;
	}
	.anime-cube-grid .anime-cube5 {
		animation-delay: 0.2s;
	}
	.anime-cube-grid .anime-cube6 {
		animation-delay: 0.3s;
	}
	.anime-cube-grid .anime-cube7 {
		animation-delay: 0s;
	}
	.anime-cube-grid .anime-cube8 {
		animation-delay: 0.1s;
	}
	.anime-cube-grid .anime-cube9 {
		animation-delay: 0.2s;
	}

	@keyframes anime-cubeGridScaleDelay {
		0%,
		70%,
		100% {
			transform: scale3D(1, 1, 1);
		}
		35% {
			transform: scale3D(0, 0, 1);
		}
	} */
</style>
