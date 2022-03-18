<script lang="ts">
	import Container from '$components/Container/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';
</script>

<Container color="red">
	<div class="wrapper">
		<div class="lg:w-full">
			<div class="date">2022</div>
			<div class="title ">Rate thumbnials</div>
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
	<div class="showcase-images">
		<div class="w-fit h-full flex items-center justify-start gap-10">
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
