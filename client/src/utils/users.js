export const getUsers = async () => {
	const response = await fetch('http://localhost:3000/user');
	const data = await response.json();
	return data;
};
