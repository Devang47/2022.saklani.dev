<script lang="ts">
	import '$styles/tailwind.css';
	import '$styles/custom.css';
	import '$styles/global.scss';

	import Footer from '$sections/Footer/index.svelte';
</script>

<svelte:head>
	<title>Devang Saklani | Web Developer</title>
</svelte:head>

<slot />

<Footer />
