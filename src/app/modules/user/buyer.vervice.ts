import { IBuyer } from "./buyer.interface";
import { Buyer } from "./buyer.model";



const createUser = async (user: IBuyer): Promise<IBuyer | null> => {
  // set role
  user.role = "user";
  const result = await Buyer.create(user);
  return result;
};

export const UserService = {
  createUser,
};
