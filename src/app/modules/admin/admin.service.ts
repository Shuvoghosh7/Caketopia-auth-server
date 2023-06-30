import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";


const getAllAdmin = async () => {
  // set role
  
  const result = await Admin.find();
  return result;
};

export const AdminService = {
  getAllAdmin,
};
