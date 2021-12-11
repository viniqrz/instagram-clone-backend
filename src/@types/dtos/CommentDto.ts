import { Schema } from 'mongoose';

export interface CommentDto {
  text: string;
  user: Schema.Types.ObjectId;
}
