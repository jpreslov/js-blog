import { getPosts } from '$lib/server/models/post';

export async function GET() {
  try {
    const posts = await getPosts();
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response('Error fetching posts', { status: 500 });
  }
}
