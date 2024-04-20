import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT
});

export const query = async (text, params) => {
	const start = Date.now();
	const res = await pool.query(text, params);
	const duration = Date.now() - start;
	console.log('executed query', { text: duration, rows: res.rowCount });
	return res;
};
