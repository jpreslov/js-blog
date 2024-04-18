<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	export let data;
	$: session = data.session;
</script>

<nav>
	<div id="login-card">
		<button on:click={() => signIn('github')}> Sign In </button>
		<button on:click={() => signOut()}> Sign Out </button>
	</div>
	{#if session}
		<p>You are logged in as {session.user.email}</p>
	{:else}
		<p>You are not logged in</p>
	{/if}
</nav>

<main></main>

<style>
	#login-card {
		display: flex;
		justify-content: center;
	}

	button {
		font-size: 14px;
		padding: 5px;
		margin: 7px;
	}
</style>
