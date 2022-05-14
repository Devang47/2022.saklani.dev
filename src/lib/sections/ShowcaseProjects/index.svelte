<script lang="ts">
	import Project from './components/Project.svelte';
	import { animate, spring, stagger } from 'motion';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';

	let projectsData = [
		{
			title: 'Custom URL Shortener',
			desc: 'It is a custom URL Shortener built using Svelte, Tailwind, Node + Express, MongoDB and deployed to Vercel & Heroku.',
			link: 'https://tiny.saklani.dev/',
			github: 'https://github.com/Devang47/tiny.saklani.dev',
			image: '/images/project-showcase/tiny.saklani.dev.webp'
		},
		{
			title: 'Placeholderr | JSON Rest-API',
			desc: 'It is a JSON placeholder rest-api built using Node, Express and React and deployed to Heroku. It provides many useful endpoints like comments, covid data, images from NASA and images from Unsplash etc.',
			link: 'https://project-placeholderr.herokuapp.com/',
			github: 'https://github.com/Devang47/Project-Placeholderr',
			image: '/images/project-showcase/placeholderr.webp'
		},
		{
			title: 'ERC-20 Token Generator',
			desc: 'An tool which helps you to quickly create a Smart contract based on ERC-20 standard. It uses openzeppelin-contracts to create a contract and downloadjs to download the generated file.',
			link: 'https://token-generator.vercel.app/',
			github: 'https://github.com/Devang47/Token-Generator',
			image: '/images/project-showcase/token-generator.webp'
		}
	];

	let externalLinkIcon;
	let githubLinkIcon;

	let selectedProject: number = 0;
	const showProject = (id: number) => {
		selectedProject = id;
		return null;
	};

	const removeIcons = () => {
		animate(
			[externalLinkIcon, githubLinkIcon],
			{
				opacity: 0,
				y: 0
			},
			{
				duration: 0.05,
				delay: stagger(0.04),
				easing: spring()
			}
		);
	};

	const showIcons = () => {
		animate(
			[externalLinkIcon, githubLinkIcon],
			{
				opacity: 1,
				y: -80
			},
			{
				duration: 0.05,
				delay: stagger(0.04),
				easing: spring()
			}
		);
	};
</script>

<section class="showcase-projects">
	<div class="content">
		<div class="w-[90%] md:w-full mx-auto">
			<h2>Some things I’ve worked on</h2>

			<div class="projects-list ">
				{#each projectsData as item, id}
					<Project {...item} select={() => showProject(id)} />
				{/each}
			</div>
		</div>

		<div class="right-showcase-image" on:mouseleave={removeIcons} on:mouseenter={showIcons}>
			<img loading="lazy" src={projectsData[selectedProject].image} alt="" />
			<div class="absolute bottom-[-15%] right-5 flex items-center justify-center gap-3.5">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={projectsData[selectedProject].link}
					bind:this={externalLinkIcon}
				>
					<Link class=" h-[1.3rem] w-[1.3rem] text-white hover:text-teal_tint" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={projectsData[selectedProject].github}
					bind:this={githubLinkIcon}
				>
					<Github class="h-[1.3rem] w-[1.3rem] fill-white hover:fill-teal_tint" />
				</a>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.showcase-projects {
		@apply flex items-center justify-start;
		@apply relative overflow-hidden md:pt-8 md:pb-8;
		@apply xl:min-h-[70vh];
		@apply mt-32;
	}

	.content {
		@apply text-[22px] md:text-[24px] text-left md:leading-[38px];
		@apply text-bright_secondary;
		@apply my-4 mx-auto sm:w-full md:w-10/12 lg:w-[80%] lg:max-w-6xl;
		@apply md:grid;
		grid-template-columns: 550px 1fr;
		place-items: center;
	}

	h2 {
		@apply text-2xl font-bold;
	}

	.right-showcase-image {
		@apply h-[370px] w-full place-self-center hidden lg:block;
		@apply rounded-lg overflow-hidden shadow-xl relative;
	}

	img {
		@apply h-full w-full object-cover transition-all duration-75;
	}

	.projects-list {
		@apply flex items-start justify-start gap-16 flex-col;
		@apply mt-[4.5rem];
	}
</style>
