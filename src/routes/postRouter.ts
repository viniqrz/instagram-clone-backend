import { Router } from 'express';
import { CreatePostController } from '../useCases/CreatePost/CreatePostController';
import { ensureAuth } from '../middlewares/ensureAuth';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';

const router = Router();

const createPostController = new CreatePostController();

router.post(
  '/',
  body(['text', 'file']).exists(),
  handleValidationErrors,
  ensureAuth,
  createPostController.handle
);

export { router as postRouter };
