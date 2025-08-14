import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";
import { prismaConnection } from "../src/config/database";
import { session } from "./config/expressSession";
import passport from "./config/passport";
import routes from "./routes/Routes";

// Configuração de variáveis de ambientes
dotenv.config();

const app = express();

// Configuração do CORS conexão com frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Configuração do Express-Session
app.use(session);

// Configuração do Passport
app.use(passport.initialize());
app.use(passport.session());

// Configuração do .json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use(routes);

// Porta
const port = process.env.PORT;

// Conexão com o banco de dados
prismaConnection();

app.listen(port, () => {
  console.log(chalk.green(`🚀 Servidor rodando em http://localhost:${port}`));
});
