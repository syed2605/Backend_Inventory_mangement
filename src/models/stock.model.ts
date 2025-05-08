import mongoose, { Schema } from 'mongoose';
import { IStock } from '../interfaces/model.interfaces';

const StockSchema = new Schema<IStock>({
  drug_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Drug' },
  available_stock: { type: Number, required: true },
  expiration_date: { type: Date, required: true },
  isExpired: { type: Boolean, required: true },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model<IStock>('Stock', StockSchema);
