"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { upsertProductSchema, UpsertProductSchema } from "./schema";

export const upsertProduct = async (data: UpsertProductSchema) => {
  upsertProductSchema.parse(data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await db.product.upsert({
    where: { id: data.id ?? "" },
    update: data,
    create: data,
  });
  revalidatePath("/products");
  //revalidateTag("get-products");
};
