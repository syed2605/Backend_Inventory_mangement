import mongoose, { Document } from 'mongoose';
import { ITimeStamps, ICreatedUpdatedBy } from './common.interfaces';

export enum UserRole {
    Staff = 'staff',
    Manager = 'manager',
}

export interface IUser extends Document, ITimeStamps, ICreatedUpdatedBy {
  _id:mongoose.Schema.Types.ObjectId;
  name: string;
  role: UserRole;
  email: string;
  password: string;
}

export interface IToken extends Document, ITimeStamps, ICreatedUpdatedBy {
  user_id: mongoose.Schema.Types.ObjectId;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry: Date;
  refreshTokenExpiry: Date;
}

export interface IDrug extends Document, ITimeStamps, ICreatedUpdatedBy {
  name: string;
  price: string;
  category_id: mongoose.Schema.Types.ObjectId;
  low_stock_threshold: number;
}

export interface ICategory extends Document, ITimeStamps, ICreatedUpdatedBy {
  name: string;
}

export interface IStock extends Document, ITimeStamps, ICreatedUpdatedBy {
  drug_id: mongoose.Schema.Types.ObjectId;
  available_stock: number;
  expiration_date: Date;
  isExpired: boolean;
}

export interface INotification extends Document{
  user_id: mongoose.Schema.Types.ObjectId | string;
  type: string;
  message: string;
  isRead: boolean;
}

export interface IDispense extends Document, ITimeStamps, ICreatedUpdatedBy {
  drug_id: mongoose.Schema.Types.ObjectId;
  qty: number;
}
