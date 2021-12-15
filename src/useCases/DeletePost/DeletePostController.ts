import { Response, NextFunction } from 'express';
import { IRequest } from '../../@types/express/IRequest';
import { catchAsync } from '../../helpers/catchAsync';
import { DeletePostUseCase } from './DeletePostUseCase';

export class DeletePostController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: IRequest,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    await new DeletePostUseCase().execute(req.params.id, req.user._id);

    res.json({
      status: 'success',
      message: 'Post deleted succesfully!',
    });
  }
}
