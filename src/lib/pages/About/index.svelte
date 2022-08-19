<script>
	import Close from '$lib/icons/Close.svelte';
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	const textRef = {};

	onMount(async () => {
		const textRef = [...document.getElementsByTagName('p')];
		const loaderRef = [...document.getElementsByClassName('reveal')];
		console.log(textRef);

		await animate(
			loaderRef,
			{
				width: [0, '100%'],
				left: [0, 0]
			},
			{
				duration: 0.4,
				delay: 0.3,
				easing: 'ease-in-out'
			}
		).finished;
		await animate(
			textRef,
			{
				opacity: 1
			},
			{
				duration: 0
			}
		).finished;
		animate(
			loaderRef,
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

<section class="about-section-wrapper">
	<div class="intro-content text-bright_secondary">
		<span>
			<div class="relative mt-7">
				<p>
					Hello! My name is Devang and I enjoy creating things that live on the internet. I am a
					Self-taught Web developer, currently working at <a
						href="https://monogram.io/"
						class="link highlight-name"
						target="_blank"
						rel="noopener noreferrer"
					>
						Monogram</a
					>. My interest in web development started back in 2017 when I first tried editing blogger
					themes — turns out creating a custom blogger theme taught me a lot about HTML & CSS!
				</p>

				<div class="reveal" />
			</div>

			<div class="relative mt-7">
				<p>
					I also recently <a
						href="https://impulse.saklani.dev/"
						class="link highlight-name"
						target="_blank"
						rel="noopener noreferrer">created a webapp</a
					> that lets you send messages, links, documents to all of your devices with a encrypted and
					secure way using Next.js & Firebase.
				</p>
				<div class="reveal" />
			</div>

			<div class="relative mt-7">
				<p>Here are a few tools I’ve been working with recently:</p>
				<div class="reveal" />
			</div>

			<div class="grid grid-cols-2 pb-10 md:pb-0">
				<ul class="mt-4 flex flex-col gap-2">
					<li class="relative w-fit">
						<p>▹ TypeScript</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ React</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ Firebase</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ React Native</p>
						<div class="reveal" />
					</li>
				</ul>

				<ul class="mt-4 flex flex-col gap-2">
					<li class="relative w-fit">
						<p>▹ Svelte</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ Tailwind</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ Node & Express</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ MongoDB</p>
						<div class="reveal" />
					</li>
				</ul>
			</div>
		</span>

		<div class="w-full mt-10 lg:my-10 md:max-w-md relative">
			<p>
				<img src="/images/png/devang.png" alt="" />
			</p>
			<div class="reveal" />
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

	li {
		font-family: 'Fira Code', monospace;
		@apply text-sm md:text-base;
	}

	p {
		opacity: 0;
	}
</style>
