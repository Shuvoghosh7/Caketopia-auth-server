import express from 'express';

import validateRequest from '../../middlewares/validateRequest';

import { UserValidation } from './buyer.validation';
import auth from '../../middlewares/auth';
import { BuyerController } from './buyer.controller';

const router = express.Router();


router.get('/',auth("buyer"), BuyerController.getAllBuyer);

export const BuyerRoutes = router;