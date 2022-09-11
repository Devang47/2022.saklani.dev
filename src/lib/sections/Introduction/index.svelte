<script lang="ts">
	import Button from '$components/Button/index.svelte';
	import DocumentIcon from '$lib/icons/DocumentIcon.svelte';
	import Gmail from '$lib/icons/Gmail.svelte';
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
				Hello! I’m Devang Saklani — curious developer based in Uttarakhand, India 🇮🇳. Interested in

				<span class="text-[#e06b74]"> meditation</span>,
				<span class="text-[#98c379]"> websites</span>,
				<span class="text-[#e5c07a]"> science & developer tools</span>,
				<span class="text-[#62aeef]"> human interactions</span>,
				<span class="text-[#c778dd]"> productivity</span>
				. Currently Web Developer at Monogram, where we're building custom Jamstack products for business
				needs.
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
