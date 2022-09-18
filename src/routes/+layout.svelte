<script lang="ts">
	import Footer from '$sections/Footer/index.svelte';
	import SvelteSeo from 'svelte-seo';
	import '$styles/tailwind.css';
	import '$styles/global.scss';

	export const prerender = true;
</script>

<slot />

<Footer />

<SvelteSeo
	title="Devang Saklani | Software Engineer"
	description="Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and native apps."
	openGraph={{
		type: 'website',
		title: 'Devang Saklani | Software Engineer',
		description:
			'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and native apps.',
		url: 'https://saklani.dev',
		images: [{ url: 'https://res.cloudinary.com/dyn3sdtfm/image/upload/v1662864033/og_iflgia.jpg' }]
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@devangsaklani',
		title: 'Devang Saklani | Software Engineer',
		description:
			'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and native apps.',
		image: 'https://res.cloudinary.com/dyn3sdtfm/image/upload/v1662864033/og_iflgia.jpg',
		imageAlt: 'Devang Saklani | Software Engineer'
	}}
/>
