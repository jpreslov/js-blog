import { getUsers } from "$lib/server/models/user";

export async function GET() {
  try {
    const users = await getUsers();
    console.log('/api/user', users)
    return new Response(users);
  } catch (error) {
    return new Response('Error fetching user', { status: 500 });
  }
}
