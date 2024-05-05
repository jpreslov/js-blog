import { getUserById } from "$lib/server/models/user";

export async function GET({ params }) {
  const { id } = params;
  try {
    const user = await getUserById(id);
    return new Response(JSON.stringify(user));
  } catch (error) {
    return new Response('Error fetching user', { status: 500 });
  }
}


