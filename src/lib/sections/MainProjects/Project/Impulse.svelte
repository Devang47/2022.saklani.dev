<script lang="ts">
	import Container from '$components/ProjectWrapper/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';
	import { mouseDownHandler } from '$utils/GrabToMove';
</script>

<Container>
	<div class="project-wrapper">
		<div class="lg:w-full">
			<div class="date">2021</div>
			<div class="title ">Impulse | Messaging service</div>
		</div>
		<div class="detail">
			An app that helps you to send messages, links, documents to all of your devices in an
			<span class="highlight"> Encrypted </span>
			and
			<span class="highlight"> Secure </span>
			way! It uses AES and SHA-256 encryption to securely send and store your messages. Basically works
			like Airdrop and works on every device.
			<br /> Tools used: React, Nextjs, Firestore, Sass.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/Impulse"
					target="_blank"
					class="highlight h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal-tint" />
				</a>
				<a
					href="https://impulse.saklani.dev/"
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
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_600/v1662860994/impulse-mobile_yz1xna.webp"
				alt=""
			/>
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1600/v1662860995/impulse_ciwwbk.webp"
				alt=""
			/>
		</div>
	</div>
</Container>
