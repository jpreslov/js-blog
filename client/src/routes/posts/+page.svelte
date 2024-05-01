<script>
	export let data;
  import Card from '$lib/components/Card.svelte';
</script>

<div>
	{#each data.posts as post}
		<Card post={post} session={data.session} />
	{/each}
</div>
