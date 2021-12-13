import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { ListCommentsUseCase } from './ListCommentsUseCase';

export class ListCommentsController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    const comments = await new ListCommentsUseCase().execute(req.params.postId);

    res.json({
      status: 'success',
      data: comments,
    });
  }
}
