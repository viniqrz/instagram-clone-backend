import { Schema } from 'mongoose';

export interface Post {
  text: string;
  file: string;
  user: Schema.Types.ObjectId;
  comments?: Schema.Types.ObjectId[];
  likes?: Schema.Types.ObjectId[];
  likesCount: number;
  createdAt: Date;
}
