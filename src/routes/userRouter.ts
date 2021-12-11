import { Router } from 'express';
import { AuthenticateController } from '../useCases/Authenticate/AuthenticateController';
import { SignUpController } from '../useCases/SignUp/SignUpController';

const router = Router();

const signUpController = new SignUpController();
const authenticateController = new AuthenticateController();

router.post('/', signUpController.handle);
router.post('/authenticate', authenticateController.handle);

export { router as userRouter };
