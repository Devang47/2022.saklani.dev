<script lang="ts">
	import Footer from '$sections/Footer/index.svelte';
	import '$styles/tailwind.css';
	import '$styles/global.scss';
	
	export const prerender = true;
</script>

<svelte:head>
	<title>Devang Saklani | Web Developer</title>
</svelte:head>

<slot />

<Footer />
