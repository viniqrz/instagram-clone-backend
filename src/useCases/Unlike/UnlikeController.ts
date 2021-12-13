import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { UnlikeUseCase } from './UnlikeUseCase';

export class UnlikeController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const unlikeUseCase = new UnlikeUseCase();
    await unlikeUseCase.execute(req.params.id, req.user._id);

    res.status(200).json({
      status: 'success',
      message: 'Unlike action completed!',
    });
  }
}
