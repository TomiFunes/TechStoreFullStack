import type { NextFunction, Request, Response } from "express";

import { verifyToken } from "../utils/jwt";

export interface JwtPayload {
  userId: string;
}
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token) as {
      userId: string;
    };

    req.user = decoded;

    next();
  } catch {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};
