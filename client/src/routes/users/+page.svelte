<script>
	import { onMount } from 'svelte';
	import { getUsers } from '../../utils/users.js';

	let users = [];

	onMount(async () => {
		users = await getUsers();
	});
</script>

<main>
	<div>
		<h1>Users</h1>
		<ul>
			{#each users as user}
				<li>{user.username}</li>
			{/each}
		</ul>
	</div>
</main>
