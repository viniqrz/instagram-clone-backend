import { Router } from 'express';
import { CreatePostController } from '../useCases/CreatePost/CreatePostController';
import { ensureAuth } from '../middlewares/ensureAuth';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';
import { GetPostController } from '../useCases/GetPost/GetPostController';

const router = Router();

const createPostController = new CreatePostController();
const getPostController = new GetPostController();

router.get('/:id', getPostController.handle);

router.post(
  '/',
  body(['text', 'file']).exists(),
  handleValidationErrors,
  ensureAuth,
  createPostController.handle
);

export { router as postRouter };
