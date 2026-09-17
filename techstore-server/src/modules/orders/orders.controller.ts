import { Request, Response } from "express";
import * as ordersService from "./orders.service";

export const createOrder = async (req: Request, res: Response) => {
  const { total } = req.body;

  const userId = req.user!.userId;

  const order = await ordersService.createOrder({
    userId,
    total,
  });

  res.status(201).json(order);
};

export const getMyOrders = async (req: Request, res: Response) => {
  const orders = await ordersService.getOrdersByUser(req.user!.userId);

  res.json(orders);
};
