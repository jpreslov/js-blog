export const actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const content = data.get('content');
    const session = await locals.auth();
    const username = encodeURIComponent(session.user.name);

    const response = await fetch(`http://localhost:5173/api/user/username/${username}`);
    const user = await response.json();

    console.log('compose/+page.server.js', user, content);

    if (content && user) {
      let post = await fetch(`http://localhost:5173/api/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          userid: user.id,
          content
        }
      });

      return { post: JSON.stringify(post) };
    }
    else {
      console.log('no content or user');
    }
  }
};
