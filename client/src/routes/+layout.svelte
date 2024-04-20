<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	export let data;
	$: session = data.session;
</script>

<nav>
	<div id="container">
		<div id="login-text">
			{#if session}
				<p>{session.user.name}</p>
				<button on:click={() => signOut()}> Sign Out </button>
			{:else}
				<p>You are not logged in</p>
				<button on:click={() => signIn('github')}> Sign In </button>
			{/if}
		</div>
	</div>
</nav>

<main>
	<slot />
</main>

<style>
	#container {
		display: flex;
		justify-content: center;
		flex-direction: row;
		border: 2px solid grey;
		border-radius: 10px;
	}

	button {
		font-size: 14px;
		padding: 5px;
		margin: 7px;
	}
</style>
