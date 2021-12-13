import mongoose, { Schema } from 'mongoose';

export interface IComment {
  text: string;
  user: Schema.Types.ObjectId;
  post: mongoose.Types.ObjectId;
  createdAt: Date;
}
