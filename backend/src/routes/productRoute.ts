import express from "express";
import { ProductController } from "../controllers/productController";

const router = express.Router();

const productController = new ProductController();

router.post("/produto", productController.createProduct);
router.get("/produto", productController.getAllProducts);
router.get("/produto/:id", productController.getProductById);
router.put("/produto/:id", productController.updateProduct);
router.delete("/produto/:id", productController.deleteProduct);

export default router;
