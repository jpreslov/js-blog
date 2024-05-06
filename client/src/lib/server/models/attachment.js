import { pool } from '$lib/server/db';

export async function getAttachments() {
  try {
    const { rows } = await pool.query(`
    SELECT * FROM attachment
    ORDER BY attachment.id DESC
  `);
    return rows;
  } catch (err) {
    console.error('Error deleting attachment:', err);
    throw err;
  }
}

export async function createAttachment(userid, link) {
  try {
    const row = await pool.query(`
      INSERT INTO attachment (userid, link) VALUES $1, $2 RETURNING *;
    `, [userid, link]);

    return row;
  } catch (err) {
    console.error(err);
  }
}
