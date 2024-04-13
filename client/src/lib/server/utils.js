import argon2 from 'argon2';

export const getHashedPassword = async (password) => await argon2.hash(password);
export const verifyPassword = async (password, hashedPassword) =>
	await argon2.verify(hashedPassword, password);
