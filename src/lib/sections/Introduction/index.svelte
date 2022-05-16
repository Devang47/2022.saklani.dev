<script lang="ts">
	import Button from '$components/Button/index.svelte';
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	let paragraphText;
	let paragraphReveal;
	let animateBtn1BG;
	let animateBtn2BG;

	let animateBtn1;
	let animateBtn2;

	onMount(async () => {
		await animate(
			[paragraphReveal, animateBtn1BG, animateBtn2BG],
			{
				width: [0, '100%'],
				left: [0, 0]
			},
			{
				duration: 0.4,
				delay: 1,
				easing: 'ease-in-out'
			}
		).finished;
		await animate(
			[paragraphText, animateBtn1, animateBtn2],
			{
				opacity: 1
			},
			{
				duration: 0
			}
		).finished;
		animate(
			[paragraphReveal, animateBtn1BG, animateBtn2BG],
			{
				width: ['100%', 0],
				left: '100%'
			},
			{
				duration: 0.4,
				easing: 'ease-in-out'
			}
		);
	});
</script>

<header class="introduction-section-wrapper">
	<div class="intro-content">
		<h1 class="my-short-intro">
			<p bind:this={paragraphText}>
				Hello! I’m <span class="highlight-name"> Devang Saklani </span>
				— curious developer based in Uttarakhand, India 🇮🇳. Interested in meditation, websites, science
				& developer tools, human interactions, productivity. Currently Web Developer at IDS, where we're
				building apps that makes the web convenient.
			</p>
			<div class="reveal" bind:this={paragraphReveal} />
		</h1>
		<div class="introduction-links">
			<a href="/about" class="w-full relative">
				<Button bind:bindTarget={animateBtn1} class=" opacity-0 " variant="filled">About me</Button>
				<div class="reveal" bind:this={animateBtn1BG} />
			</a>
			<a href="#contact" class="mt-6 w-full relative">
				<Button bind:bindTarget={animateBtn2} variant="outlined" class=" opacity-0">Contact</Button>
				<div class="reveal" bind:this={animateBtn2BG} />
			</a>
		</div>
	</div>
</header>

<style lang="postcss">
	.introduction-section-wrapper {
		@apply min-h-screen md:min-h-fit md:py-40 lg:py-52 flex justify-start;
		@apply xl:min-h-[90vh] flex items-center justify-center;
		@apply relative overflow-hidden;
	}

	.intro-content {
		@apply lg:flex justify-between items-start gap-6;
		@apply mx-auto w-[90%] sm:w-11/12 md:w-10/12 lg:w-[80%] lg:max-w-6xl h-fit;
		@apply relative z-10 pt-32 pb-20 md:pb-0 md:pt-0;
	}

	.my-short-intro {
		@apply text-[24px] leading-[38px] text-left w-11/12 pb-3;
		@apply sm:w-10/12;
		@apply sm:max-w-lg md:max-w-[37rem] md:w-full text-bright_secondary;
		@apply md:leading-[38px] relative;
	}

	p {
		@apply opacity-0;
	}

	.introduction-links {
		@apply flex items-start justify-start flex-col;
		@apply mt-12 lg:mt-0 w-full max-w-[300px] md:w-[350px] md:max-w-none;
	}
</style>
