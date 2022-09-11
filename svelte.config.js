import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true,
		typescript: true,
	}),

	kit: {
		adapter: adapter({
			fallback: '/404.html'
		}),
	}
};

export default config;
