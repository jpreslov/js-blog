export const load = async (event) => {
  console.log('SESSION: \n');
  console.log(event.locals.getSession());

	return {
		session: await event.locals.getSession()
	};
};
