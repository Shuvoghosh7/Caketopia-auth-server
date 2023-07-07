"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const config_1 = __importDefault(require("../../../config"));
const product_model_1 = require("../product/product.model");
const user_model_1 = require("../users/user.model");
const order_model_1 = require("./order.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(order.product);
    const buyer = yield user_model_1.User.findById(order.buyer);
    if (!buyer) {
        throw new Error("Buyer not found");
    }
    if (!product) {
        throw new Error("product not found");
    }
    if (!order.quantity) {
        order.quantity = config_1.default.default_quantity;
    }
    if (!order.quantity) {
        order.quantity = config_1.default.default_quantity;
    }
    // Check if the product already exists in the order
    const existingOrder = yield order_model_1.Order.findOne({ product: order.product });
    if (existingOrder) {
        throw new Error("This product already exists in the order");
    }
    const result = (yield (yield order_model_1.Order.create(order)).populate("product")).populate({
        path: "buyer",
        populate: [
            {
                path: "buyer",
            },
        ],
    });
    return result;
});
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find().populate("product").populate({
        path: "buyer",
        populate: [
            {
                path: "buyer",
            },
        ],
    });
    return result;
});
const updateOrder = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.Order.findById(id);
    if (!order) {
        throw new Error("Order not found");
    }
    const result = yield order_model_1.Order.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrder,
    updateOrder,
};
