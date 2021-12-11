import { Router } from 'express';
import { AuthenticateController } from '../useCases/Authenticate/AuthenticateController';
import { SignUpController } from '../useCases/SignUp/SignUpController';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';

const router = Router();

const signUpController = new SignUpController();
const authenticateController = new AuthenticateController();

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
