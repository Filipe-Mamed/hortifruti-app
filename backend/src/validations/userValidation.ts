import { z } from "zod";

export const userSchema = z
  .object({
    nome: z
      .string()
      .trim()
      .min(1, { error: "O nome é obrigatório" })
      .max(50, { error: "O nome deve ter no máximo 50 caracteres" }),
    email: z.email({ error: "O email é inválido" }),
    senha: z
      .string()
      .trim()
      .min(1, { error: "A senha é obrigatória" })
      .min(8, { error: "A senha deve ter no mínimo 8 caracteres" })
      .regex(/[A-Z]/, {
        error: "A senha deve conter pelo menos uma letra maiúscula",
      })
      .regex(/[0-9]/, {
        error: "A senha deve conter pelo menos um número",
      })
      .regex(/[\W_]/, {
        error: "A senha deve conter pelo menos um caractere especial",
      }),
    confirmarSenha: z
      .string()
      .min(1, { error: "A confirmação de senha é obrigatória" }),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    path: ["confirmarSenha"],
    error: "As senhas não conferem",
  });
