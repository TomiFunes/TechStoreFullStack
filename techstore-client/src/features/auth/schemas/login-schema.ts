import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email inválido"),

  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
