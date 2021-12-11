import { Router } from 'express';
import { CreatePostController } from '../useCases/CreatePost/CreatePostController';
import multer from 'multer';
import { multerConfig } from '../config/multer';
import { ensureAuth } from '../middlewares/ensureAuth';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';

const router = Router();

const createPostController = new CreatePostController();

router.post(
  '/',
  body(['image']).exists(),
  handleValidationErrors,
  ensureAuth,
  multer(multerConfig).single('image'),
  createPostController.handle
);

export { router as postRouter };
