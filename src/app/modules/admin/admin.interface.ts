import { Model } from "mongoose";

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IAdmin = {
  name: UserName;
  profileImage: string;
  email: string;
  role: string;
  password: string;
  contactNo: string;
  gender?: 'male' | 'female';
  permanentAddress?: string;
  presentAddress?: string;
};

export type AdminModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IAdmin, 'email' | 'password' | 'role' >>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IAdmin>;
// export type AdminModel = Model<IAdmin, Record<string, unknown>>;

