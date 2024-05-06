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

export async function POST(event) {
  const req = await event.request.json();
  const { userid, content } = req;

  if (!userid || !content) {
    return new Response(JSON.stringify("No request body sent", { status: 500 }));
  }

  try {
    const post = await createPost(userid, content);
    return new Response(JSON.stringify(post));
  } catch (error) {
    return new Response('Error fetching posts', { status: 500 });
  }
}

