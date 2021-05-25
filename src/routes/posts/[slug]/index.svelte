<script context="module">
	import { load } from './';
	export { load };
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
