<script lang="ts">
	import Project from './components/Project.svelte';
	import { animate, spring, stagger } from 'motion';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';
	import { onMount } from 'svelte';
	import { addObserver } from '$stores/cursor';

	let projectsData = [
		{
			title: 'Custom URL Shortener',
			desc: 'It is a custom URL Shortener built using Svelte, Tailwind, Node + Express, MongoDB and deployed to Vercel & Heroku.',
			link: 'https://tiny.saklani.dev/',
			github: 'https://github.com/Devang47/tiny.saklani.dev',
			image:
				'https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1200/v1662860994/tiny.saklani.dev_z4okvq.webp'
		},
		{
			title: 'Placeholderr | JSON Rest-API',
			desc: 'It is a JSON placeholder rest-api built using Node, Express and React and deployed to Heroku. It provides many useful endpoints like comments, covid data, images from NASA and images from Unsplash etc.',
			link: 'https://placeholderr.onrender.com/',
			github: 'https://github.com/Devang47/Project-Placeholderr',
			image:
				'https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1200/v1662860995/placeholderr_rfuozt.webp'
		},
		{
			title: 'ERC-20 Token Generator',
			desc: 'An tool which helps you to quickly create a Smart contract based on ERC-20 standard. It uses openzeppelin-contracts to create a contract and downloadjs to download the generated file.',
			link: 'https://token-generator.vercel.app/',
			github: 'https://github.com/Devang47/Token-Generator',
			image:
				'https://res.cloudinary.com/dyn3sdtfm/image/upload/c_scale,w_1200/v1662860996/token-generator_tjm1ub.webp'
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

	let sectionRef;
	onMount(() => {
		addObserver(sectionRef);
	});
</script>

<section class="showcase-projects duration-[0.35s] translate-y-12 ease-in" bind:this={sectionRef}>
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
					<Link class=" h-[1.3rem] w-[1.3rem] text-white hover:text-teal-tint" />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={projectsData[selectedProject].github}
					bind:this={githubLinkIcon}
				>
					<Github class="h-[1.3rem] w-[1.3rem] fill-white hover:fill-teal-tint" />
				</a>
			</div>
		</div>
	</div>
</section>
