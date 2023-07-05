import { Schema, model } from 'mongoose';
import { CompleteOrderModel, ICompleteOrder } from './completeOrder.interface';
import { orderStatus } from '../order/order.constent';



const CompleteorderSchema = new Schema<ICompleteOrder>(
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





export const CompleteOrder = model<ICompleteOrder, CompleteOrderModel>('CompleteOrder', CompleteorderSchema);
