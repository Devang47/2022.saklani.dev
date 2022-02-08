<script lang="ts">
	import Container from '$components/Container/index.svelte';
</script>

<Container color={'red'}>
	<div class="wrapper">
		<div class="lg:w-full">
			<div class="date">2020 - Current</div>
			<div class="title">IDS Company</div>
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
</style>
