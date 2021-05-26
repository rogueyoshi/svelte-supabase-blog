<script context="module">
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt();
</script>

<script>
	export let src;
	$: html = md.render(src);
</script>

<div class="markdown-body">
	{@html html}
</div>

<style>
	@import 'github-markdown-css/github-markdown.css';
</style>
