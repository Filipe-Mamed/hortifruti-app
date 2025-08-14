import { Request, Response } from "express";
import { prisma } from "../config/database";
import chalk from "chalk";
import { HttpStatus } from "../constants/httpStatus";

export class ReportController {
  async getLowStockProducts(req: Request, res: Response) {
    try {
      const limit = Number(req.query.limit) || 5;

      const products = await prisma.produto.findMany({
        where: {
          usuarioId: req.usuarioId,
          estoque: {
            lt: limit,
          },
        },
        include: {
          categoria: true,
        },
        orderBy: {
          estoque: "asc",
        },
      });

      const formattedData = products.map((product) => ({
        nome: product.nome,
        estoque: product.estoque,
        categoria: product.categoria.nome,
      }));

      return res.status(HttpStatus.OK_200).json(formattedData);
    } catch (error) {
      console.log(
        chalk.red(`Erro ao buscar produtos em estoque baixo: ${error}`)
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao buscar produtos em estoque baixo" });
    }
  }

  async getRecentProducts(req: Request, res: Response) {
    try {
      const days = Number(req.query.days) || 7;
      const dateLimit = new Date();
      dateLimit.setDate(dateLimit.getDate() - days);

      const product = await prisma.produto.findMany({
        where: {
          usuarioId: req.usuarioId,
          criadoEm: {
            gte: dateLimit,
          },
        },
        include: {
          categoria: true,
        },
        orderBy: {
          criadoEm: "desc",
        },
      });

      const formattedData = product.map((product) => ({
        nome: product.nome,
        criadoEm: product.criadoEm,
        categoria: product.categoria.nome,
      }));

      return res.status(HttpStatus.OK_200).json(formattedData);
    } catch (error) {
      console.log(chalk.red(`Erro ao buscar produtos recentes: ${error}`));
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).json({
        message: "Erro ao buscar produtos recentes",
      });
    }
  }
}
