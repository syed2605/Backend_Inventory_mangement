import mongoose, { Schema } from 'mongoose';
import { IToken } from '../interfaces/model.interfaces';

const TokenSchema = new Schema<IToken>({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  accessTokenExpiry: { type: Date, required: true },
  refreshTokenExpiry: { type: Date, required: true },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model<IToken>('Token', TokenSchema);
