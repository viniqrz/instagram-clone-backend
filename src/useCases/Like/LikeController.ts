import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { LikeUseCase } from './LikeUseCase';

export class LikeController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const likeUseCase = new LikeUseCase();
    const { likes } = await likeUseCase.execute(req.params.id, req.user._id);

    res.status(200).json({
      status: 'success',
      data: likes,
    });
  }
}
