<script lang="ts">
	import { animate, stagger, timeline } from 'motion';
	import { onMount } from 'svelte';

	let loadingAnimation;
	let loadingScreen;
	let loadingScreen2;

	onMount(() => {
		animate(
			[loadingScreen, loadingScreen2],
			{
				height: 0,
				display: 'none'
			},
			{
				duration: 0.6,
				delay: stagger(0.2),
				easing: 'ease-in-out'
			}
		);

		animate(
			loadingAnimation,
			{
				opacity: 0
			},
			{
				duration: 0.5
			}
		);
	});
</script>

<div class="loading" bind:this={loadingScreen}>
	<div class="anime-cube-grid" bind:this={loadingAnimation}>
		<div class="anime-cube anime-cube1" />
		<div class="anime-cube anime-cube2" />
		<div class="anime-cube anime-cube3" />
		<div class="anime-cube anime-cube4" />
		<div class="anime-cube anime-cube5" />
		<div class="anime-cube anime-cube6" />
		<div class="anime-cube anime-cube7" />
		<div class="anime-cube anime-cube8" />
		<div class="anime-cube anime-cube9" />
	</div>
</div>

<div
	class="loading !bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 !z-40"
	bind:this={loadingScreen2}
/>

<style lang="postcss">
	.loading {
		@apply fixed inset-0 h-screen w-screen flex items-center justify-center bg-dark_primary z-50;
	}

	.anime-cube-grid {
		width: 50px;
		height: 50px;
		margin: 100px auto;
	}

	.anime-cube-grid .anime-cube {
		@apply bg-bright_primary;
		width: 33%;
		height: 33%;
		float: left;
		-webkit-animation: anime-cubeGridScaleDelay 1.3s infinite ease-in-out;
		animation: anime-cubeGridScaleDelay 1.3s infinite ease-in-out;
	}
	.anime-cube-grid .anime-cube1 {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
	.anime-cube-grid .anime-cube2 {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}
	.anime-cube-grid .anime-cube3 {
		-webkit-animation-delay: 0.4s;
		animation-delay: 0.4s;
	}
	.anime-cube-grid .anime-cube4 {
		-webkit-animation-delay: 0.1s;
		animation-delay: 0.1s;
	}
	.anime-cube-grid .anime-cube5 {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
	.anime-cube-grid .anime-cube6 {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}
	.anime-cube-grid .anime-cube7 {
		-webkit-animation-delay: 0s;
		animation-delay: 0s;
	}
	.anime-cube-grid .anime-cube8 {
		-webkit-animation-delay: 0.1s;
		animation-delay: 0.1s;
	}
	.anime-cube-grid .anime-cube9 {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}

	@-webkit-keyframes anime-cubeGridScaleDelay {
		0%,
		70%,
		100% {
			-webkit-transform: scale3D(1, 1, 1);
			transform: scale3D(1, 1, 1);
		}
		35% {
			-webkit-transform: scale3D(0, 0, 1);
			transform: scale3D(0, 0, 1);
		}
	}

	@keyframes anime-cubeGridScaleDelay {
		0%,
		70%,
		100% {
			-webkit-transform: scale3D(1, 1, 1);
			transform: scale3D(1, 1, 1);
		}
		35% {
			-webkit-transform: scale3D(0, 0, 1);
			transform: scale3D(0, 0, 1);
		}
	}
</style>
