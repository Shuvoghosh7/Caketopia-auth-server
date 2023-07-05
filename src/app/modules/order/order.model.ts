import { Schema, model } from 'mongoose';
import { IOrder, OrderModel } from './order.interface';
import { orderStatus } from './order.constent';


const orderSchema = new Schema<IOrder>(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quantity:{
      type:Number,
      required: true,
    },
    orderStatus:{
      type: String,
      required: true,
      enum: orderStatus,
      default:'inProgress'
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);





export const Order = model<IOrder, OrderModel>('Order', orderSchema);
