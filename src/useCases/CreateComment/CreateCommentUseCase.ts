import { CommentDto } from '../../@types/dtos/CommentDto';
import { CommentModel } from '../../models/Comment';
import { IComment } from '../../@types/models/Comment';
import { isValidObjectId } from 'mongoose';
import { AppError } from '../../@types/errors/AppError';

export class CreateCommentUseCase {
  public async execute(dto: CommentDto): Promise<IComment> {
    const isIdValid = isValidObjectId(dto.post);
    if (!isIdValid) throw new AppError(400, 'Invalid post id');

    return await CommentModel.create(dto);
  }
}
