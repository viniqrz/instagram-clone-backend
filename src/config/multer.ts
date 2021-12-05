import { Request } from 'express';
import multer from 'multer';

export const multerConfig: multer.Options = {
  dest: "../../tmp/uploads",
  fileFilter: (req: Request, file: any, cb: multer.FileFilterCallback) => {
    const mimetypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif"
    ]
  },
  limits: {
    fileSize: 1.5 * 1024 * 1024,
  }
}