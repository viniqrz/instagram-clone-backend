import { Router } from 'express';
import { CreatePostController } from '../useCases/CreatePost/CreatePostController';
import multer from 'multer';
import { multerConfig } from '../config/multer';
import { ensureAuth } from '../middlewares/ensureAuth';

const router = Router();

const createPostController = new CreatePostController();

router.post(
  '/',
  ensureAuth,
  multer(multerConfig).single('image'),
  createPostController.handle
);

export { router as postRouter };
