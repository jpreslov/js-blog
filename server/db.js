import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  connectionTimeoutMillis: 2000,
});

const query = (text, params) => pool.query(text, params);

export default query;
