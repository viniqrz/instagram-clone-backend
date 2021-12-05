import { model, Schema } from "mongoose";
import { Post } from "../@types/models/Post";

const postSchema = new Schema<Post>({
  text: {
    type: String,
    required: [true, 'Post must have a text content']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  likes: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
  },
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'Comment',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

const PostModel = model<Post>("Post", postSchema);

export { PostModel };