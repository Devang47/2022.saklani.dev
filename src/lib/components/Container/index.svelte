<script lang="ts">
	import { fly } from 'svelte/transition';

	export let color: 'purple' | 'red' = 'purple';
</script>

<section in:fly={{ y: 20, duration: 600 }}>
	<div class=" absolute inset-0">
		{#if color === 'purple'}
			<svg class="blob-1 purple" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="#4158D6"
					d="M55.8,-59.6C68.6,-43,72.7,-21.5,73.7,0.9C74.6,23.4,72.4,46.8,59.6,60.5C46.8,74.2,23.4,78.2,5.5,72.7C-12.5,67.3,-25,52.4,-37.6,38.7C-50.2,25,-62.9,12.5,-65.1,-2.2C-67.3,-16.9,-59,-33.8,-46.4,-50.4C-33.8,-67.1,-16.9,-83.4,2.3,-85.7C21.5,-88,43,-76.3,55.8,-59.6Z"
					transform="translate(100 100)"
				/>
			</svg>
		{:else if color === 'red'}
			<svg class="blob-1 red" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="#0053B1"
					d="M63.6,-52.4C75.7,-35.6,74.1,-9.5,66.6,11.8C59,33.1,45.4,49.7,27.1,59.9C8.8,70.1,-14.4,74,-30.5,65.4C-46.7,56.8,-56,35.9,-61.4,13.6C-66.8,-8.7,-68.4,-32.3,-57.5,-48.7C-46.7,-65.2,-23.3,-74.6,1.2,-75.6C25.8,-76.5,51.6,-69.1,63.6,-52.4Z"
					transform="translate(100 100)"
				/>
			</svg>
		{/if}
	</div>
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
		@apply relative;

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
