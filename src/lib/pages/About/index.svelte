<script>
	import Close from '$lib/icons/Close.svelte';
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	onMount(async () => {
		const textRef = [...document.getElementsByTagName('p')];
		const loaderRef = [...document.getElementsByClassName('reveal')];

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
	<div class="intro-content text-bright-secondary">
		<div class="text">
			<div class="relative mt-7">
				<div class="relative">
					<p>
						Hello! My name is <span class="highlight">Devang Saklani</span> and I enjoy creating
						things that live on the internet. I am a
						<span class="highlight">Self-taught Software Engineer</span> and currently looking for new
						opportunities.
					</p>
					<div class="reveal" />
				</div>
				<div class="mt-4 relative">
					<p>
						I started my journey back in 2015, I was in school, and the school had just installed a
						new computer lab, I didn’t have a computer at my home but I was already really
						interested in computers and new technologies. I learned a lot of things in that lab
						including HTML, and my interest got even bigger.
						<span class="reveal" />
					</p>
					<div class="reveal" />
				</div>
			</div>

			<div class="relative mt-7">
				<p>
					Recently I <a
						href="https://rooms.saklani.dev/"
						class="highlight highlight-name flex items-center gap-2"
						target="_blank"
						rel="noopener noreferrer"
						>created a application
					</a> that lets you create a private chat room where you can share text & files across multiple
					anonymous devices.
				</p>
				<div class="reveal" />
			</div>

			<div class="relative mt-7">
				<p>Here are a few tools I’ve been working with recently:</p>
				<div class="reveal" />
			</div>

			<div class="grid grid-cols-2 pb-10 md:pb-0">
				<ul class="mt-4 flex flex-col gap-2">
					{#each ['TypeScript', 'Nextjs', 'AWS Beanstack & EC2', 'Golang'] as item}
						<li class="relative w-fit">
							<p>▹ {item}</p>
							<div class="reveal" />
						</li>
					{/each}
				</ul>

				<ul class="mt-4 flex flex-col gap-2">
					{#each ['Svelte', 'Tailwind', 'Node & Express', 'MongoDB'] as item}
						<li class="relative w-fit">
							<p>▹ {item}</p>
							<div class="reveal" />
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="w-full mt-10 lg:my-10 max-w-sm md:max-w-md relative">
			<p>
				<!-- <img src="/images/png/devang.png" alt="" /> -->
				<img class="rounded-md w-full" src="/images/png/devang-1-min.jpeg" alt="" />
			</p>
			<div class="reveal" />
		</div>
	</div>
</section>

<a href="/" class="absolute top-5 left-5 h-12 w-12 cursor-pointer">
	<Close class="w-full h-full" />
</a>

<style>
	p {
		position: relative;
	}
</style>
