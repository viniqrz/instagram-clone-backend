import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { DeleteCommentUseCase } from './DeleteCommentUseCase';

export class DeleteCommentController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    await new DeleteCommentUseCase().execute(req.params.commentId);

    res.json({
      status: 'success',
      message: 'Comment deleted succesfully!',
    });
  }
}
