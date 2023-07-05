
import { Model, Types } from 'mongoose';

export type IOrderStatus = 'inProgress' | 'pending' | 'complete';

export type ICompleteOrder= {
  product: Types.ObjectId;
  buyer: Types.ObjectId;
  quantity:number;
  orderStatus:IOrderStatus
 
};


export type CompleteOrderModel = Model<ICompleteOrder, Record<string, unknown>>;