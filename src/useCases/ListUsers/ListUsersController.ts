import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { ListUsersUseCase } from './ListUsersUseCase';

export class ListUsersController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    const users = await new ListUsersUseCase().execute();

    res.json({
      status: 'success',
      data: users,
    });
  }
}
