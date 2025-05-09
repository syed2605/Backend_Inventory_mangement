import mongoose, { Schema } from 'mongoose';
import { IDispense } from '../interfaces/model.interfaces';

const DispenseSchema = new Schema<IDispense>({
  drug_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Drug' },
  qty: { type: Number, required: true },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model<IDispense>('Dispense', DispenseSchema);
