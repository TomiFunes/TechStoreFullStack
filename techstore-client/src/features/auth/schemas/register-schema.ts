import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Mínimo 3 caracteres"),

    email: z.email("Email inválido"),

    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
