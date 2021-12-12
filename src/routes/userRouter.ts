import { Router } from 'express';
import { AuthenticateController } from '../useCases/Authenticate/AuthenticateController';
import { SignUpController } from '../useCases/SignUp/SignUpController';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';
import { ListUsersController } from '../useCases/ListUsers/ListUsersController';
import { ensureAuth } from '../middlewares/ensureAuth';

const router = Router();

const signUpController = new SignUpController();
const authenticateController = new AuthenticateController();
const listUsersController = new ListUsersController();

router.get('/', ensureAuth, listUsersController.handle);

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
