<script>
	let content = '';

	export let data;
</script>

<div class='flex flex-col w-full justify-center'>
	{#if data.session != null}
		<form class='flex-column bg-red-300 justify-center m-5' method="POST">
			<h3 class="font-bold">Create post</h3>
			<input class='h-10 border-black-300 border-2 rounded-md px-2 py-1' type="text" name="content" placeholder="Say somethiing" bind:value={content} />
      <button class='mx-4 h-10 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700' type="submit">Post</button>
		</form>
	{:else}
		<p>You are not logged in</p>
	{/if}
</div>

<style>
</style>
