import express from 'express';
import { AdminController } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidation } from './admin.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/users';
const router = express.Router();


router.get('/',auth("admin"), AdminController.getAllAdmin);

export const AdminRoutes = router;