import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './buyer.controller';
import { UserValidation } from './buyer.validation';

const router = express.Router();


router.post('/create-user',validateRequest(UserValidation.createUserZodSchema),UserController.createUser);

export const BuyerRoutes = router;