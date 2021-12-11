import { Schema } from 'mongoose';

export interface Post {
  text: string;
  file: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  comments?: Schema.Types.ObjectId[];
  likes?: Schema.Types.ObjectId[];
  createdAt: Date;
}
