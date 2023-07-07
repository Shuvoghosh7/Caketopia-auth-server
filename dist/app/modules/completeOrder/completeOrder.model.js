"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteOrder = void 0;
const mongoose_1 = require("mongoose");
const order_constent_1 = require("../order/order.constent");
const CompleteorderSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    buyer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        enum: order_constent_1.orderStatus,
        default: 'inProgress'
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.CompleteOrder = (0, mongoose_1.model)('CompleteOrder', CompleteorderSchema);
