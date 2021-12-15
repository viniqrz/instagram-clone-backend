import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { UpdateMeUseCase } from './UpdateMeUseCase';

export class UpdateMeController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    await new UpdateMeUseCase().execute(req.user._id, req.body);

    res.status(200).json({
      status: 'success',
      message: 'Update action completed!',
    });
  }
}
