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
			<div class="title">
				<a href="https://rooms.saklani.dev/" target="_blank" rel="noopener noreferrer">ChatRooms</a>
			</div>
		</div>
		<div class="detail">
			In this website you can create a <span class="highlight"> private chat room </span> and share
			data across <span class="highlight"> multiple devices</span>. When you click the create room
			button it will generate a 6 digit room code which can be then used to join the room from
			different devices. The chat room will automatically delete after 15min.
			<br /> Tools used: Svetle + Tailwind, Firebase & Firestore, Vercel, Cloudflare Workers, Cron
			Job.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/Devang47/rooms.saklani.dev"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal-tint" />
				</a>
				<a
					href="https://rooms.saklani.dev/"
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
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_600/v1663515308/Group_1479_pbpdpw.jpg"
				alt=""
			/>
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1600/v1663515307/Group_1478_kata80.jpg"
				alt=""
			/>
		</div>
	</div>
</Container>
