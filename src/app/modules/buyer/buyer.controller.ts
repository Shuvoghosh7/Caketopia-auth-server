import { Request, Response } from "express";

import { RequestHandler } from 'express-serve-static-core';
import catchAsync from "../../../shared/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";

import { IBuyer } from "./buyer.interface";
import { BuyerService } from "./buyer.svervice";


const getAllBuyer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
  
    const result = await BuyerService.getAllBuyer();
    

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

export const BuyerController = {
  getAllBuyer
};
