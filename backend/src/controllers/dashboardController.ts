import { Request, Response } from "express";
import { prisma } from "../config/database";
import chalk from "chalk";
import { HttpStatus } from "../constants/httpStatus";

export class DashboardController {
  async getDashboardData(req: Request, res: Response) {
    try {
      const categoriesWithCount = await prisma.categoria.findMany({
        where:{
          usuarioId: req.usuarioId
        },
        include: {
          _count: {
            select: {
              produtos: true,
            },
          },
        },
      });

      const formattedData = categoriesWithCount.map((category) => ({
        nome: category.nome,
        quantidade: category._count.produtos,
      }));

      return res.status(HttpStatus.OK_200).json(formattedData);
    } catch (error) {
      console.log(chalk.red(`Erro ao buscar dados do dashboard: ${error}`));
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao buscar dados do dashboard" });
    }
  }
}
