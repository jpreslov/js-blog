import { getPosts } from "$lib/server/models/post";
import { deletePost } from "$lib/server/models/post";

export const load = async () => {
  let posts = await getPosts();
  console.log(posts);
  return { posts };
};

export const actions = {
  deletePost
}
