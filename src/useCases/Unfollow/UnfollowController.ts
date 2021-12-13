import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { UnfollowUseCase } from './UnfollowUseCase';

export class UnfollowController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const UnfollowerId = req.user._id;
    const receiverId = req.params.id;

    const unfollowUseCase = new UnfollowUseCase();
    await unfollowUseCase.execute(UnfollowerId, receiverId);

    res.status(200).json({
      status: 'success',
      message: 'Unfollow action completed!',
    });
  }
}
