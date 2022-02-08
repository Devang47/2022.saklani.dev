<script lang="ts">
	import Button from '$components/Button/index.svelte';
	import Github from '$lib/icons/github.svelte';
	import Gmail from '$lib/icons/Gmail.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<section class="contact-wrapper">
	<div class="content">
		<div class="get-in-touch">
			<h2>Get in touch</h2>
			<h3>
				I’m currently looking for new opportunities as a Web developer. So, feel free to message me,
				my inbox is always open. Whether you just have a question or want to say hi, I’ll try my
				best to get back to you!
			</h3>
		</div>

		<div class="contact-links">
			<Button variant="filled">My Resume</Button>
			<div class="flex items-center justify-around gap-2 mt-5 w-full">
				<Button variant="outlined" padding="square">
					<Gmail class="block fill-bright_secondary w-[20px] h-[20px]" />
				</Button>
				<Button variant="outlined" padding="square">
					<Linkedin class="block fill-bright_secondary w-[20px] h-[20px]" />
				</Button>
				<Button variant="outlined" padding="square">
					<Twitter class="block fill-bright_secondary w-[20px] h-[20px]" />
				</Button>
				<Button variant="outlined" padding="square">
					<Github class="block fill-bright_secondary w-[20px] h-[20px]" />
				</Button>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.contact-wrapper {
		@apply min-h-screen lg:min-h-[82vh] flex items-center justify-start;
		@apply relative overflow-hidden md:pt-8 md:pb-8;
	}

	.content {
		@apply md:flex justify-between items-start gap-6;
		@apply my-4 mx-4 sm:mx-auto md:w-10/12 lg:w-[80%] lg:max-w-6xl;
		@apply relative z-10;
	}

	.get-in-touch {
		@apply text-[18px] md:text-[22px] text-left w-11/12 sm:w-10/12 pb-3;
		@apply sm:max-w-lg md:max-w-[37rem] md:w-full text-bright_secondary;
		@apply md:leading-[38px];
	}

	.contact-links {
		@apply flex items-start justify-start flex-col;
		@apply mt-4 w-full max-w-[250px] md:w-[300px] md:max-w-none;
	}

	h2 {
		@apply text-bright_primary font-bold text-[34px] mb-4;
	}
</style>
