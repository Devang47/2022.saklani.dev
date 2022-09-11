<script lang="ts">
	import { addObserver } from '$stores/cursor';
	import { onMount } from 'svelte';

	let sectionRef;
	onMount(() => {
		addObserver(sectionRef);
	});
</script>

<section class="project-section" bind:this={sectionRef}>
	<div class=" z-10 relative">
		<slot />
	</div>
</section>
