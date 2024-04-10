import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool } = pg;
import bcrypt from 'bcrypt';

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}/${process.env.DB_NAME}`

const pool = new Pool({ connectionString })

const query = (text, params) => pool.query(text, params);

export default query;
