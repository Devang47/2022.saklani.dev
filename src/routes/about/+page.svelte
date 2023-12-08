<script>
	import About from '$pages/About/index.svelte';
	import Footer from '$sections/Footer/index.svelte';
	import ThreeBg from '$lib/sections/ThreeBg.svelte';

	import '$styles/tailwind.css';
	import '$styles/global.scss';
</script>

<main>
	<ThreeBg />

	<About />
</main>
<Footer />
