<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import Star from '$lib/icons/Star.svelte';
</script>

<footer>
	<div class="footer-content">Designed & Built by Devang Saklani</div>
	<div class="footer-links">
		<a href="http://" target="_blank" rel="noopener noreferrer">
			<Github class="block fill-bright_secondary w-[22px] h-[22px]" />
		</a>
		<a href="http://" target="_blank" rel="noopener noreferrer">
			<Star />
		</a>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply py-10;
	}

	.footer-content {
		@apply text-center text-bright_secondary;
		@apply font-bold text-lg mb-1;
	}

	.footer-links {
		@apply flex justify-center items-center gap-2;
	}
</style>
