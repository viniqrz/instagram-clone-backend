import { model, Schema } from 'mongoose';
import { Post } from '../@types/models/Post';

const postSchema = new Schema<Post>(
  {
    text: {
      type: String,
      required: [true, 'Post must have a text content'],
      maxlength: [500, 'Max-length of post text content is 500 characters'],
    },
    file: {
      type: String,
      required: [true, 'Post must have a file'],
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'Post must have a user'],
      ref: 'User',
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});

postSchema.pre('findById', function (next) {
  // this.populate({
  //   path: 'user',
  //   select: '-password -followers -following',
  // });

  // this.populate('')

  // this.populate({ path: 'likes', select: '-password' });
  this.populate({ path: 'comments' });

  next();
});

const PostModel = model<Post>('Post', postSchema);

export { PostModel };
