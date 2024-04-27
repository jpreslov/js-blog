<script>
	export let session;
	export let post;
</script>

<div class="m-2 flex-col justify-start rounded-md p-3 outline">
	<div class="flex w-full flex-row justify-between bg-purple-500">
		<div class="flex max-w-28 flex-row justify-evenly align-middle">
			<img class="mx-3 h-7 rounded-full" src={post.image} alt="User avatar" />
			<p>{post.name}</p>
		</div>
		<div>
			{#if session?.user.name == post.name}
				<button>Delete</button>
			{/if}
		</div>
	</div>
	<p class="text-lg">{post.content}</p>
</div>
