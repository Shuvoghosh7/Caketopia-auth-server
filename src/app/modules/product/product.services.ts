import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IPaginationOptions } from "../../../interface.ts/pagination";
import { productSearchableFields } from "./product.constant";
import { IProduct, IProductFilters } from "./product.interface";
import { Product } from "./product.model";
import { IGenericResponse } from "../../../interface.ts/common";


const createProduct = async (
  payload: IProduct
): Promise<IProduct> => {

  const result = await Product.create(payload);
  return result;
};


const getAllProducts = async (
  filters: IProductFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IProduct[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

    const andConditions = [];
    if (searchTerm) {
      andConditions.push({
        $or: productSearchableFields.map(field => ({
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        })),
      });
    }
    if (Object.keys(filtersData).length) {
      andConditions.push({
        $and: Object.entries(filtersData).map(([field, value]) => ({
          [field]: value,
        })),
      });
    }

    const sortConditions: { [key: string]: SortOrder } = {};

    if (sortBy && sortOrder) {
      sortConditions[sortBy] = sortOrder;
    }
    const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
    const result = await Product.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Product.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const ProductService = {
  createProduct,
  getAllProducts
};
