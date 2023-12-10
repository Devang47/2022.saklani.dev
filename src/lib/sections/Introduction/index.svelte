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
				Hello! I’m <span class="font-semibold"> Devang Saklani</span> — curious developer based in Uttarakhand,
				India 🇮🇳. Interested in photography, cycling, science & developer tools, human interactions,
				productivity. Currently learning DevOps and looking for new opportunities as a Web Developer.
			</p>
			<div class="reveal" bind:this={paragraphReveal} />
		</h1>
		<div class="introduction-links">
			<a aria-label="Visit about page" href="/about" class="w-full relative">
				<Button
					label="Visit about page"
					bind:bindTarget={animateBtn1}
					class="opacity-0"
					variant="filled">About me</Button
				>
				<div class="reveal" bind:this={animateBtn1BG} />
			</a>
			<button
				on:click={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
				class="mt-6 w-full relative"
			>
				<Button
					label="Show contact links"
					bind:bindTarget={animateBtn2}
					variant="outlined"
					class="opacity-0">Contact</Button
				>
				<div class="reveal" bind:this={animateBtn2BG} />
			</button>
		</div>
	</div>
</header>
