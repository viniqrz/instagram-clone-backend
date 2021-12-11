import { Schema } from 'mongoose';

export interface PostDto {
  text: string;
  file: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}
