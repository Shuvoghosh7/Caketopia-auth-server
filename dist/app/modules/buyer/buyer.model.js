"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buyer = void 0;
const mongoose_1 = require("mongoose");
const BuyerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: {
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
        },
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contactNo: {
        type: String,
        unique: true,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.Buyer = (0, mongoose_1.model)('Buyer', BuyerSchema);
