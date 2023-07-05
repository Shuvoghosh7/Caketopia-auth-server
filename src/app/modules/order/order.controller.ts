import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { IOrder } from "./order.interface";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { OrderService } from "./order.service";


const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const order = req.body;
    const result = await OrderService.createOrder(order);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order Complete successfully!',
      data: result,
    });
  }
);

const getAllOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    
    const result = await OrderService.getAllOrder();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get All Order successfully!',
      data: result,
    });
  }
);

const updateOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await OrderService.updateOrder(id, updatedData);

  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product updated successfully !",
    data: result,
  });
});
export const OrderController = {
  createOrder,
  getAllOrder,
  updateOrder
  
};
