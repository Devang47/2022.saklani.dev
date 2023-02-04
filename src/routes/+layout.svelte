<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import { onMount } from 'svelte';

	// Add the Partytown script to the DOM head
	let scriptEl: any;
	onMount(() => {
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LD4WWE9J3R">
	</script>

	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('event', 'page_visit');

		gtag('config', 'G-LD4WWE9J3R', {
			page_path: window.location.pathname
		});
	</script>

	<script>
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://saklani.dev/proxytown';

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`);

					const gtmId = new URL(url).searchParams.get('id');
					gtmId && proxyUrl.searchParams.append('id', gtmId);

					return proxyUrl;
				} else if (url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`);

					return proxyUrl;
				}

				return url;
			}
		};
	</script>

	<!-- `partytownSnippet` is inserted here -->
	<script bind:this={scriptEl}></script>
</svelte:head>

<slot />

<SvelteSeo
	title="Devang Saklani | Software Engineer"
	description="Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps."
	openGraph={{
		type: 'website',
		title: 'Devang Saklani | Software Engineer',
		description:
			'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
		url: 'https://saklani.dev',
		images: [{ url: 'https://res.cloudinary.com/dyn3sdtfm/image/upload/v1662864033/og_iflgia.jpg' }]
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@devangsaklani',
		title: 'Devang Saklani | Software Engineer',
		description:
			'Devang Saklani is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
		image: 'https://res.cloudinary.com/dyn3sdtfm/image/upload/v1662864033/og_iflgia.jpg',
		imageAlt: 'Devang Saklani | Software Engineer'
	}}
/>
