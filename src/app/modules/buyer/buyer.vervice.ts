import { IBuyer } from "./buyer.interface";
import { Buyer } from "./buyer.model";



const getAllBuyer = async () => {
  // set role
  
  const result = await Buyer.find();
  return result;
};

export const BuyerService = {
  getAllBuyer,
};
