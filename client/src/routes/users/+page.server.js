import { ENV, SECRET_BASE_DEV, SECRET_BASE_PROD } from '$env/static/private';

export const load = async ({ fetch }) => {
  let baseUrl = ENV == 'prod' ? SECRET_BASE_PROD : SECRET_BASE_DEV;
  console.log(SECRET_BASE_DEV);
  let response = await fetch(`${baseUrl}/api/user`);
  let users = await response.json();

  return { users };
};
