/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

import { IBuyer } from '../buyer/buyer.interface';
import { IAdmin } from '../admin/admin.interface';



export type IUser = {
  id: string;
  role: string;
  email:string;
  password: string;
  buyer?: Types.ObjectId | IBuyer;
  admin?: Types.ObjectId | IAdmin;
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'email'|'password' | 'role'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;

