import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { query } from './lib/db';

console.log('hit hooks.server.js');

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
});
