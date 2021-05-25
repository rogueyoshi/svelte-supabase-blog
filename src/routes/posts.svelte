<script>
	import Markdown from '$lib/Markdown.svelte';
	import supabase from '$lib/db';
</script>

{#await supabase.from('posts')}
	Loading...
{:then response}
	{#each response.data as post}
		<h1>{post.title}</h1>
		<Markdown src={post.content} />
	{/each}
{/await}
