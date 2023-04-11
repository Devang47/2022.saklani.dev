<script lang="ts">
	export let variant: 'filled' | 'outlined' = 'filled';
	export let padding: 'rectangle' | 'square' = 'rectangle';
	export let bindTarget = {};
</script>

<button bind:this={bindTarget} class={`${variant} button ${$$props.class || ''} ${padding}`}>
	<slot />
</button>
