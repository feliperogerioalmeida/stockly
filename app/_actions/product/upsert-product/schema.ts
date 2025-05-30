import { z } from "zod";

export const UpsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, {
    message: "O nome do produto é obrigatório.",
  }),
  price: z.number().min(0.01, {
    message: "O preço do produto é obrigatório.",
  }),
  stock: z.coerce.number().int().min(0, {
    message: "A quantidade em estoque é obrigatória.",
  }),
});

export type UpsertProductSchema = z.infer<typeof UpsertProductSchema>;
