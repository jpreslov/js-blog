import { query } from '$lib/db';

export async function getUsers() {
	try {
		const result = await query(`SELECT * FROM users ORDER BY id`);
		console.log('hit');
		return result.rows;
	} catch (err) {
		console.error(err);
	}
}
