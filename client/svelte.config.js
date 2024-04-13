import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
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
	}
};

export default config;
