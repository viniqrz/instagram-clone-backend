import multer from 'multer';

import { Router } from 'express';
import { multerConfig } from '../config/multer';
import { UploadFileController } from '../useCases/UploadFile/UploadFileController';

const router = Router();

const uploadFileController = new UploadFileController();

router.post(
  '/',
  multer(multerConfig).single('file'),
  uploadFileController.handle
);

export { router as fileRouter };
