import { Router } from 'express';
import { CreateCommentController } from '../useCases/CreateComment/CreateCommentController';
import { ensureAuth } from '../middlewares/ensureAuth';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';
import { ListCommentsController } from '../useCases/ListComments/ListCommentsController';
import { DeleteCommentController } from '../useCases/DeleteComment/DeleteCommentController';

const router = Router({ mergeParams: true });

const createCommentController = new CreateCommentController();
const listCommentsController = new ListCommentsController();
const deleteCommentController = new DeleteCommentController();

router.get('/', listCommentsController.handle);
router.delete('/', ensureAuth, deleteCommentController.handle)
router.post(
  '/',
  body(['text']).exists(),
  handleValidationErrors,
  ensureAuth,
  createCommentController.handle
);

export { router as commentRouter };
