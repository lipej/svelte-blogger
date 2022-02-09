import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src')
				}
			},
			optimizeDeps: {
				exclude: ['@apollo/client']
			},
			ssr: {
				noExternal: ['@apollo/client']
			}
		}
	}
};

export default config;
