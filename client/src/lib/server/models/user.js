import { pool } from '$lib/server/db';

export async function getUserById(id) {
	const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1;`, [id]);
	return rows[0];
}

export async function getUsers() {
	const { rows } = await pool.query(`SELECT * FROM users ORDER BY id;`);
	console.log('hit $lib/server/models/user.js');
	return rows;
}

export async function getUserByUsername(username) {
	const { rows } = await pool.query(`SELECT * FROM users WHERE name = $1;`, [username]);
	return rows[0];
}
