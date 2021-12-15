import { model, Schema } from 'mongoose';
import { ResetToken } from '../@types/models/ResetToken';

const resetTokenSchema = new Schema<ResetToken>({
  token: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ResetTokenModel = model('ResetToken', resetTokenSchema);

export { ResetTokenModel };
