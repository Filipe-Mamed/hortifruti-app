import express from "express";
const router = express.Router();
import { CategoryController } from "../controllers/categoryController";

const categoryController = new CategoryController();

router.post("/categoria", categoryController.createCategory);
router.get("/categoria", categoryController.getAllCategories);
router.delete("/categoria/:id", categoryController.deleteCategory);

export default router;
