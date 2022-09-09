<script lang="ts">
	import Button from '$components/Button/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Gmail from '$lib/icons/Gmail.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import { addObserver } from '$stores/cursor';
	import { onMount } from 'svelte';

	let sectionRef;
	onMount(() => {
		addObserver(sectionRef);
	});
</script>

<section bind:this={sectionRef} class="contact-wrapper opacity-0" id="contact">
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
			<a
				href="https://saklani.dev/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full"
			>
				<Button variant="filled">My Resume</Button>
			</a>
			<div class="flex items-center justify-around gap-4 mt-4 w-full">
				<a href="mailto:devangsaklani@gmail.com"
					><Button variant="outlined" padding="square">
						<Gmail class="block fill-bright_secondary w-[20px] h-[20px]" />
					</Button></a
				>
				<a href="https://www.linkedin.com/in/devangsaklani/"
					><Button variant="outlined" padding="square">
						<Linkedin class="block fill-bright_secondary w-[20px] h-[20px]" />
					</Button></a
				>
				<a href="https://twitter.com/DevangSaklani"
					><Button variant="outlined" padding="square">
						<Twitter class="block fill-bright_secondary w-[20px] h-[20px]" />
					</Button></a
				>
				<a href="https://github.com/Devang47"
					><Button variant="outlined" padding="square">
						<Github class="block fill-bright_secondary w-[20px] h-[20px]" />
					</Button></a
				>
			</div>
		</div>
	</div>
</section>
