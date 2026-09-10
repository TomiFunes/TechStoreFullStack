import { api } from "@/lib/axios";

import type { AuthResponse } from "../types/auth";

export const login = async (email: string, password: string) => {
  const response = await api.post<AuthResponse>("/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const response = await api.post("/auth/register", {
    name,
    email,
    password,
  });

  return response.data;
};
