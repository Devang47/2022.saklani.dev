<script lang="ts">
	import Main from '$pages/Main/index.svelte';

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
	<div class="sk-cube-grid" bind:this={loadingAnimation}>
		<div class="sk-cube sk-cube1" />
		<div class="sk-cube sk-cube2" />
		<div class="sk-cube sk-cube3" />
		<div class="sk-cube sk-cube4" />
		<div class="sk-cube sk-cube5" />
		<div class="sk-cube sk-cube6" />
		<div class="sk-cube sk-cube7" />
		<div class="sk-cube sk-cube8" />
		<div class="sk-cube sk-cube9" />
	</div>
</div>

<div class="loading !bg-cyan-500 !z-40" bind:this={loadingScreen2} />

<main>
	<Main />
</main>

<style lang="postcss">
	.loading {
		@apply fixed inset-0 h-screen w-screen flex items-center justify-center bg-dark_primary z-50;
	}

	.sk-cube-grid {
		width: 50px;
		height: 50px;
		margin: 100px auto;
	}

	.sk-cube-grid .sk-cube {
		@apply bg-bright_primary;
		width: 33%;
		height: 33%;
		float: left;
		-webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
		animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
	}
	.sk-cube-grid .sk-cube1 {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
	.sk-cube-grid .sk-cube2 {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}
	.sk-cube-grid .sk-cube3 {
		-webkit-animation-delay: 0.4s;
		animation-delay: 0.4s;
	}
	.sk-cube-grid .sk-cube4 {
		-webkit-animation-delay: 0.1s;
		animation-delay: 0.1s;
	}
	.sk-cube-grid .sk-cube5 {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
	.sk-cube-grid .sk-cube6 {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}
	.sk-cube-grid .sk-cube7 {
		-webkit-animation-delay: 0s;
		animation-delay: 0s;
	}
	.sk-cube-grid .sk-cube8 {
		-webkit-animation-delay: 0.1s;
		animation-delay: 0.1s;
	}
	.sk-cube-grid .sk-cube9 {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}

	@-webkit-keyframes sk-cubeGridScaleDelay {
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

	@keyframes sk-cubeGridScaleDelay {
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
