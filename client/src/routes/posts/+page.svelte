<script>
	export let data;
	import Card from '$lib/components/Card.svelte';

	$: posts = data.posts;

	async function fetchPosts() {
		const response = await fetch('/api/post');
		data.posts = await response.json();
	}

	function handlePostDeleted() {
		fetchPosts();
	}
</script>

<div>
	{#each posts as post}
		<Card {post} session={data.session} on:postDeleted={handlePostDeleted} />
	{/each}
</div>
