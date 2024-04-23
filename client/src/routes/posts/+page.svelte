<script>
	export let data;
</script>

<div>
	{#each data.posts as post}
		<div class="m-2 flex-col justify-start rounded-md border-black p-3">
			<div class="flex max-w-28 flex-row justify-evenly">
				<img class="max-w-6 rounded-full" src={post.image} />
				<p>{post.name}</p>
			</div>
			<p>{post.content}</p>
		</div>
	{/each}
</div>
