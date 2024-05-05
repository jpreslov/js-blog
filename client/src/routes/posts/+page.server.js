export async function load ({ fetch }) {
  try {
    const response = await fetch(`/api/post`);
    const posts = await response.json();

    if (response.ok) {
      return {
        posts: posts
      };
    } else {
      throw new Error('Failed to fetch posts');
    }
  } catch (err) {
    console.error('Failed to fetch posts', err);
    throw err;
  }
};
