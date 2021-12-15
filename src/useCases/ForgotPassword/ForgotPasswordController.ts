import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase';

export class ForgotPasswordController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const { email } = req.body;

    await new ForgotPasswordUseCase().execute(email);

    res.status(200).json({
      status: 'success',
      message: 'Email with token sent',
    });
  }
}
