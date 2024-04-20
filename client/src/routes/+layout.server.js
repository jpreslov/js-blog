export const load = async (event) => {
	let session = await event.locals.auth();

	console.log(session);

	return {
		session
	};
};
