import type { Request, Response } from "express";

import { getProducts, getProductById } from "./product.service";

export const findAllProducts = async (req: Request, res: Response) => {
  const products = await getProducts();

  res.json(products);
};

export const findProductById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const product = await getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(product);
};
