// src/lib/server/db.js
import pkg from 'pg';
const { Pool } = pkg;
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from '$env/static/private';

const pool = new Pool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000
});

export { pool };
