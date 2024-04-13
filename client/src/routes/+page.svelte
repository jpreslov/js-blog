<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<nav>
	<button on:click={() => signIn('github')}> Sign In </button>
	<button on:click={() => signOut()}> Sign Out </button>
</nav>
