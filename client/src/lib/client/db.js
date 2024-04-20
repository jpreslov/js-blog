export async function getUsers() {
  const response = await fetch('/api/users');
  return await response.json();
}
