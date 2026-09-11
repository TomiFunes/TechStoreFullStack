import { Router } from "express";

import { findAllProducts, findProductById } from "./product.controller";

const router = Router();

router.get("/", findAllProducts);

router.get("/:id", findProductById);

export default router;
