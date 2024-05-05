import { getUserById } from "$lib/server/models/user";

export const load = async ({ params }) => {
  let user = await fetch(`/api/user/${params.id}`) 
  return { user };
};
