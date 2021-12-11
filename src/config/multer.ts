import multer from 'multer';
import crypto from 'crypto';

import { Request } from 'express';
import { AppError } from '../@types/errors/AppError';

interface FileWithKey extends Express.Multer.File {
  key: string;
}

export const multerConfig: multer.Options = {
  dest: './tmp/uploads',
  storage: multer.diskStorage({
    destination: (req: Request, file, cb) => {
      cb(null, './tmp/uploads');
    },
    filename: (req: Request, file: FileWithKey, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, file.originalname);

        file.key = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, file.key);
      });
    },
  }),
  fileFilter: (req: Request, file: any, cb: multer.FileFilterCallback) => {
    const mimetypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];

    if (mimetypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new AppError(422, 'Invalid file format'));
    }
  },
  limits: {
    fileSize: 1.5 * 1024 * 1024,
  },
};
