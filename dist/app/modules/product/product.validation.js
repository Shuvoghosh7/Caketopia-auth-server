"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        imageUrl: zod_1.z.string({
            required_error: 'Image Url is required',
        }),
        productName: zod_1.z.string({
            required_error: 'Product Name is required',
        }),
        itemCode: zod_1.z.string({
            required_error: 'Item Code is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        flavor: zod_1.z.string({
            required_error: 'flavor is required',
        }),
        netWeight: zod_1.z.string({
            required_error: 'Net Weight is required',
        }),
        category: zod_1.z.string({
            required_error: 'category is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
    })
});
const updateProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        imageUrl: zod_1.z.string({
            required_error: 'Image Url is required',
        }).optional(),
        productName: zod_1.z.string({
            required_error: 'Product Name is required',
        }).optional(),
        itemCode: zod_1.z.string({
            required_error: 'Item Code is required',
        }).optional(),
        description: zod_1.z.string({
            required_error: 'description is required',
        }).optional(),
        flavor: zod_1.z.string({
            required_error: 'flavor is required',
        }).optional(),
        netWeight: zod_1.z.string({
            required_error: 'Net Weight is required',
        }).optional(),
        category: zod_1.z.string({
            required_error: 'category is required',
        }).optional(),
        price: zod_1.z.number({
            required_error: 'price is required',
        }).optional(),
    })
});
exports.ProductValidation = {
    createProductZodSchema,
    updateProductZodSchema
};
