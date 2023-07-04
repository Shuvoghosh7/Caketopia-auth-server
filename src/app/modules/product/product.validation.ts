import { z } from "zod";

const createProductZodSchema = z.object({
  body: z.object({
    imageUrl: z.string({
      required_error: 'Image Url is required',
    }),
    productName: z.string({
      required_error: 'Product Name is required',
    }),
    itemCode: z.string({
      required_error: 'Item Code is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    flavor: z.string({
      required_error: 'flavor is required',
    }),
    netWeight: z.string({
      required_error: 'Net Weight is required',
    }),
    category: z.string({
      required_error: 'category is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
  })
})
const updateProductZodSchema = z.object({
  body: z.object({
    imageUrl: z.string({
      required_error: 'Image Url is required',
    }).optional(),
    productName: z.string({
      required_error: 'Product Name is required',
    }).optional(),
    itemCode: z.string({
      required_error: 'Item Code is required',
    }).optional(),
    description: z.string({
      required_error: 'description is required',
    }).optional(),
    flavor: z.string({
      required_error: 'flavor is required',
    }).optional(),
    netWeight: z.string({
      required_error: 'Net Weight is required',
    }).optional(),
    category: z.string({
      required_error: 'category is required',
    }).optional(),
    price: z.number({
      required_error: 'price is required',
    }).optional(),
  })
})

export const ProductValidation = {
  createProductZodSchema,
  updateProductZodSchema
};
