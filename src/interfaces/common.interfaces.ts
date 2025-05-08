import mongoose from 'mongoose';

export interface ITimeStamps {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreatedUpdatedBy {
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
}
