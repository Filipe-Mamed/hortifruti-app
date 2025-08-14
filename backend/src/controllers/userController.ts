import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/database";
import bcrypt from "bcrypt";
import passport from "../config/passport";
import chalk from "chalk";
import { ZodError } from "zod";
import { userSchema } from "../validations/userValidation";
import { HttpStatus } from "../constants/httpStatus";

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const validationData = userSchema.parse(req.body);

      const existingUser = await prisma.usuario.findFirst({
        where: {
          email: validationData.email,
        },
      });
      if (existingUser) {
        return res
          .status(HttpStatus.BAD_REQUEST_400)
          .json({ message: "Usuário já existente" });
      }

      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(validationData.senha, saltRounds);

      const newUser = await prisma.usuario.create({
        data: {
          nome: validationData.nome,
          email: validationData.email,
          senha: hashedPassword,
        },
      });

      req.logIn(newUser, (err) => {
        if (err) {
          console.log(chalk.red(`Erro ao ser registrar e ser logado: ${err}`));
          return res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).end();
        }
        return res.status(HttpStatus.CREATE_201).json(newUser);
      });
    } catch (error) {
      console.log(chalk.red(`Erro ao ser registrar: ${error}`));
      if (error instanceof ZodError) {
        return res
          .status(HttpStatus.BAD_REQUEST_400)
          .json({ message: error.issues[0].message });
      }
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).json({
        message: "Erro ao ser registrar",
      });
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        console.log(chalk.red(`Erro ao fazer login: ${err}`));
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).json({
          message:
            "Erro interno no servidor. Por favor, tente novamente mais tarde",
        });
      }
      if (!user) {
        console.log(chalk.red(`Erro ao fazer login: ${info.message}`));
        return res.status(HttpStatus.BAD_REQUEST_400).json({
          message: "Email ou senha incorretos",
        });
      }
      req.logIn(user, (err) => {
        if (err) {
          console.log(chalk.red(`Erro ao fazer login: ${err}`));
          return res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).json({
            message:
              "Erro interno no servidor. Por favor, tente novamente mais tarde",
          });
        }
        return res.status(HttpStatus.OK_200).json(user);
      });
    })(req, res, next);
  }

  async logoutUser(req: Request, res: Response) {
    req.logout((err) => {
      if (err) {
        console.log(chalk.red(`Erro ao fazer logout: ${err}`));
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).json({
          message: "Erro ao ser deslogar, tente novamente mais tarde",
        });
      }
      req.session.destroy((err) => {
        if (err) {
          console.log(chalk.red(`Erro ao destruir sessão: ${err}`));
        }
        res.clearCookie("Cookie.Session");
        return res.status(HttpStatus.OK_200).end();
      });
    });
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await prisma.usuario.findUnique({
        where: {
          id: req.usuarioId,
        },
        select: {
          nome: true,
          email: true,
          criadoEm: true,
        },
      });
      if (!user) {
        return res.status(HttpStatus.NOT_FOUND_404).json({
          message: "Perfil não encontrado",
        });
      }
      return res.status(HttpStatus.OK_200).json(user);
    } catch (error) {
      console.log(chalk.red(`Erro ao buscar perfil: ${error}`));
      res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).json({
        message: "Erro ao buscar perfil",
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await prisma.usuario.delete({
        where: {
          id: req.usuarioId,
        },
      });

      req.session.destroy((err) => {
        if (err) {
          console.log(
            chalk.red(`Erro ao destruir sessão após exclusão: ${err}`)
          );
          return res.status(HttpStatus.BAD_REQUEST_400).end();
        }
        res.clearCookie("Cookie.Session");
        return res.status(HttpStatus.OK_200).json(user);
      });
    } catch (error) {
      console.log(chalk.red(`Erro ao excluir perfil: ${error}`));
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR_500).json({
        message:
          "Erro interno no servidor. Por favor, tente novamente mais tarde",
      });
    }
  }
}
