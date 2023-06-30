import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';


const router = express.Router();

const moduleRoutes = [

  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },

]
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;