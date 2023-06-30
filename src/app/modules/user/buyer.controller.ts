import { Request, Response } from "express";

import { RequestHandler } from 'express-serve-static-core';
import catchAsync from "../../../shared/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";

import { IBuyer } from "./buyer.interface";
import { UserService } from "./buyer.vervice";

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...user } = req.body;
    const result = await UserService.createUser(user);

    sendResponse<IBuyer>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

export const UserController = {
  createUser
};
