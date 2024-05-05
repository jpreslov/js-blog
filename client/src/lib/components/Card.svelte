<script>
	import { goto } from '$app/navigation';
	import moment from 'moment';
	export let session;
	export let post;

	const handleDelete = async (postid) => {
		try {
			const response = await fetch(`/api/post/${postid}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ postid })
			});

			if (response.ok) {
				goto('/posts');
			}
		} catch (err) {
			console.log(err);
		}
	};

	let currentDate = moment(post.createdat).fromNow();
</script>

<div class="m-4 flex-col justify-start rounded-md p-3 outline">
	<div class="flex w-full flex-row justify-between">
		<div class="flex max-w-40 flex-row justify-evenly align-middle">
			<img class="mr-3 h-7 rounded-full" src={post.image} alt="User avatar" />
			<p>{post.name}</p>
		</div>
		<div>
			{#if session?.user.name == post.name}
				<button on:click={() => handleDelete(post.postid)}>Delete</button>
			{/if}
		</div>
	</div>
	<p class="text-lg my-4">{post.content}</p>
	<p class="text-xs">{currentDate}</p>
</div>
