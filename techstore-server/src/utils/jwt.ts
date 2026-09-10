import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
}

export const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};
