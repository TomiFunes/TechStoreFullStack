import type { Request, Response } from "express";

import { registerUser, loginUser } from "./auth.service";
import { prisma } from "../../config/prisma";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const result = await registerUser(name, email, password);

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Register error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  console.log("LOGIN HIT");

  try {
    const { email, password } = req.body;

    console.log(email);

    const result = await loginUser(email, password);

    console.log("LOGIN OK");

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(401).json({
      message: error instanceof Error ? error.message : "Login error",
    });
  }
};

export const getMe = async (req: Request, res: Response) => {
  const userId = req.user?.userId;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  res.json(user);
};
