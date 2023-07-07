"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    itemCode: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    flavor: {
        type: String,
        required: true,
    },
    netWeight: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);
