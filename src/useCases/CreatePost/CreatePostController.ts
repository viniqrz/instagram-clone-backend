import { NextFunction, Response } from 'express';
import { IRequest } from '../../@types/express/IRequest';
import { catchAsync } from '../../helpers/catchAsync';
import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: IRequest, res: Response, next: NextFunction) {
    const createPostUseCase = new CreatePostUseCase();

    const dto = {
      text: req.body.text,
      file: req.body.file,
      user: req.user._id,
    };

    const post = await createPostUseCase.execute(dto);

    res.status(201).json({
      status: 'success',
      data: post,
    });
  }
}
