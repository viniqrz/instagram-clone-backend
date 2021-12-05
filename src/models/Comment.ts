import { model, Schema } from "mongoose";
import { Comment } from "../@types/models/Comment";

const commentSchema = new Schema<Comment>({
  text: {
    type: String,
    required: [true, 'Comment must have a text content'],
    maxlength: [200, 'Max-length of text content is 200 characters'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

const CommentModel = model<Comment>("Comment", commentSchema);

export { CommentModel };