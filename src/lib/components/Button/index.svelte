<script lang="ts">
	export let variant: 'filled' | 'outlined' = 'filled';
	export let padding: 'rectangle' | 'square' = 'rectangle';
</script>

<button class={`${variant} button ${$$props.class} ${padding}`}>
	<slot />
</button>

<style lang="postcss">
	.button {
		@apply rounded-lg text-bright_primary font-bold w-full;
		@apply text-[16px] flex items-center justify-center;
		@apply duration-200 transition-all ease-in-out whitespace-nowrap text-center;
		@apply leading-[24px];
	}

	.rectangle {
		@apply py-4 md:py-5 px-12 md:px-20;
	}

	.square {
		@apply py-4 md:py-5 px-5 md:px-6;
	}

	.filled {
		@apply bg-dark_secondary hover:bg-[#1B1B1B];
	}

	.outlined {
		@apply bg-dark_primary border border-[#272727] hover:bg-[#121212];
	}
</style>
