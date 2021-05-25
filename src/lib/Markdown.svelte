<script context="module">
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt();
</script>

<script>
	export let src;
	$: html = md.render(src);
</script>

{@html html}
