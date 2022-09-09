<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import Star from '$lib/icons/Star.svelte';
	import { addObserver } from '$stores/cursor';
	import { onMount } from 'svelte';

	let sectionRef;
	onMount(() => {
		addObserver(sectionRef);
	});
</script>

<footer bind:this={sectionRef}>
	<div class="footer-content relative inline">Designed & Built by Devang Saklani</div>
	<div class="footer-links">
		<a href="https://github.com/Devang47/portfolio-2022" target="_blank" rel="noopener noreferrer">
			<Github class="block fill-bright_secondary w-[18px] h-[18px]" />
		</a>
		<a href="https://github.com/Devang47/portfolio-2022" target="_blank" rel="noopener noreferrer">
			<Star class="block fill-bright_secondary w-[28px] h-[28px]" />
		</a>
	</div>
</footer>
