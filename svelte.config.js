import preprocess from 'svelte-preprocess';
import adapterNetlify from '@sveltejs/adapter-netlify';

const dev = process.env.NODE_ENV === 'development';

window.global = window;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['markdown-it']
			},
			ssr: {
				noExternal: dev ? [] : ['@supabase/supabase-js']
			}
		},
		adapter: adapterNetlify()
	}
};

export default config;
