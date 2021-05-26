<script context="module">
	import { load } from './slug';
	export { load };
</script>

<script>
	import Markdown from '$lib/Markdown.svelte';

	export let post;
</script>

<main>
	<div>{post.title}</div>
	<div>{post.description}</div>
	<article class="markdown-body">
		<Markdown src={post.content} />
	</article>
</main>
