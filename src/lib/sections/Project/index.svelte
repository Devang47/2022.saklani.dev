<script lang="ts">
	import Container from '$components/Container/index.svelte';
</script>

<Container color="purple">
	<div class="wrapper">
		<div class="lg:w-full">
			<div class="date">2020 - Current</div>
			<div class="title ">Impulse | Messaging service</div>
		</div>
		<div class="detail">
			An app that helps you to send messages, links, documents to all of your devices in an
			Encrypted and Secure way! It uses AES and SHA-256 encryption to securely send and store your
			messages.
			<br /> Tools used: React, Nextjs, Firestore, Sass.
		</div>
	</div>
	<div class="showcase-images">
		<img src="/images/impulse-mobile.png" alt="" />
		<img src="/images/impulse.png" alt="" />
	</div>
</Container>

<div class="mt-32 md:mt-36" />

<Container color={'red'}>
	<div class="wrapper">
		<div class="lg:w-full">
			<div class="date">2020 - Current</div>
			<div class="title highlight-name">IDS Company</div>
		</div>
		<div class="detail">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam similique earum ut dicta sunt
			praesentium tenetur aspernatur impedit ducimus. Enim aliquid hic esse, adipisci reiciendis
			beatae molestiae ex vero, aspernatur laborum consectetur magni earum eligendi quidem in
			officia minus.
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
		@apply h-full rounded-lg;
	}

	.showcase-images {
		@apply overflow-scroll mt-12 w-full h-[40rem] py-5 px-4;
		@apply flex items-center justify-start gap-10;
	}
</style>
