import { getUserById } from "$lib/server/models/user";

export const load = async ({ params }) => {
  let user = await getUserById(params.id);
  return { user };
};
