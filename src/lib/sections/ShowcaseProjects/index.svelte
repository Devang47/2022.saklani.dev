<script lang="ts">
	import Project from './components/Project.svelte';

	let projectShowcaseImages = [
		'/images/project-showcase/tiny.saklani.dev.webp',
		'/images/project-showcase/placeholderr.webp',
		'/images/project-showcase/token-generator.webp'
	];

	let selectedProject: number = 0;
	const showProject = (id: number) => {
		selectedProject = id;
		return null;
	};
</script>

<section class="showcase-projects">
	<div class="content">
		<div class="w-[90%] md:w-full mx-auto">
			<h2>Some things I’ve worked on</h2>

			<div class="projects-list ">
				<Project
					title="Custom URL Shortener"
					desc="It is a custom URL Shortener built using Svelte, Tailwind, Node + Express, MongoDB and deployed to Vercel & Heroku."
					link="https://tiny.saklani.dev/"
					select={() => showProject(0)}
				/>
				<Project
					title="Placeholderr | JSON Rest-API"
					desc="It is a JSON placeholder rest-api built using Node, Express and React and deployed to Heroku. It provides many useful endpoints like comments, covid data, images from NASA and images from Unsplash etc."
					link="https://project-placeholderr.herokuapp.com/"
					select={() => showProject(1)}
				/>
				<Project
					title="ERC-20 Token Generator"
					desc="An tool which helps you to quickly create a Smart contract based on ERC-20 standard. It uses openzeppelin-contracts to create a contract and downloadjs to download the generated file."
					link="https://token-generator.vercel.app/"
					select={() => showProject(2)}
				/>
			</div>
		</div>

		<div class="right-showcase-image">
			<img loading="lazy" src={projectShowcaseImages[selectedProject]} alt="" />
		</div>
	</div>
</section>

<style lang="postcss">
	.showcase-projects {
		@apply flex items-center justify-start;
		@apply relative overflow-hidden md:pt-8 md:pb-8;
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
		@apply rounded-lg overflow-hidden shadow-xl;
	}

	img {
		@apply h-full w-full object-cover;
	}

	.projects-list {
		@apply flex items-start justify-start gap-16 flex-col;
		@apply mt-[4.5rem];
	}
</style>
