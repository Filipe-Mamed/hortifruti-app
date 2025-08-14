import express from "express";
import productRoute from "./productRoute";
import categoryRoute from "./categoryRoute";
import dashboardRoute from "./dashboardRoute";
import reportRoute from "./reportRoute";
import userRoute from "./userRoute";

import { authMiddleware } from "../middleware/authMiddleware";

const routes = express.Router();

// Rotas públicas
routes.use("/api/auth", userRoute);

// Rotas privadas
routes.use("/api", authMiddleware, productRoute);
routes.use("/api", authMiddleware, categoryRoute);
routes.use("/api", authMiddleware, dashboardRoute);
routes.use("/api", authMiddleware, reportRoute);

export default routes;
