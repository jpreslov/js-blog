<script>
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';

	if ($page.data.session != null) {
		console.log($page.data.session);
	}
</script>

<nav>
	<img
		src={$page.data.session?.user?.image ?? 'https://source.boringavatars.com/marble/120/'}
		alt="User avatar"
	/>
	<button on:click={() => signIn('github')}> Sign In </button>
	<button on:click={() => signOut()}> Sign Out </button>
</nav>
