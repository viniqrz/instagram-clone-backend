import { Router } from 'express';
import { CreateCommentController } from '../useCases/CreateComment/CreateCommentController';
import { ensureAuth } from '../middlewares/ensureAuth';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';

const router = Router();

const createCommentController = new CreateCommentController();

router.post(
  '/',
  body(['text']).exists(),
  handleValidationErrors,
  ensureAuth,
  createCommentController.handle
);

export { router as commentRouter };
