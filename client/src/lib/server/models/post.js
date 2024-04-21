import { pool } from '$lib/server/db';

export async function getPosts() {
	const { rows } = await pool.query('SELECT * FROM post;');
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
