import { Request, Response } from "express";
import { IAdmin } from "./admin.interface";
import { RequestHandler } from 'express-serve-static-core';
import catchAsync from "../../../shared/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";
import { AdminService } from "./admin.service";

const getAllAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
  
    const result = await AdminService.getAllAdmin();
    

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

export const AdminController = {
  getAllAdmin
};
