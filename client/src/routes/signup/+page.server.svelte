<script>
	import { postUser } from '../../utils/users';
	import { getHashedPassword } from '$lib/server/utils';

	let username = '';
	let password = '';
	let confirmPassword = '';

	const handleSubmit = async () => {
		if (password === confirmPassword) {
			const hashedPass = await getHashedPassword(password);
			postUser(username, hashedPass);
		}
	};
</script>

<main>
	<h1>Signup</h1>

	<div id="login-card">
		<input type="text" placeholder="Username" bind:value={username} required />
		<input type="password" placeholder="Password" bind:value={password} required />
		<input type="password" placeholder="Confirm password" bind:value={confirmPassword} required />
		<button type="submit" on:click={handleSubmit}>Sign up</button>
	</div>
</main>

<style></style>
