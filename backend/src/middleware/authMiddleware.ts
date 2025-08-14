import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../constants/httpStatus";
import chalk from "chalk";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res
      .status(HttpStatus.UNAUTHORIZED_401)
      .json({ message: "Não autorizado" });
  }
  if (!req.user || !(req.user as any).id) {
    console.log(chalk.red("Usuário logado não encontrado no req.user"));
    return res.status(HttpStatus.UNAUTHORIZED_401).end();
  }

  req.usuarioId = (req.user as any).id;
  next();
}
