import { z } from "zod";

export const productSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(1, { error: "O nome é obrigatório" })
    .max(20, { error: "O nome deve ter no máximo 20 caracteres" })
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, {
      error: "O nome deve conter apenas letras",
    })
    .transform(
      (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    ),
  categoriaId: z.string().min(1, { error: "A categoria é obrigatório" }),
  preco: z.number().min(1, { error: "O preço é obrigatório" }),
  estoque: z.number().min(1, { error: "O estoque é obrigatório" }),
});
