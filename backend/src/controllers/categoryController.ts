import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "../config/database";
import chalk from "chalk";
import { ZodError } from "zod";
import { categorySchema } from "../validations/categoryValidation";
import { HttpStatus } from "../constants/httpStatus";

export class CategoryController {
  async createCategory(req: Request, res: Response) {
    try {
      const validationData = categorySchema.parse(req.body);

      // Verificar se a categoria já existe
      const existingCategory = await prisma.categoria.findFirst({
        where: {
          nome: validationData.nome,
        },
      });
      if (existingCategory) {
        return res
          .status(HttpStatus.BAD_REQUEST_400)
          .json({ message: "Categoria já criada" });
      }

      const newCategory = await prisma.categoria.create({
        data: {
          nome: validationData.nome,
          usuarioId: req.usuarioId,
        },
      });
      return res.status(HttpStatus.CREATE_201).json(newCategory);
    } catch (error) {
      console.log(chalk.red(`Erro ao criar categoria: ${error}`));
      if (error instanceof ZodError) {
        return res
          .status(HttpStatus.BAD_REQUEST_400)
          .json({ message: error.issues[0].message });
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao criar categoria" });
    }
  }

  async getAllCategories(req: Request, res: Response) {
    try {
      const category = await prisma.categoria.findMany({
        where: {
          usuarioId: req.usuarioId,
        },
        orderBy: {
          criadoEm: "desc",
        },
      });
      return res.status(HttpStatus.OK_200).json(category);
    } catch (error) {
      console.log(chalk.red(`Erro ao buscar categorias: ${error}`));
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao buscar categorias" });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await prisma.categoria.delete({
        where: {
          id: id,
        },
      });
      return res.status(HttpStatus.OK_200).json(category);
    } catch (error) {
      console.log(chalk.red(`Erro ao deletar categoria: ${error}`));
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2003"
      ) {
        return res.status(HttpStatus.BAD_REQUEST_400).json({
          message:
            "Não é possível deletar uma categoria que possui produtos associados",
        });
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao deletar categoria" });
    }
  }
}
