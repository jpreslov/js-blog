<script>
	import './app.css';
	import { signOut } from '@auth/sveltekit/client';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

	export let data;
	$: session = data.session;

  onMount(() => {
    goto('/posts');
  });
</script>

<nav class="bg-slate-400">
	<div class="display-row flex justify-end">
		<div class="flex-column h-100 my-2 flex">
			{#if session}
				<button
					class="mx-4 h-10 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					><a href="/compose"> New post </a></button
				>
				<img class="mx-4 h-14 rounded-full" src={session.user.image} alt="profile pic" />
				<button
					class="mx-4 h-10 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					on:click={() => signOut()}
				>
					Sign Out
				</button>
			{:else}
				<button
					class="mx-4 h-10 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					on:click={() => goto('/signin')}
				>
					Sign in
				</button>

			{/if}
		</div>
	</div>
</nav>

<main>
	<slot></slot>
</main>

<style>
</style>
