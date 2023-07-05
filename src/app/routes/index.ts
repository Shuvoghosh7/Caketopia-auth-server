import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BuyerRoutes } from '../modules/buyer/buyer.route';
import { UserRoutes } from '../modules/users/users.route';
import { productRoutes } from '../modules/product/product.route';
import { OrderRoutes } from '../modules/order/order.route';


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
  {
    path: '/product',
    route: productRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  }

]
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;