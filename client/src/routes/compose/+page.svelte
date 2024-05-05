<script>
	import { createUploader } from '$lib/utils/uploadthing';
	import { Uploader } from '@uploadthing/svelte';
	let content = '';

	export let data;

	let showUploader;

	$: showUploader = false;

	const toggleUploader = (event) => {
		event.preventDefault();
		showUploader = !showUploader;
	};

	const uploader = createUploader('imageUploader', {
		onClientUploadComplete: async (res) => {
			console.log(`onClientUploadComplete`, res);
			alert('Upload completed');

			const createdat = new Date();

			try {
				// const attachment = await fetch(`/api/attachment`, {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({ userid, createdat })
				// });
			} catch (err) {
				console.error(err);
			}
		},
		onUploadError: (err) => {
			alert(`Error: ${err}`);
		}
	});
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
					required
					bind:value={content}
				/>
				{#if showUploader}
					<Uploader {uploader} />
				{/if}
				<div class="flex flex-row justify-between">
					<button
						class="mx-4 h-10 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
						on:click={(e) => toggleUploader(e)}>Attach file</button
					>
					<button
						class="mx-4 h-10 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
						type="submit">Post</button
					>
				</div>
			</div>
		</form>
	{:else}
		<p>You are not logged in</p>
	{/if}
</div>

<style>
</style>
