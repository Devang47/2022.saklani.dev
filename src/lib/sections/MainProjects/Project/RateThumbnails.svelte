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
			<div class="title ">Rate thumbnails</div>
		</div>
		<div class="detail">
			In this app you can add, select or
			<span class="highlight"> judge thumbnails </span>
			 according to your liking. Add a thumbnail, title and this app
			will show you the youtube video preview, you can also add videos
			from youtube, add multiple videos and then you can judge which one looks better.
			
			<br /> Tools used: Svetle + Tailwind, MongoDB + Mongoose, Nodejs + Express.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/rate-thumbnails-frontend"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal-tint" />
				</a>
				<a
					href="https://rate-thumbnails.saklani.dev/"
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
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_600/v1662860995/rate-thumbnail-mobile_bt95kw.webp"
				alt=""
			/>
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1600/v1662860995/rate-thumbnail_cqujkw.webp"
				alt=""
			/>
		</div>
	</div>
</Container>
