import "server-only";

import { db } from "@/app/_lib/prisma";

import { ProductStatusDTO } from "../product/get-products";

export interface MostSoldProductsDTO {
  productId: string;
  name: string;
  totalSold: number;
  status: ProductStatusDTO;
  price: number;
}
export const getMostSoldProducts = async (): Promise<MostSoldProductsDTO[]> => {
  const mostSoldProductsQuery = `
    SELECT "Product"."name", SUM("SaleProduct"."quantity") as "totalSold", "Product"."price", "Product"."stock", "Product"."id" as "productId"
    FROM "SaleProduct"
    JOIN "Product" ON "SaleProduct"."productId" = "Product"."id"
    GROUP BY "Product"."name", "Product"."price", "Product"."stock", "Product"."id"
    ORDER BY "totalSold" DESC
    LIMIT 5;
  `;

  const mostSoldProducts = await db.$queryRawUnsafe<
    {
      productId: string;
      name: string;
      totalSold: number;
      stock: number;
      price: number;
    }[]
  >(mostSoldProductsQuery);

  return mostSoldProducts.map((product) => ({
    ...product,
    totalSold: Number(product.totalSold),
    price: Number(product.price),
    status: product.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
  }));
};
