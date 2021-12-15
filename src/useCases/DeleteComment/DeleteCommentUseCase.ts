import { CommentModel } from "../../models/Comment";


export class DeleteCommentUseCase {

  public async execute(commentId: string, userId: string) {
    const comment = await CommentModel.findById(commentId);

    console.log(comment.user['_id'], userId);
    // if (comment.user['_id']) {}
  }
}