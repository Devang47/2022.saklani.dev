<script lang="ts">
	import Container from '$components/ProjectWrapper/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';
	import { mouseDownHandler } from '$utils/GrabToMove';
</script>

<Container>
	<div class="project-wrapper">
		<div class="lg:w-full">
			<div class="date">2023</div>
			<div class="title">
				<a href="https://menyu.saklani.dev/" target="_blank" rel="noopener noreferrer">
					Menyú | Qr menu generator</a
				>
			</div>
		</div>
		<div class="detail">
			This app allows restaurants and cafes to easily create a <span class="highlight">
				digital menu</span
			>, which customers can access by scanning a <span class="highlight">QR code</span>. It
			promotes social distancing and reduces physical contact. It also offers a range of
			customization options, including multiple language support, analytics, and secure hosting.
			With its user-friendly interface, businesses can quickly adapt to the pandemic situation,
			while also offering an eco-friendly alternative to traditional paper menus.

			<br /> Tools used: Sveltekit, Tailwind, Firestore.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/Menyu"
					target="_blank"
					class="highlight h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal-tint" />
				</a>
				<a
					href="https://menyu.saklani.dev/"
					target="_blank"
					class="highlight h-full"
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
				src="https://cdn.raster.app/kitatsu/library-1/lvpr9z1UTA?ixlib=js-3.7.0&width=1846&height=3610&compress=false&fm=webp&q=82&s=db1d69646f679cdc2561c39fef46abab"
				alt=""
			/>
			<img
				loading="lazy"
				src="https://cdn.raster.app/kitatsu/library-1/WAwjDXRS2G?ixlib=js-3.7.0&width=4726&height=3610&compress=false&fm=webp&q=82&s=edde2d54fba0fd04e388144cfae2768d"
				alt=""
			/>
		</div>
	</div>
</Container>
