import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { ListPostsUseCase } from './ListPostsUseCase';

export class ListPostsController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    const posts = await new ListPostsUseCase().execute();

    res.json({
      status: 'success',
      data: posts,
    });
  }
}
