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
		box-shadow: 0px 2.4px 2.2px rgba(0, 0, 0, 0.07), 0px 5.8px 5.3px rgba(0, 0, 0, 0.101),
			0px 10.9px 10px rgba(0, 0, 0, 0.125), 0px 19.4px 17.9px rgba(0, 0, 0, 0.149),
			0px 36.3px 33.4px rgba(0, 0, 0, 0.18), 0px 87px 80px rgba(0, 0, 0, 0.25);
	}

	.rectangle {
		@apply py-4 md:py-5 px-12 md:px-20;
	}

	.square {
		@apply py-4 md:py-5 px-5 md:px-6;
	}

	.filled {
		@apply bg-dark_button hover:bg-dark_secondary;
	}

	.outlined {
		@apply bg-dark_primary border border-[#1a1a1a] hover:border-[#272727];
	}
</style>
