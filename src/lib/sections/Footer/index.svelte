<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import Star from '$lib/icons/Star.svelte';
</script>

<footer>
	<div class="footer-content">Designed & Built by Devang Saklani</div>
	<div class="footer-links">
		<a href="https://github.com/Devang47/portfolio-2022" target="_blank" rel="noopener noreferrer">
			<Github class="block fill-bright_secondary w-[18px] h-[18px]" />
		</a>
		<a href="https://github.com/Devang47/portfolio-2022" target="_blank" rel="noopener noreferrer">
			<Star class="block fill-bright_secondary w-[28px] h-[28px]" />
		</a>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply py-10;
	}

	.footer-content {
		@apply text-center text-bright_secondary;
		@apply font-semibold text-sm mb-1;
	}

	.footer-links {
		@apply flex justify-center items-center gap-2;
	}
</style>
