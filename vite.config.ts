import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import type { UserConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		partytownVite({
			// `dest` specifies where files are copied to in production
			dest: join(process.cwd(), '.vercel/output/static', '~partytown')
		})
	],
	resolve: {
		alias: {
			$stores: path.resolve('./src/stores'),
			$styles: path.resolve('./src/styles'),
			$utils: path.resolve('./src/utils'),
			$components: path.resolve('./src/lib/components'),
			$pages: path.resolve('./src/lib/pages'),
			$sections: path.resolve('./src/lib/sections'),
			$icons: path.resolve('./src/lib/icons')
		}
	}
};

export default config;
