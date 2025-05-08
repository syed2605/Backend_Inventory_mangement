import mongoose, { Schema } from 'mongoose';
import { IUser, UserRole } from '../interfaces/model.interfaces';

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(UserRole) },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
