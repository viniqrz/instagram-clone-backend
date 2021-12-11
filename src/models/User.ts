import validator from 'validator';

import { model, Schema } from 'mongoose';
import { User } from '../@types/models/User';

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, 'User must have a name'],
    maxlength: [60, 'Name must be shorter than 61 characters'],
  },
  username: {
    type: String,
    required: [true, 'User must have an username'],
    maxlength: [20, 'Username must be shorter than 21 characters'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'User must have an email'],
    maxlength: [80, 'Email must be shorter than 21 characters'],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, 'User must have a password'],
  },
  avatar: String,
  posts: {
    type: [Schema.Types.ObjectId],
    ref: 'Post',
  },
  followers: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
  },
  following: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
  },
});

const UserModel = model<User>('User', userSchema);

export { UserModel };
