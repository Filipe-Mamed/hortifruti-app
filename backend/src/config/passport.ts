import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { prisma } from "./database";
import chalk from "chalk";

// Configurando a estratégia local do Passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "senha",
    },
    async (email, senha, done) => {
      try {
        const user = await prisma.usuario.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          return done(null, false, { message: "Usuário não encontrado" });
        }

        const isValid = await bcrypt.compare(senha, user.senha);
        if (!isValid) {
          return done(null, false, { message: "Email ou senha incorretos" });
        }

        return done(null, user);
      } catch (error) {
        console.log(chalk.red(`Erro ao fazer login: ${error}`));
        return done(error);
      }
    }
  )
);

// Serialize o usuário (guarda o id na sessão)
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// Deserialize o usuário (recupera o usuário pelo id da sessão)
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    done(null, user);
  } catch (error) {
    console.log(chalk.red(`Erro ao deserializar usuário: ${error}`));
    done(error);
  }
});

export default passport
