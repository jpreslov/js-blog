export const load = async (event) => {
	let session = await event.locals.auth();

	return {
		session: await event.locals.getSession()
	};
};
