<script lang="ts">
	import { addObserver } from '$stores/cursor';
	import { onMount } from 'svelte';

	let sectionRef;
	onMount(() => {
		addObserver(sectionRef);
	});
</script>

<section bind:this={sectionRef}>
	<div class=" z-10 relative">
		<slot />
	</div>
</section>

<style lang="postcss">
	section {
		@apply bg-dark_button rounded-lg text-bright_secondary;
		@apply w-full sm:w-11/12 md:w-10/12 lg:w-[80%] lg:max-w-6xl mx-auto;
		@apply py-14 px-6 md:px-12 md:py-16 lg:px-16;
		@apply bg-opacity-90 backdrop-blur-[2px] overflow-hidden;
		@apply relative opacity-0;

		box-shadow: 0px 2.4px 2.2px rgba(0, 0, 0, 0.07), 0px 5.8px 5.3px rgba(0, 0, 0, 0.101),
			0px 10.9px 10px rgba(0, 0, 0, 0.125), 0px 19.4px 17.9px rgba(0, 0, 0, 0.149),
			0px 36.3px 33.4px rgba(0, 0, 0, 0.18), 0px 87px 80px rgba(0, 0, 0, 0.25);
	}

	.blob-1 {
		animation: move 20s ease-in-out alternate-reverse infinite;
		height: 600px;
		width: 600px;
	}

	@keyframes move {
		0% {
			transform: scale(1) translate(0px, -10px);
		}
		38% {
			transform: scale(0.8, 1) translate(30%, 55%) rotate(160deg);
		}
		40% {
			transform: scale(0.8, 1) translate(30%, 55%) rotate(160deg);
		}
		78% {
			transform: scale(1.2) translate(-20%, 30%) rotate(-20deg);
		}
		80% {
			transform: scale(1.2) translate(-20%, 30%) rotate(-20deg);
		}
		100% {
			transform: scale(1) translate(120px, 20px);
		}
	}
</style>
