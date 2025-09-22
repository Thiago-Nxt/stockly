import z from "zod";

export const upsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .trim()
    .min(1, { message: "O nome do produto é obrigatório" }),
  price: z.number().min(0.1, { message: "O preço do produto é obrigatório" }),
  stock: z
    .number()
    .positive()
    .int()
    .min(0, { message: "A quantidade em estoque é obrigatória" }),
});

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;
