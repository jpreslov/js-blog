import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import Google from '@auth/sveltekit/providers/google';

import PostgresAdapter from '@auth/pg-adapter';
import pkg from 'pg'; const { Pool } = pkg;

import {
  GITHUB_ID,
  GITHUB_SECRET,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} from '$env/static/private';

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export const { handler, signIn, signOut } = SvelteKitAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    Google
  ],
});
