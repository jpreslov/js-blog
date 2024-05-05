import { env } from '$env/dynamic/private';
import { ourFileRouter } from '$lib/server/uploadthing';

import { createRouteHandler } from 'uploadthing/server';

const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    uploadthingSecret: env.UPLOADTHING_SECRET,
  },
});

export { GET, POST };
