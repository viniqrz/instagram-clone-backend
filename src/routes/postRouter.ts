import { Router } from 'express';
import { CreatePostController } from '../useCases/CreatePost/CreatePostController';

const router = Router();

const createPostController = new CreatePostController();

router.post('/', createPostController.handle);

export { router as postRouter };
