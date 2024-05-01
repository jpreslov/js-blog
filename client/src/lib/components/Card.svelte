<script>
	export let session;
	export let post;

  const handleDelete = (postid) => {
    console.log(postid);
  }
</script>

<div class="m-4 flex-col justify-start rounded-md p-3 outline">
	<div class="flex w-full flex-row justify-between">
		<div class="flex max-w-40 flex-row justify-evenly align-middle">
			<img class="mr-3 h-7 rounded-full" src={post.image} alt="User avatar" />
			<p>{post.name}</p>
		</div>
		<div>
			{#if session?.user.name == post.name}
				<button
        on:click={() => handleDelete(post.postid)}>Delete</button>
			{/if}
		</div>
	</div>
	<p class="text-lg my-4">{post.content}</p>
  <p class="text-xs">{post.createdat}</p>
</div>
