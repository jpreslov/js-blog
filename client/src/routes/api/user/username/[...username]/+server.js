import { getUserByUsername } from "$lib/server/models/user";

export async function GET({ params }) {
  const { username } = params;
  const decodedUsername = decodeURIComponent(username);

  try {
    const user = await getUserByUsername(decodedUsername);
    return new Response(JSON.stringify(user));
  } catch (error) {
    return new Response('Error fetching user', { status: 500 });
  }
}
