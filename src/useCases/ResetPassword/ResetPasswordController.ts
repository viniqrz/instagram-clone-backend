import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { ResetPasswordUseCase } from './ResetPasswordUseCase';

export class ResetPasswordController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const { token, password } = req.body;

    await new ResetPasswordUseCase().execute(token, password);

    res.status(201).json({
      status: 'success',
      message: 'Password succesfully reseted',
    });
  }
}
