import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { IAdmin } from '../admin/admin.interface';
import { IUser } from './user.interface';
import { generateAdminId } from './user.utils';
import { Admin } from '../admin/admin.model';
import { User } from './user.model';

const createAdmin = async (
  admin: IAdmin,
  user: IUser
): Promise<IUser | null> => {

  // set role
  user.role = 'admin';
 
  // generate faculty id
  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const id = await generateAdminId();
    user.id = id;
    admin.id = id;

    const newAdmin = await Admin.create([admin], { session });

    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create faculty ');
    }

    user.admin = newAdmin[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate('admin');
  }

  return newUserAllData;
};

export const UserService = {
  createAdmin,
};