import { Schema, Types, model } from 'mongoose';
import { IProduct, IProductModel } from './product.interface';


const ProductSchema = new Schema<IProduct, IProductModel>(
{
  imageUrl: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  itemCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  flavor: {
    type: String,
    required: true,
  },
  netWeight: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
},
{
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
}


)
export const Product = model<IProduct, IProductModel>('Product', ProductSchema);