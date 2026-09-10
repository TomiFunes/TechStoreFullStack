import express from "express";
import cors from "cors";
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

app.get("/", (_, res) => {
  res.json({
    message: "TechStore API",
  });
});
