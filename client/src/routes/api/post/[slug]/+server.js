import { deletePost } from '$lib/server/models/post';

export async function POST({ request }) {
  const data = await request.json();
  const { postid } = data;

  try {
    await deletePost(postid);
    return new Response('Post deleted', { status: 200 });
  } catch (error) {
    return new Response('Error deleting post', { status: 500 });
  }
}
