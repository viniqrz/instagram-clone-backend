import { Schema } from 'mongoose';

export interface PostDto {
  text: string;
  file: string;
  user: Schema.Types.ObjectId;
}
