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
  contactNo: string;
  gender?: 'male' | 'female';
  permanentAddress?: string;
  presentAddress?: string;
};


export type BuyerModel = Model<IBuyer, Record<string, unknown>>;

