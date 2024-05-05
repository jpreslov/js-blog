<script>
	let content = '';

	export let data;
</script>

<div class="flex w-full flex-col justify-center">
	{#if data.session != null}
		<form
			class="m-5 flex flex-row justify-center rounded-md border-2 p-4 outline-black"
			method="POST"
		>
			<div class="flex flex-col justify-center text-center">
				<h3 class="mb-4 text-xl">Create a post</h3>
				<input
					class="border-black-500 mb-2 h-10 rounded-md border-2 px-2 py-1"
					type="text"
					name="content"
					placeholder="Say somethiing"
					bind:value={content}
				/>
				<button
					class="mx-4 h-10 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					type="submit">Post</button
				>
			</div>
		</form>
	{:else}
		<p>You are not logged in</p>
	{/if}
</div>

<style>
</style>
