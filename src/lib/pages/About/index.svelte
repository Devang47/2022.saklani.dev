<script>
	import { fly } from 'svelte/transition';
	import Close from '$lib/icons/Close.svelte';
</script>

<section class="about-section-wrapper" in:fly={{ y: 20, duration: 600 }}>
	<div class="intro-content">
		<span>
			<p>
				Hello! My name is Devang and I enjoy creating things that live on the internet. I am a
				Self-taught Web developer, currently working at <a
					href="https://ids.company"
					class="link highlight-name"
					target="_blank"
					rel="noopener noreferrer"
				>
					IDS Company</a
				>. My interest in web development started back in 2017 when I first tried editing blogger
				themes — turns out creating a custom blogger theme taught me a lot about HTML & CSS!
			</p>

			<p>
				I also recently <a
					href="http://"
					class="link highlight-name"
					target="_blank"
					rel="noopener noreferrer">created a webapp</a
				> that lets you send messages, links, documents to all of your devices with a encrypted and secure
				way using Next.js & Firebase.
			</p>

			<p>Here are a few tools I’ve been working with recently:</p>

			<div class="grid grid-cols-2 pb-10 md:pb-0">
				<ul class="mt-4 flex flex-col gap-2">
					<li>▹ TypeScript</li>
					<li>▹ React</li>
					<li>▹ Firebase</li>
					<li>▹ Web3 & Etherjs</li>
				</ul>

				<ul class="mt-4 flex flex-col gap-2">
					<li>▹ Svelte</li>
					<li>▹ Tailwind</li>
					<li>▹ Node & Express</li>
					<li>▹ MongoDB</li>
				</ul>
			</div>
		</span>

		<div class="w-full mt-10 lg:my-10 md:max-w-md">
			<img src="/images/png/devang.png" alt="" />
		</div>
	</div>
</section>

<a href="/" class="absolute top-5 left-5 h-12 w-12 cursor-pointer">
	<Close class="w-full h-full" />
</a>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
	.about-section-wrapper {
		@apply pt-20 md:py-24 lg:py-28 flex items-center justify-start;
		@apply relative overflow-hidden text-bright_secondary;
	}

	.intro-content {
		@apply flex flex-col-reverse lg:flex-row justify-between items-start gap-2 lg:gap-6;
		@apply mx-auto w-[90%] sm:w-11/12 md:w-10/12 lg:w-[80%] lg:max-w-6xl;
		@apply relative z-10;
	}

	.intro-content > span {
		@apply text-[20px] leading-[34px] text-left w-11/12 pb-3;
		@apply sm:w-10/12;
		@apply sm:max-w-lg md:max-w-[37rem] md:w-full text-bright_secondary;
		@apply md:leading-[36px];
	}

	p {
		@apply mt-7;
	}

	li {
		font-family: 'Fira Code', monospace;
		@apply text-sm md:text-base;
	}
</style>
