import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			typescript: true,
			postcss: true,
			preserve: ['partytown']
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
