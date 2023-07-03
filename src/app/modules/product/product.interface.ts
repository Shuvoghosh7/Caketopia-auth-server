import { Model } from "mongoose";

export type IProduct = {
  imageUrl: string;
  productName: string;
  itemCode: string;
  description: string;
  flavor: string;
  netWeight: string;
  category: string;
  price: number;
};

export type IProductModel =  Model<IProduct, Record<string, unknown>>;;

export type IProductFilters = {
  searchTerm?: string;
};
