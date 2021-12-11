import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { UploadFileUseCase } from './UploadFileUseCase';

export class UploadFileController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(req: Request, res: Response, next: NextFunction) {
    const uploadFileUseCase = new UploadFileUseCase();
    const file = await uploadFileUseCase.execute(req.file.filename);

    res.json({
      status: 'success',
      data: { file },
    });
  }
}
