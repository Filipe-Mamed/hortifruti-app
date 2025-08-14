import { z } from "zod";

export const categorySchema = z.object({
  nome: z
    .string()
    .trim()
    .min(1, {
      error: "O nome é obrigatório",
    })
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, {
      error: "O nome deve conter apenas letras",
    })
    .transform(
      (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    ),
});
