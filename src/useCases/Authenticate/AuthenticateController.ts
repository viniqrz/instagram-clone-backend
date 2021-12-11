import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { AuthenticateUseCase } from './AuthenticateUseCase';

export class AuthenticateController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    const authenticateUseCase = new AuthenticateUseCase();
    const userAndToken = authenticateUseCase.execute(username, password);

    res.status(200).json({
      status: 'success',
      data: userAndToken,
    });
  }
}
