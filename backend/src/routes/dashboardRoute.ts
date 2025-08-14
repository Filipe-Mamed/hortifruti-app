import express from "express";
import {DashboardController} from "../controllers/dashboardController"

const router = express.Router();

const dashboardController = new DashboardController()

router.get("/dashboard", dashboardController.getDashboardData);

export default router;
