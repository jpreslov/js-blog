const baseUrl = 'http://localhost:3000';

export const getUsers = async () => {
	const response = await fetch(`${baseUrl}/user`);
	const data = await response.json();
	return data;
};

export const getUser = async (id) => {
	const response = await fetch(`${baseUrl}/user/${id}`);
	const data = await response.json();
	return data;
};

export const postUser = async (username, password) => {
	const response = await fetch(`${baseUrl}/user`, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	});
	const data = await response.json();
	return data;
};

export const updateUser = async (username, password) => {
	const response = await fetch(`${baseUrl}/user`, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	});
	const data = await response.json();
	return data;
};
