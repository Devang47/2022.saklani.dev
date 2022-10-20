<script lang="ts">
	import Container from '$lib/components/ProjectWrapper/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';
	import { mouseDownHandler } from '$utils/GrabToMove';
</script>

<Container>
	<div class="project-wrapper">
		<div class="lg:w-full">
			<div class="date">2022</div>
			<div class="title "><a href="https://twclone.saklani.dev/"> Twitter Clone </a></div>
		</div>
		<div class="detail">
			This is basically a clone of Twitter. The main purpose of this project was to <span
				class="highlight"
			>
				practice my skills
			</span>
			in Golang, Github Actions, AWS and Bash scripting.
			<br /> Tools used: Golang, Svetle + Tailwind, Auth0, Mongodb, Vercel, Elastic Beanstack,
			Websocket, Bash.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/twclone"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal-tint" />
				</a>
				<a
					href="https://twclone.saklani.dev/"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Link class="h-full text-white hover:text-teal-tint" />
				</a>
			</div>
		</div>
	</div>
	<div class="project-showcase-images" on:mousedown={mouseDownHandler}>
		<div class="w-fit h-full flex items-center justify-start gap-10 pointer-events-none">
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_600/v1666276614/pic2_e4plv2.webp"
				alt=""
			/>
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1600/v1666276614/pic1_iwt3r8.webp"
				alt=""
			/>
		</div>
	</div>
</Container>
