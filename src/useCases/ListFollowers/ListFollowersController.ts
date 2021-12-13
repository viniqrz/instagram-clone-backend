import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { ListFollowersUseCase } from './ListFollowersUseCase';

export class ListFollowersController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    const { followers } = await new ListFollowersUseCase().execute(
      req.params.id
    );

    res.json({
      status: 'success',
      data: followers,
    });
  }
}
