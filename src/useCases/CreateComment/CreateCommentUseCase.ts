import { CommentDto } from '../../@types/dtos/CommentDto';
import { CommentModel } from '../../models/Comment';
import { IComment } from '../../@types/models/Comment';

export class CreateCommentUseCase {
  public async execute(dto: CommentDto): Promise<IComment> {
    return await CommentModel.create(dto);
  }
}
