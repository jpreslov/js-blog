import { ENV, SECRET_BASE_PROD, SECRET_BASE_DEV } from '$env/static/private';

let baseUrl = ENV == 'prod' ? SECRET_BASE_PROD : SECRET_BASE_DEV;

export const actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const content = data.get('content');
    const session = await locals.auth();
    const username = encodeURIComponent(session.user.name);

    const response = await fetch(`${baseUrl}/api/user/username/${username}`);
    const user = await response.json();

    if (content && user) {
      let post = await fetch(`${baseUrl}/api/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: user.id,
          content: content
        })
      });

      return { post: JSON.stringify(post) };
    }
    else {
      console.log('no content or user');
    }
  }
};
