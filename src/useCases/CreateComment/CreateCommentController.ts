import { catchAsync } from '../../helpers/catchAsync';
import { IRequest } from '../../@types/express/IRequest';
import { Response, NextFunction } from 'express';
import { CreateCommentUseCase } from './CreateCommentUseCase';

export class CreateCommentController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const dto = { text: req.body.text, user: req.user._id };

    const createCommentUseCase = new CreateCommentUseCase();
    const comment = await createCommentUseCase.execute(dto);

    res.status(200).json({
      status: 'success',
      data: { comment },
    });
  }
}
