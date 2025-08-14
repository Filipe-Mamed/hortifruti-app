import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

export const prisma = new PrismaClient();

// Apenas para ver ser a conexão foi bem-sucedida
export async function prismaConnection() {
  try {
    await prisma.$connect();
    console.log(chalk.green(`✅ Prisma conectado ao banco de dados!`));
  } catch (error) {
    console.log(
      chalk.red(`❌ Erro ao conectar com o banco de dados: ${error}`)
    );
  }
}
