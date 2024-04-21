import { getUsers } from "$lib/server/models/user";

export const load = async () => {
  let users = await getUsers();
  return { users };
};
