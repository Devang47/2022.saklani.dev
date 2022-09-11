<script lang="ts">
	import Container from '$lib/components/ProjectWrapper/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';
	import { mouseDownHandler } from '$utils/GrabToMove';
</script>

<Container>
	<div class="project-wrapper">
		<div class="lg:w-full">
			<div class="date">2021</div>
			<div class="title" title="Portfolio with Three.js">Portfolio with Three.js</div>
		</div>
		<div class="detail">
			This is a template portfolio website built using Threejs, inspired from ilithya. In this
			project I worked with <span class="highlight"> TextGeometry </span> and
			<span class="highlight"> Points</span>
			in Three.js and optimized the website using the best practices.
			<br /> Tools used: Webpack, Threejs, Dat.gui, Sass.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/ThreeJS-Portfolio-template"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal-tint" />
				</a>
				<a
					href="https://threejs-portfolio-website.netlify.app/"
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
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_600/v1662860995/threejs-portfolio-mobile_ezmrff.webp"
				alt=""
			/>
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1600/v1662860996/threejs-portfolio_u12wfh.webp"
				alt=""
			/>
		</div>
	</div>
</Container>
