import preprocess from 'svelte-preprocess';
//import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterStatic from '@sveltejs/adapter-static';

//const dev = process.env.NODE_ENV === 'development';

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
				include: ['@supabase/supabase-js']
			}
			/*ssr: {
				noExternal: dev ? [] : ['@supabase/supabase-js']
			}*/
		},
		adapter: adapterStatic()
	}
};

export default config;
