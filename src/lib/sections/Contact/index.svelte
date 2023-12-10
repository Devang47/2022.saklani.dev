<script lang="ts">
	import Button from '$components/Button/index.svelte';
	import CalLogo from '$lib/icons/CalLogo.svelte';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
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

<section
	bind:this={sectionRef}
	class="contact-wrapper opacity-0 duration-[0.35s] translate-y-12 ease-in"
	id="contact"
>
	<div class="content">
		<div class="get-in-touch">
			<h2>Get in touch</h2>
			<h3>
				I’m currently looking for new opportunities as a Software Engineer. If you have anything for
				me or just want to say hi, feel free to message me, my inbox is always open. I’ll try my
				best to get back to you!
			</h3>
		</div>

		<div class="contact-links">
			<a
				href="https://read.cv/devangsaklani"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full"
				aria-label="Visit the resume of devang saklani"
			>
				<Button label="View resume" variant="filled"
					>My Resume

					<ExternalLink class="ml-2" />
				</Button>
			</a>
			<div class="flex items-center justify-around gap-4 mt-4 w-full">
				<a
					href="https://cal.com/devang"
					target="_blank"
					rel="noopener noreferrer"
					class="group"
					aria-label="Schedule a call with devang saklani"
					><Button label="Schedule a call" variant="outlined" padding="square">
						<CalLogo
							class="block fill-bright-secondary duration-150 group-hover:fill-white w-[30px]"
						/>
					</Button></a
				>
				<a
					href="mailto:devangsaklani@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					class="group"
					aria-label="Send a email to devang saklani"
					><Button label="Send email" variant="outlined" padding="square">
						<Gmail
							class="block fill-bright-secondary duration-150 group-hover:fill-[#EA4335] w-[20px] h-[20px]"
						/>
					</Button></a
				>
				<!-- <a href="https://www.linkedin.com/in/devangsaklani/" class="group"
					><Button variant="outlined" padding="square">
						<Linkedin
							class="block fill-bright-secondary duration-150 group-hover:fill-[#0A66C2] w-[20px] h-[20px]"
						/>
					</Button></a
				> -->
				<!-- <a
					href="https://twitter.com/DevangSaklani"
					target="_blank"
					rel="noopener noreferrer"
					class="group"
					><Button variant="outlined" padding="square">
						<Twitter
							class="block fill-bright-secondary duration-150 group-hover:fill-[#1DA1F2] w-[20px] h-[20px]"
						/>
					</Button></a
				> -->
				<!-- <a
					href="https://github.com/Devang47"
					target="_blank"
					rel="noopener noreferrer"
					class="group"
					><Button variant="outlined" padding="square">
						<Github
							class="block fill-bright-secondary duration-150 group-hover:fill-[#989898] w-[20px] h-[20px]"
						/>
					</Button></a
				> -->
			</div>
		</div>
	</div>
</section>
