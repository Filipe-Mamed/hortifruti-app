import express from "express";
import { UserController } from "../controllers/userController";

import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

const userController = new UserController();

router.post("/registrar", userController.registerUser);
router.post("/conectar", userController.loginUser);
router.get("/sair", userController.logoutUser);
router.get("/perfil", authMiddleware, userController.getUserById);
router.delete("/perfil", authMiddleware, userController.deleteUser);

export default router;
