import express from 'express';
import { AdminController } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidation } from './admin.validation';
const router = express.Router();


router.post('/create-admin',AdminController.createAdmin);

export const AdminRoutes = router;