import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductController } from "./product.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/users";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(ProductValidation.createProductZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ProductController.createProduct
);
router.get("/:id", ProductController.getSingleProduct);
router.patch(
  "/:id",
  validateRequest(ProductValidation.updateProductZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ProductController.updateProduct
);
router.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), ProductController.deleteProduct);
router.get("/", ProductController.getAllProduct);

export const productRoutes = router;
