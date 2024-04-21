<script>
	let content = '';

	export let data;
</script>

<div>
	{#if data.session != null}
		<form method="POST">
			<h6>Create post</h6>
			<input type="text" name="content" placeholder="Say somethiing" bind:value={content} />
			<button type="submit">Post</button>
		</form>
	{:else}
		<p>You are not logged in</p>
	{/if}
</div>

<style>
</style>
