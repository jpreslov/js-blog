export const load = async ({ fetch }) => {
  let response = await fetch(`http://localhost:5173/api/user`);
  let users = await response.json();

  return { users };
};
