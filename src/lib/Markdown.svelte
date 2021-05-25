<script>
	import MarkdownIt from 'markdown-it';

	export let src = '';

	// Initialize `markdown-it`
	const md = new MarkdownIt();

	// Render to an html string
	$: rendered = md.render(src);
</script>

<!-- Render with the `@html` directive -->
{@html rendered}
