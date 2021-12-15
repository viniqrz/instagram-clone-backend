import mongoose from 'mongoose';

export interface ResetToken {
  user: mongoose.Types.ObjectId;
  token: string;
  createdAt: Date;
}
