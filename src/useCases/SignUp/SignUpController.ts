import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { SignUpUseCase } from './SignUpUseCase';

export class SignUpController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: Request, res: Response, next: NextFunction) {
    const user = await new SignUpUseCase().execute(req.body);

    res.json({
      status: 'success',
      data: { user },
    });
  }
}
