<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	export let data;
	$: session = data.session;
</script>

<nav>
	<div id="container">
		<div id="login-text">
			{#if session}
				<p>You are logged in as {session.user.email}</p>
				<button on:click={() => signOut()}> Sign Out </button>
			{:else}
				<p>You are not logged in</p>
				<button on:click={() => signIn('github')}> Sign In </button>
			{/if}
		</div>
	</div>
</nav>

<main></main>

<style>
	#container {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}

	#login-card {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	button {
		font-size: 14px;
		padding: 5px;
		margin: 7px;
	}
</style>
