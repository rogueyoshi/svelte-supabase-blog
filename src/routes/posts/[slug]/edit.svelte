<script context="module">
	import { load } from './';
	export { load };
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
	</div>
	<div>
		<hr />
		<details>
			<summary>Preview</summary>
			<h1>{post.title}</h1>
			<h2>{post.description}</h2>
			<article>
				<Markdown src={post.content} />
			</article>
		</details>
		<hr />
	</div>
	<button>Submit</button>
</main>
