import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';

import config from '../../../config';
import { IBuyer, BuyerModel } from './buyer.interface';

const BuyerSchema = new Schema<IBuyer, BuyerModel>(
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
    password: {
      type: String,
      required: true,
      select: 0,
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
    role: {
      type: String,
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

BuyerSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<
IBuyer,'email' | 'password' | 'role'
> | null> {
  return await Buyer.findOne(
    { email },
    { email: 1, password: 1, role: 1}
  );
};

BuyerSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

BuyerSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

export const Buyer = model<IBuyer, BuyerModel>('Buyer', BuyerSchema);
