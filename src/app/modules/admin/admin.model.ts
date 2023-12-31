import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { AdminModel, IAdmin } from './admin.interface';
import config from '../../../config';

const AdminSchema = new Schema<IAdmin, AdminModel>(
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
/* 
AdminSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<
  IAdmin,'email' | 'password' | 'role'
> | null> {
  return await Admin.findOne(
    { email },
    { email: 1, password: 1, role: 1}
  );
}; */

/* AdminSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

AdminSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
}); */

export const Admin = model<IAdmin, AdminModel>('Admin', AdminSchema);
