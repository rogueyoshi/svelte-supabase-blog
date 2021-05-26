<script context="module">
	import { load } from './_slug';
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
		<details>
			<summary>Preview</summary>
			<div>{post.title}</div>
			<div>{post.description}</div>
			<article class="markdown-body">
				<Markdown src={post.content} />
			</article>
		</details>
	</div>
	<button>Submit</button>
</main>
