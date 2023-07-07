"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation = void 0;
const zod_1 = require("zod");
const createAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: "First name is required",
            }),
            lastName: zod_1.z.string({
                required_error: "Last name is required",
            }),
        }),
        password: zod_1.z.string({
            required_error: "password is required",
        }),
        gender: zod_1.z.string({
            required_error: "Gender is required",
        }),
        email: zod_1.z.string({
            required_error: "Email is required",
        }),
        contactNo: zod_1.z.string({
            required_error: "Contact number is required",
        }),
        presentAddress: zod_1.z.string({
            required_error: "Present address is required",
        }),
        permanentAddress: zod_1.z.string({
            required_error: "Permanent address is required",
        }),
        profileImage: zod_1.z.string().optional(),
    }),
});
exports.AdminValidation = {
    createAdminZodSchema,
};
