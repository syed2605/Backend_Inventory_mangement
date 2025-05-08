import mongoose, { Schema } from 'mongoose';
import { ICategory } from '../interfaces/model.interfaces';

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model<ICategory>('Category', CategorySchema);
