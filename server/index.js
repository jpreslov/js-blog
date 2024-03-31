require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/user', async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM "user"`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(`SELECT * FROM "user" WHERE id = ${id}`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
})

app.post('/user', async (req, res) => {
  try {
    const username = req.body.username;
    const result = await db.query(`INSERT INTO "user" (username) VALUES ('${username}')`)
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
})

app.get('/post', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM post');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
