import mongoose, { Schema } from 'mongoose';
import { IDrug } from '../interfaces/model.interfaces';

const DrugSchema = new Schema<IDrug>({
  name: { type: String, required: true },
  price: { type: String, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Category' },
  low_stock_threshold: { type: Number, required: true },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model<IDrug>('Drug', DrugSchema);
