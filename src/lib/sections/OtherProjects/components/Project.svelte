<script lang="ts">
	import Arrow from '$lib/icons/Arrow.svelte';
	let isMouseOver = false;

	export let title: string;
	export let desc: string;
	export let link: string;
	export let select: () => null;
</script>

<a
	href={link}
	target="_blank"
	rel="noopener noreferrer"
	class="w-full"
	on:mouseover={select}
	on:focus={select}
>
	<div
		class="project-item group"
		on:mouseleave={() => (isMouseOver = false)}
		on:mouseenter={() => (isMouseOver = true)}
	>
		<div class="flex items-start justify-start gap-2">
			<h3>{title}</h3>
			{#if isMouseOver}
				<Arrow class="" />
			{/if}
		</div>
		<p>{desc}</p>
	</div>
</a>

<style lang="postcss">
	.project-item h3 {
		@apply text-base font-bold mb-3;
	}

	.project-item p {
		@apply text-base text-[#B2B2B2] w-11/12 max-w-md leading-7;
	}
</style>
