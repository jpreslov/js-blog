import { createPost } from '$lib/server/models/post';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();

    console.log(data);
		const content = data.get('content');
		const session = await locals.auth();
		const user = await fetch(`/api/user/username/${session.user.name}`);

		if (content) createPost(user.id, content);
	}
};
