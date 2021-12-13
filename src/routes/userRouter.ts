import { Router } from 'express';
import { body } from 'express-validator';
import { ensureAuth } from '../middlewares/ensureAuth';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';
import { AuthenticateController } from '../useCases/Authenticate/AuthenticateController';
import { ListUsersController } from '../useCases/ListUsers/ListUsersController';
import { FollowController } from '../useCases/Follow/FollowController';
import { SignUpController } from '../useCases/SignUp/SignUpController';
import { GetUserController } from '../useCases/GetUser/GetUserController';
import { ListFollowersController } from '../useCases/ListFollowers/ListFollowersController';

const router = Router();

const signUpController = new SignUpController();
const authenticateController = new AuthenticateController();
const listUsersController = new ListUsersController();
const followController = new FollowController();
const listFollowersController = new ListFollowersController();
const getUserController = new GetUserController();

router.get('/', ensureAuth, listUsersController.handle);
router.get('/:id', getUserController.handle);

router.get('/:id/followers', listFollowersController.handle);
router.post('/:id/followers', ensureAuth, followController.handle);
router.post(
  '/',
  body(['password', 'email', 'username', 'name']).exists(),
  handleValidationErrors,
  signUpController.handle
);
router.post(
  '/authenticate',
  body(['password', 'username']).exists(),
  handleValidationErrors,
  authenticateController.handle
);

export { router as userRouter };
