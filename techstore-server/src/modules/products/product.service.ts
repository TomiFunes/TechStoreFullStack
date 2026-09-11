import { prisma } from "../../config/prisma";

export const getProducts = async () => {
  return prisma.product.findMany();
};

export const getProductById = async (id: string) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
};
