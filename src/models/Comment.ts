import { Document, model, Schema } from 'mongoose';
import { IComment } from '../@types/models/Comment';

const commentSchema = new Schema<IComment>({
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
  },
});

const CommentModel = model<IComment>('Comment', commentSchema);

export { CommentModel };
