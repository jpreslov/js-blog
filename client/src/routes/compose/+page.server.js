import { getUserByUsername } from '$lib/server/models/user';
import { createPost } from '$lib/server/models/post';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const content = data.get('content');
		const session = await locals.auth();
		const user = await getUserByUsername(session.user.name);

		createPost(user.id, content);
	}
};
