import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	package: {
		exports: (entry) => entry.node,
		files: (filepath) => {
			if (filepath.includes('node_modules/@mapbox/node-pre-gyp')) {
				return false;
			}
			return true;
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;
