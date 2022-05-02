<script lang="ts">
	import { fly } from 'svelte/transition';

	import Button from '$components/Button/index.svelte';
	import FlowFields from '$sections/FlowFields/index.svelte';
</script>

<header class="introduction-section-wrapper">
	<div class="intro-content" in:fly={{ y: 20, duration: 600 }}>
		<h1 class="my-short-intro">
			Hello! I’m <span class="highlight-name"> Devang Saklani </span>
			— curious developer based in Uttarakhand, India 🇮🇳. Interested in meditation, websites, science
			& developer tools, human interactions, productivity. Currently Web Developer at IDS, where we're
			building apps that makes the web convenient.
		</h1>
		<div class="introduction-links">
			<a href="/about" class="w-full">
				<Button variant="filled">About me</Button>
			</a>
			<a href="#contact" class="w-full">
				<Button variant="outlined" class="mt-6">Contact</Button>
			</a>
		</div>
	</div>

	<div class="generative-illustration" in:fly={{ y: 20, duration: 600 }}>
		<FlowFields />
	</div>
</header>

<style lang="postcss">
	.introduction-section-wrapper {
		@apply min-h-screen md:min-h-fit md:py-40 lg:py-52 flex justify-start;
		@apply xl:min-h-[70vh] flex items-center justify-center;
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
		@apply md:leading-[38px];
	}

	.introduction-links {
		@apply flex items-start justify-start flex-col;
		@apply mt-12 lg:mt-0 w-full max-w-[300px] md:w-[350px] md:max-w-none;
	}

	.generative-illustration {
		@apply absolute top-1/3 left-[40%] 2xl:left-[50%];
	}
</style>
