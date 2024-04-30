<script>
	export let data;
  export let deletePostt;
  import Card from '$lib/components/Card.svelte';
</script>

<div>
	{#each data.posts as post}
		<Card post={post} session={data.session} deletePostt={deletePostt} />
	{/each}
</div>
