<script lang="ts">
	import Main from '$pages/Main/index.svelte';
	import LoadingScreen from '$sections/LoadingScreen/index.svelte';
	import Footer from '$sections/Footer/index.svelte';
	import ThreeBg from '$lib/sections/ThreeBg.svelte';

	import '$styles/tailwind.css';
	import '$styles/global.scss';
</script>

<LoadingScreen />

<main>
	<ThreeBg />

	<Main />
</main>

<Footer />
