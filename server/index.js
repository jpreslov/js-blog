import express from 'express';
import session from 'express-session';
import cors from 'cors';
import query from './db.js';
import passport from 'passport';

const app = express();
app.use(express.json());
app.use(cors());

app.use(session({
  secret: 'really-secret-shit',
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/gh', passport.authenticate('github'));

app.get('/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const result = await query(`SELECT * FROM "user" WHERE username = $1`, [username]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/user', async (req, res) => {
  try {
    const result = await query(`SELECT * FROM "user" ORDER BY id`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await query(`SELECT * FROM "user" WHERE id = ${id}`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.post('/user', async (req, res) => {
  try {
    const { username } = req.body;
    const result = await query(`INSERT INTO "user" (username, password) VALUES ('${username}')`);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.put('/user/:id', async (req, res) => {
  try {
    const user = req.body;

    const result = await query(`
      UPDATE "user"
      SET username = $1,
          password = $2
      WHERE id = $3
    `, [user.username, user.password, req.params.id]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/post', async (req, res) => {
  try {
    const result = await query('SELECT * FROM post');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
