import { getPosts } from "$lib/server/models/post";

export const load = async () => {
  let posts = await getPosts();
  return { posts };
};
