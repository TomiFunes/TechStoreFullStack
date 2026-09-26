import express from "express";
import cors from "cors";
import productRoutes from "./modules/products/product.routes";
import authRoutes from "./modules/auth/auth.routes";
import ordersRoutes from "./modules/orders/orders.routes";

export const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", ordersRoutes);
app.get("/", (_, res) => {
  res.json({
    message: "TechStore API",
  });
});
