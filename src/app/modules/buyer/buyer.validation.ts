import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({
        required_error: "First name is required",
      }),
      lastName: z.string({
        required_error: "Last name is required",
      }),
    }),
    password: z.string({
      required_error: "password is required",
    }),
    gender: z.string({
      required_error: "Gender is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
    contactNo: z.string({
      required_error: "Contact number is required",
    }),

    presentAddress: z.string({
      required_error: "Present address is required",
    }),

    permanentAddress: z.string({
      required_error: "Permanent address is required",
    }),
    profileImage: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
