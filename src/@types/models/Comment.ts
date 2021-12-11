import { Schema } from 'mongoose';

export interface IComment {
  text: string;
  user: Schema.Types.ObjectId;
  post: Schema.Types.ObjectId;
  createdAt: Date;
}
