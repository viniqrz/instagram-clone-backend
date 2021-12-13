import { Router } from 'express';
import { body } from 'express-validator';

import { commentRouter } from './commentRouter';
import { ensureAuth } from '../middlewares/ensureAuth';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';
import { CreatePostController } from '../useCases/CreatePost/CreatePostController';
import { GetPostController } from '../useCases/GetPost/GetPostController';
import { ListPostsController } from '../useCases/ListPosts/ListPostsController';
import { ListLikesController } from '../useCases/ListLikes/ListLikesController';
import { LikeController } from '../useCases/Like/LikeController';

const router = Router();

const createPostController = new CreatePostController();
const getPostController = new GetPostController();
const listPostsControler = new ListPostsController();
const listLikesController = new ListLikesController();
const likeController = new LikeController();

router.get('/', listPostsControler.handle);
router.get('/:id', getPostController.handle);
router.get('/:id/likes', listLikesController.handle);
router.post('/:id/likes', ensureAuth, likeController.handle);
router.post(
  '/',
  body(['text', 'file']).exists(),
  handleValidationErrors,
  ensureAuth,
  createPostController.handle
);

router.use('/:postId/comments', commentRouter);

export { router as postRouter };
