import { pool } from '$lib/server/db';

export async function GET() {
  try {
    const { rows } = await pool.query(`SELECT * FROM users`);
    return new Response(JSON.stringify(rows));
  } catch (error) {
    console.error('error retreiving users: ', error);
    return new Response(JSON.stringify({ error: 'Failed to retrieve users'}), { status: 500 });
  }
}
