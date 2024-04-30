<script>
	import '../app.css';
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="m-2 flex flex-row justify-center rounded-md p-3 outline-black">
	<div class="flex flex-col">
		<h1 class="text-xl">Signin</h1>
		<button
			on:click={() => signIn('google')}
			class="mx-4 h-10 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			>Sign in with Google</button
		>
		<span>
			<p>OR</p>
		</span>
		<button
			on:click={() => signIn('github')}
			class="mx-4 h-10 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			>Sign in with GitHub</button
		>
	</div>
</div>
