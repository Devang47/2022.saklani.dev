<script lang="ts">
	import Container from '$components/Container/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';

	let container;
	let pos = { top: 0, left: 0, x: 0, y: 0 };

	const mouseDownHandler = function (e) {
		container.style.cursor = 'grabbing';
		container.style.userSelect = 'none';

		pos = {
			// The current scroll
			left: container.scrollLeft,
			top: container.scrollTop,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY
		};

		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mouseup', mouseUpHandler);
	};

	const mouseMoveHandler = function (e) {
		// How far the mouse has been moved
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;

		// Scroll the element
		container.scrollTop = pos.top - dy;
		container.scrollLeft = pos.left - dx;
	};

	const mouseUpHandler = function () {
		document.removeEventListener('mousemove', mouseMoveHandler);
		document.removeEventListener('mouseup', mouseUpHandler);

		container.style.cursor = 'grab';
		container.style.removeProperty('user-select');
	};
</script>

<Container >
	<div class="wrapper">
		<div class="lg:w-full">
			<div class="date">2021</div>
			<div class="title" title="Portfolio with Three.js">Portfolio with Three.js</div>
		</div>
		<div class="detail">
			This is a template portfolio website built using Threejs, inspired from ilithya. In this
			project I worked with TextGeometry and Points in Three.js and optimized the website using the
			best practices.
			<br /> Tools used: Webpack, Threejs, Dat.gui, Sass.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/ThreeJS-Portfolio-template"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal_tint" />
				</a>
				<a
					href="https://threejs-portfolio-website.netlify.app/"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Link class="h-full text-white hover:text-teal_tint" />
				</a>
			</div>
		</div>
	</div>
	<div class="showcase-images" bind:this={container} on:mousedown={mouseDownHandler}>
		<div class="w-fit h-full flex items-center justify-start gap-10 pointer-events-none">
			<img loading="lazy" src="/images/project-showcase/threejs-portfolio-mobile.webp" alt="" />
			<img loading="lazy" src="/images/project-showcase/threejs-portfolio.webp" alt="" />
		</div>
	</div>
</Container>

<style lang="postcss">
	.wrapper {
		@apply lg:grid;
		grid-template-columns: 300px 1fr;
	}

	.date {
		@apply text-bright_secondary;
	}

	.title {
		@apply text-bright_primary font-bold text-[24px] mt-1;
	}

	.detail {
		@apply text-[20px] leading-8 mt-6 lg:mt-0;
	}

	img {
		@apply block h-full w-auto rounded-lg object-contain max-w-none;
	}

	.showcase-images {
		@apply overflow-scroll mt-12 w-full h-[40rem] py-5 px-4;
	}
</style>
