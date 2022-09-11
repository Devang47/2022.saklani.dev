import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
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