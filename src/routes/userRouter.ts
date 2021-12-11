import { Router } from 'express';
import { SignUpController } from '../useCases/SignUp/SignUpController';

const router = Router();

const signUpController = new SignUpController();

router.post('/', signUpController.handle);

export { router as userRouter };
