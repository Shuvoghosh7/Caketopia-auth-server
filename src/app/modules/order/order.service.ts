import mongoose from "mongoose";
import config from "../../../config";
import { Buyer } from "../buyer/buyer.model";
import { Product } from "../product/product.model";
import { User } from "../users/user.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";
import { CompleteOrder } from "../completeOrder/completeOrder.model";

const createOrder = async (order: IOrder) => {
  const product = await Product.findById(order.product);
  const buyer = await User.findById(order.buyer);
  if (!buyer) {
    throw new Error("Buyer not found");
  }
  if (!product) {
    throw new Error("product not found");
  }

  if (!order.quantity) {
    order.quantity = config.default_quantity as unknown as number;
  }
  if (!order.quantity) {
    order.quantity = config.default_quantity as unknown as number;
  }

  // Check if the product already exists in the order
  const existingOrder = await Order.findOne({ product: order.product });
  if (existingOrder) {
    throw new Error("This product already exists in the order");
  }

  const result = (
    await (await Order.create(order)).populate("product")
  ).populate({
    path: "buyer",
    populate: [
      {
        path: "buyer",
      },
    ],
  });
  return result;
};

const getAllOrder = async () => {
  const result = await Order.find().populate("product").populate({
    path: "buyer",
    populate: [
      {
        path: "buyer",
      },
    ],
  });
  return result;
};

const updateOrder = async (
  id: string,
  payload: Partial<IOrder>
): Promise<IOrder | null> => {
  const order = await Order.findById(id);
  if (!order) {
    throw new Error("Order not found");
  }

  const result = await Order.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrder,
  updateOrder,
};
