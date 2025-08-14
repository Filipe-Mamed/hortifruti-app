import { Request, Response } from "express";
import { prisma } from "../config/database";
import chalk from "chalk";
import { ZodError } from "zod";
import { productSchema } from "../validations/productValidation";
import { HttpStatus } from "../constants/httpStatus";

export class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const validationData = productSchema.parse(req.body);

      const existingProduct = await prisma.produto.findFirst({
        where: {
          nome: validationData.nome,
        },
      });
      if (existingProduct) {
        return res
          .status(HttpStatus.BAD_REQUEST_400)
          .json({ message: "Produto já criado" });
      }

      const newProduct = await prisma.produto.create({
        data: {
          nome: validationData.nome,
          preco: validationData.preco,
          estoque: validationData.estoque,
          categoriaId: validationData.categoriaId,
          usuarioId: req.usuarioId,
        },
      });

      return res.status(HttpStatus.CREATE_201).json(newProduct);
    } catch (error) {
      console.log(chalk.red(`Erro ao criar produto: ${error}`));
      if (error instanceof ZodError) {
        return res
          .status(HttpStatus.BAD_REQUEST_400)
          .json({ message: error.issues[0].message });
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao criar produto" });
    }
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await prisma.produto.findMany({
        where: {
          usuarioId: req.usuarioId,
        },
        include: {
          categoria: true,
        },
        orderBy: {
          criadoEm: "desc",
        },
      });
      return res.status(HttpStatus.OK_200).json(products);
    } catch (error) {
      console.log(chalk.red(`Erro ao buscar produtos: ${error}`));
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao buscar produtos" });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await prisma.produto.findUnique({
        where: {
          id: id,
          usuarioId: req.usuarioId
        },
      });
      if (!product) {
        return res
          .status(HttpStatus.NOT_FOUND_404)
          .json({ message: "Produto não encontrado" });
      }
      return res.status(HttpStatus.OK_200).json(product);
    } catch (error) {
      console.log(chalk.red(`Erro ao buscar produto pelo ID: ${error}`));
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao buscar produto" });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      // const { nome, preco, estoque, categoriaId } = req.body;
      const validationData = productSchema.parse(req.body);

      const existingProduct = await prisma.produto.findUnique({
        where: { id: id },
      });

      if (!existingProduct) {
        return res
          .status(HttpStatus.NOT_FOUND_404)
          .json({ message: "Produto não encontrado" });
      }

      const data = {
        nome: validationData.nome ?? existingProduct.nome,
        categoriaId: validationData.categoriaId ?? existingProduct.categoriaId,
        preco: validationData.preco ?? existingProduct.preco,
        estoque: validationData.estoque ?? existingProduct.estoque,
      };

      const product = await prisma.produto.update({
        where: {
          id: id,
        },
        data: data,
      });
      return res.status(HttpStatus.OK_200).json(product);
    } catch (error) {
      console.log(chalk.red(`Erro ao atualizar produto: ${error}`));
      if (error instanceof ZodError) {
        return res
          .status(HttpStatus.BAD_REQUEST_400)
          .json({ message: error.issues[0].message });
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao atualizar produto" });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await prisma.produto.delete({
        where: {
          id: id,
        },
      });
      return res.status(HttpStatus.OK_200).json(product);
    } catch (error) {
      console.log(chalk.red(`Erro ao deletar produto: ${error}`));
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Erro ao deletar produto" });
    }
  }
}
