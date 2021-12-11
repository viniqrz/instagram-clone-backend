import { Schema } from 'mongoose';

export interface Post {
  text: string;
  image: string;
  user: Schema.Types.ObjectId;
  comments?: Schema.Types.ObjectId[];
  likes?: Schema.Types.ObjectId[];
  createdAt: Date;
}
