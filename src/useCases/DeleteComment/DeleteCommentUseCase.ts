import { CommentModel } from "../../models/Comment";


export class DeleteCommentUseCase {

  public async execute(id: string) {
    await CommentModel.findByIdAndDelete(id);
  }
}