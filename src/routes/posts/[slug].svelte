<script context="module">
	import supabase from '$lib/db';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const { data: posts, error } = await supabase
			.from('posts')
			.select('*')
			.eq('slug', page.params.slug);

		if (!error) {
			const post = posts[0];

			return {
				props: {
					post
				}
			};
		}
	}
</script>

<script>
	import Markdown from '$lib/Markdown.svelte';

	export let post;
</script>

{#if post}
	<h1>{post.title}</h1>
	<Markdown src={post.content} />
{/if}
