import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { FollowUseCase } from './FollowUseCase';

export class FollowController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const followerId = req.user._id;
    const receiverId = req.params.id;

    const followUseCase = new FollowUseCase();
    await followUseCase.execute(followerId, receiverId);

    res.status(200).json({
      status: 'success',
      message: 'Follow action completed!',
    });
  }
}
