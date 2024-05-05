import { getPosts } from '$lib/server/models/post';
import { createPost } from '$lib/server/models/post';

export async function GET() {
  try {
    const posts = await getPosts();
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response('Error fetching posts', { status: 500 });
  }
}

export async function POST({ request }) {
  if (!request.body) {
    console.error("your shit's all fucked up");
    return new Response(JSON.stringify("No request body sent", { status: 500 }));
  }

  let data = JSON.parse(request.body);

  // having problems getting the request body here
  console.log('/api/post', request.body);

  const { userid, content } = data;
  try {
    const post = await createPost(userid, content);
    return new Response(JSON.stringify(post));
  } catch (error) {
    return new Response('Error fetching posts', { status: 500 });
  }
}

