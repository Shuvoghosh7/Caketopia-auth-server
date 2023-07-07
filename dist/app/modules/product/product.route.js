"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const product_controller_1 = require("./product.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const users_1 = require("../../../enums/users");
const router = express_1.default.Router();
router.post("/create-product", (0, validateRequest_1.default)(product_validation_1.ProductValidation.createProductZodSchema), (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN), product_controller_1.ProductController.createProduct);
router.get("/:id", product_controller_1.ProductController.getSingleProduct);
router.patch("/:id", (0, validateRequest_1.default)(product_validation_1.ProductValidation.updateProductZodSchema), (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN), product_controller_1.ProductController.updateProduct);
router.delete("/:id", (0, auth_1.default)(users_1.ENUM_USER_ROLE.ADMIN), product_controller_1.ProductController.deleteProduct);
router.get("/", product_controller_1.ProductController.getAllProduct);
exports.productRoutes = router;
