<script lang="ts">
	import Button from '$components/Button/index.svelte';
	import FlowFields from '$sections/FlowFields/index.svelte';
</script>

<header class="introduction-section-wrapper">
	<div class="intro-content">
		<h1 class="my-short-intro">
			Hello! I’m <span class="highlight-name"> Devang Saklani </span>
			— curious developer based in Uttarakhand, India 🇮🇳. Interested in meditation, websites, science
			& developer tools, human interactions, productivity, ethics. Currently Web Developer at IDS, where
			we're building apps that makes the web convenient.
		</h1>
		<div class="introduction-links">
			<Button variant="filled">About me</Button>
			<Button variant="outlined" class="mt-5">Contact me</Button>
		</div>
	</div>

	<div class="generative-illustration">
		<FlowFields />
	</div>
</header>

<style lang="postcss">
	.introduction-section-wrapper {
		@apply min-h-screen lg:min-h-[82vh] flex items-center justify-start;
		@apply relative overflow-hidden md:pt-8 md:pb-8;
	}

	.intro-content {
		@apply md:flex justify-between items-start gap-6;
		@apply my-4 mx-4 sm:mx-auto md:w-10/12 lg:w-[80%] lg:max-w-6xl;
		@apply relative z-10;
	}

	.my-short-intro {
		@apply text-[22px] md:text-[24px] text-left w-11/12 sm:w-10/12 pb-3;
		@apply sm:max-w-lg md:max-w-[37rem] md:w-full text-bright_secondary;
		@apply md:leading-[38px];
	}

	.introduction-links {
		@apply flex items-start justify-start flex-col;
		@apply mt-4 w-full max-w-[250px] md:w-[300px] md:max-w-none;
	}

	.generative-illustration {
		@apply absolute top-1/3 left-[40%];
	}
</style>
