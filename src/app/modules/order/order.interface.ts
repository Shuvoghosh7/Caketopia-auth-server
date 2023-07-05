
import { Model, Types } from 'mongoose';

export type IOrderStatus = 'inProgress' | 'pending' | 'complete';

export type IOrder= {
  product: Types.ObjectId;
  buyer: Types.ObjectId;
  quantity:number;
  orderStatus:IOrderStatus
 
};


export type OrderModel = Model<IOrder, Record<string, unknown>>;