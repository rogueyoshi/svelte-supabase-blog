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
	<div>
		<label>
			<div>Title</div>
			<input bind:value={post.title} />
		</label>
	</div>
	<div>
		<label>
			<div>Description</div>
			<input bind:value={post.description} />
		</label>
	</div>
	<div>
		<label>
			<div>Content</div>
			<textarea bind:value={post.content} />
		</label>
		<details>
			<summary>Preview</summary>
			<h1>{post.title}</h1>
			<h2>{post.description}</h2>
			<article>
				<Markdown src={post.content} />
			</article>
		</details>
	</div>
	<button>Submit</button>
</main>
