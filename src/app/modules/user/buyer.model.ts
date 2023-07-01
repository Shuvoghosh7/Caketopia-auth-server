import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';

import config from '../../../config';
import { IBuyer, BuyerModel } from './buyer.interface';

const BuyerSchema = new Schema<IBuyer>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  
    contactNo: {
      type: String,
      unique: true,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);



export const Buyer = model<IBuyer, BuyerModel>('Buyer', BuyerSchema);
