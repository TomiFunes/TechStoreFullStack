import express from "express";
import cors from "cors";
import productRoutes from "./modules/products/product.routes";
import authRoutes from "./modules/auth/auth.routes";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (_, res) => {
  res.json({
    message: "TechStore API",
  });
});
