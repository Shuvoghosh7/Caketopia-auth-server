import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";


const createAdmin = async (admin: IAdmin): Promise<IAdmin | null> => {
  // set role
  admin.role = "admin";
  const result = await Admin.create(admin);
  return result;
};

export const AdminService = {
  createAdmin,
};
