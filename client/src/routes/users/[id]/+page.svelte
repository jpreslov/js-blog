<script>
	export let data;
	console.log(data);
</script>

<main>
	<div>
		{#if data.session}
			<ul>
					<h1>User</h1>
					<li>{data.user.name}</li>
			</ul>
		{:else}
			<p>You are not logged in</p>
		{/if}
	</div>
</main>
