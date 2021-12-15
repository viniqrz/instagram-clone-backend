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
import { UnfollowController } from '../useCases/Unfollow/UnfollowController';
import { UpdateMeController } from '../useCases/UpdateMe/UpdateMeController';
import { ForgotPasswordController } from '../useCases/ForgotPassword/ForgotPasswordController';

const router = Router();

const signUpController = new SignUpController();
const authenticateController = new AuthenticateController();
const listUsersController = new ListUsersController();
const followController = new FollowController();
const listFollowersController = new ListFollowersController();
const getUserController = new GetUserController();
const unfollowController = new UnfollowController();
const updateMeController = new UpdateMeController();
const forgotPassword = new ForgotPasswordController();

router.get('/', ensureAuth, listUsersController.handle);
router.get('/:id', getUserController.handle);

router.patch('/me', ensureAuth, updateMeController.handle);
router.post(
  '/forgot-password',
  body('email').exists(),
  handleValidationErrors,
  forgotPassword.handle
);

router.get('/:id/followers', listFollowersController.handle);
router.post('/:id/followers', ensureAuth, followController.handle);
router.delete('/:id/followers', ensureAuth, unfollowController.handle);
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
