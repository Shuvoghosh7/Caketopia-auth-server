import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BuyerRoutes } from '../modules/user/buyer.route';
import { UserRoutes } from '../modules/users/users.route';


const router = express.Router();

const moduleRoutes = [

  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path: '/buyer',
    route: BuyerRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },

]
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;