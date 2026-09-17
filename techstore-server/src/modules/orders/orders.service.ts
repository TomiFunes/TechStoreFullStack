import { prisma } from "../../config/prisma";

interface CreateOrderDTO {
  userId: string;
  total: number;
}

export const createOrder = async ({ userId, total }: CreateOrderDTO) => {
  return prisma.order.create({
    data: {
      total,
      userId,
    },
  });
};

export const getOrdersByUser = async (userId: string) => {
  return prisma.order.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
