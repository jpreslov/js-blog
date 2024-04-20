// src/lib/db.js
export async function getUsers() {
  const response = await fetch('/api/users/')
  const users = response.json();
  return users;
}
