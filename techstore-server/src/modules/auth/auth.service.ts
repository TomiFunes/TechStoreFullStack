import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt";

import { prisma } from "../../config/prisma";

export const loginUser = async (email: string, password: string) => {
  console.log("STEP 1");
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }
  console.log("STEP 2");

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }
  console.log("STEP 3");

  const token = generateToken({
    userId: user.id,
  });
  console.log("STEP 4");
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return user;
};
``;
