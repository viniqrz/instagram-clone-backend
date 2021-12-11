import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { catchAsync } from '../../helpers/catchAsync';
import { SignUpUseCase } from './SignUpUseCase';

export class SignUpController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const user = await new SignUpUseCase().execute(req.body);

    res.json({
      status: 'success',
      data: { user },
    });
  }
}
