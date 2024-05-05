import { createUploadthing } from 'uploadthing/server';

const f = createUploadthing();
const auth = (req) => ({ id: req.userId });

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "6MB" } })
    .middleware(async ({ req }) => {
      console.log('imageuploader', req);
      const user = await auth(req);

      if (!user) throw new Error("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log('Upload complete for userId:', metadata.userId);
      console.log('file url', file.url);
    }),
}
