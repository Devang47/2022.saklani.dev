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
					Self-taught Web developer and currently looking for new opportunities.
				</p>
				<p>
					I started my journey back in 2015, I was in school, and the school had just installed a
					new computer lab, I didn’t have a computer at my home but I was already really interested
					in computers and new technologies. I learned a lot of things in that lab including HTML,
					and my interest got even bigger.
				</p>
				<p>
					I always wanted a personal laptop but due to my financial conditions, it got delayed and
					delayed. My parents saw that and like every parent, they sacrificed a lot for their
					children. In 2020, my mom withdrew her savings and bought me a laptop, it was a Lenovo
					Ideapad. I always wanted to make my parents proud and support my family and it was the
					driving force that made me really passionate and hard working. After 7 months I got my
					first job.
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
						<p>▹ Nextjs</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ AWS Beanstack & EC2</p>
						<div class="reveal" />
					</li>
					<li class="relative w-fit">
						<p>▹ Golang</p>
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
