import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../../helpers/catchAsync';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  constructor() {
    this.handle = catchAsync(this.handle);
  }

  public async handle(
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ): Promise<void> {
    const user = await new GetUserUseCase().execute(req.params.id);

    res.json({
      status: 'success',
      data: { user },
    });
  }
}
