import { pool } from '$lib/server/db';

export async function getPosts() {
	const { rows } = await pool.query(`
    SELECT * FROM post
    JOIN users ON post.userid = users.id
  `);
  console.log(rows);
	return rows;
}

export async function createPost(userId, content) {
	try {
		const post = await pool.query(
			'INSERT INTO post (userid, content) VALUES ($1, $2) RETURNING *;',
			[userId, content]
		);
		return post;
	} catch (err) {
		console.error('Error inserting post:', err);
		throw err;
	}
}

export async function deletePost(postId) {
  try {
    const data = await pool.query(
      `DELETE FROM post WHERE id = $1`, [postId]
    );
    
    if (data) {
      console.log(data);
    }
  } catch (err) {
    console.error('Error deleting post:', err);
    throw err;
  }
}
