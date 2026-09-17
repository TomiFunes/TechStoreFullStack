import { Router } from "express";
import { createOrder } from "./orders.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { getMyOrders } from "./orders.controller";

const router = Router();

router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, getMyOrders);

export default router;
