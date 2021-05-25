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
	import { onMount } from 'svelte';

	export let post;

	let title;
	let description;
	let content;

	onMount(() => {
		({ title, description, content } = post);
	});
</script>

<main>
	<div>
		<label>
			<div>Title</div>
			<input bind:value={title} />
		</label>
	</div>
	<div>
		<label>
			<div>Description</div>
			<input bind:value={description} />
		</label>
	</div>
	<div>
		<label>
			<div>Content</div>
			<textarea bind:value={content} />
		</label>
		<details>
			<summary>Preview</summary>
			<Markdown src={content} />
		</details>
	</div>
	<button>Submit</button>
</main>

<style>
</style>
