"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { createProductSchema, CreateProductSchema } from "./schema";

export const createProduct = async (data: CreateProductSchema) => {
  createProductSchema.parse(data);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await db.product.create({
    data,
  });
  // revalidatePath("/products");
  revalidateTag("get-products");
};
