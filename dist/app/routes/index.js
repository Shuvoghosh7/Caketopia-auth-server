"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_route_1 = require("../modules/admin/admin.route");
const auth_route_1 = require("../modules/auth/auth.route");
const buyer_route_1 = require("../modules/buyer/buyer.route");
const users_route_1 = require("../modules/users/users.route");
const product_route_1 = require("../modules/product/product.route");
const order_route_1 = require("../modules/order/order.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/admin',
        route: admin_route_1.AdminRoutes,
    },
    {
        path: '/buyer',
        route: buyer_route_1.BuyerRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/users',
        route: users_route_1.UserRoutes,
    },
    {
        path: '/product',
        route: product_route_1.productRoutes,
    },
    {
        path: '/order',
        route: order_route_1.OrderRoutes,
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
