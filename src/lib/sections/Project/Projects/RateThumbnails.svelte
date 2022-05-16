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

<Container>
	<div class="wrapper">
		<div class="lg:w-full">
			<div class="date">2022</div>
			<div class="title ">Rate thumbnails</div>
		</div>
		<div class="detail">
			In this app you can add, select or judge thumbnails according your liking. Add a thumbnail,
			title and this app will show you the youtube video preview, you can also add videos from
			youtube, add multiple videos and then you can judge which one looks better.
			<br /> Tools used: Svetle + Tailwind, MongoDB + Mongoose, Nodejs + Express.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/rate-thumbnails-frontend"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal_tint" />
				</a>
				<a
					href="https://rate-thumbnails.saklani.dev/"
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
			<img loading="lazy" src="/images/project-showcase/rate-thumbnail-mobile.webp" alt="" />
			<img loading="lazy" src="/images/project-showcase/rate-thumbnail.webp" alt="" />
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
