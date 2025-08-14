import express from "express";
import { ReportController } from "../controllers/reportController";

const router = express.Router();

const reportController = new ReportController();

router.get("/relatorio/estoque-baixo", reportController.getLowStockProducts);
router.get("/relatorio/ultimos-produtos", reportController.getRecentProducts);

export default router;
