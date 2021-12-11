import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { GetPostUseCase } from './GetPostUseCase';

export class GetPostController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const post = await new GetPostUseCase().execute(req.params.id);

    res.json({
      status: 'success',
      data: { post },
    });
  }
}
