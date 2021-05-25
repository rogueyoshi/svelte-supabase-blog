<script context="module">
	import supabase from '$lib/db';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const { slug } = page.params;

		const { data: posts, error } = await supabase.from('posts').select('*').eq('slug', slug);

		if (!error) {
			const post = posts[0];

			if (post) {
				return {
					props: {
						post
					}
				};
			}
		}

		return {
			status: 404,
			error: new Error(`posts/${slug} not found.`)
		};
	}
</script>

<script>
	import Markdown from '$lib/Markdown.svelte';

	export let post;
</script>

<main>
	<h1>{post.title}</h1>
	<h2>{post.description}</h2>
	<article>
		<Markdown src={post.content} />
	</article>
</main>
