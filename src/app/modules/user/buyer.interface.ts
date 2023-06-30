import { Model } from "mongoose";

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IBuyer = {
  id:string;
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

export type BuyerModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IBuyer, 'email' | 'password' | 'role' >>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IBuyer>;
// export type AdminModel = Model<IAdmin, Record<string, unknown>>;

