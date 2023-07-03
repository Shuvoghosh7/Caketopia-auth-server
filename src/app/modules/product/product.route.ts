import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';
import { ProductController } from './product.controller';

const router = express.Router();

router.post(
    '/create-product',
    validateRequest(ProductValidation.createProductZodSchema),
    ProductController.createProduct
  );
router.get('/', ProductController.getAllProduct);

export const productRoutes = router;