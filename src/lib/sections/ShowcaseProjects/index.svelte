<script lang="ts">
	import Project from './components/Project.svelte';
</script>

<section class="showcase-projects">
	<div class="content">
		<div class="w-[90%] md:w-full mx-auto">
			<h2>Some things I’ve worked on</h2>

			<div class="projects-list ">
				<Project
					title="Placeholderr | JSON Rest-API"
					desc="It is a JSON placeholder rest-api built using Node, Express and React and deployed to Heroku. It provides many useful endpoints like comments, covid data, images from NASA and images from Unsplash etc."
					link="https://project-placeholderr.herokuapp.com/"
				/>
				<Project
					title="Placeholderr | JSON Rest-API"
					desc="It is a JSON placeholder rest-api built using Node, Express and React and deployed to Heroku. It provides many useful endpoints like comments, covid data, images from NASA and images from Unsplash etc."
					link="https://project-placeholderr.herokuapp.com/"
				/>
				<Project
					title="Placeholderr | JSON Rest-API"
					desc="It is a JSON placeholder rest-api built using Node, Express and React and deployed to Heroku. It provides many useful endpoints like comments, covid data, images from NASA and images from Unsplash etc."
					link="https://project-placeholderr.herokuapp.com/"
				/>
			</div>
		</div>

		<div class="right-showcase-image">
			<img
				src="https://images.unsplash.com/photo-1644325781920-a41ee5b914b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
				alt=""
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	.showcase-projects {
		@apply lg:min-h-[82vh] flex items-center justify-start;
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
