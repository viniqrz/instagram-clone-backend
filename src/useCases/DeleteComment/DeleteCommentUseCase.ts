import { CommentModel } from '../../models/Comment';
import { AppError } from '../../@types/errors/AppError';

export class DeleteCommentUseCase {
  public async execute(commentId: string, userId: string) {
    const comment = await CommentModel.findById(commentId);

    const isOwner = comment.user['_id'].equals(userId);
    if (!isOwner) throw new AppError(401, 'You are not allowed to delete this');

    await comment.delete();
  }
}
