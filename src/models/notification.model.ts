import mongoose, { Schema } from 'mongoose';
import { INotification } from '../interfaces/model.interfaces';

const NotificationSchema = new Schema<INotification>({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  type: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, required: true, default: false },
  // createdBy: { type: mongoose.Types.ObjectId, required: false, ref: 'User' },
  // updatedBy: { type: mongoose.Types.ObjectId, required: false, ref: 'User' },
}, { timestamps: true });

export default mongoose.model<INotification>('Notification', NotificationSchema);
