<script>
	export let data;
</script>

<main>
	<div>
		{#if data.session}
			<ul>
				{#each data.users as user}
					<h1>Users</h1>
					<li>{user.name}</li>
				{/each}
			</ul>
		{:else}
			<p>You are not logged in</p>
		{/if}
	</div>
</main>
