import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { ListLikesUseCase } from './ListLikesUseCase';

export class ListLikesController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    const { likes } = await new ListLikesUseCase().execute(req.params.id);

    res.json({
      status: 'success',
      data: likes,
    });
  }
}
