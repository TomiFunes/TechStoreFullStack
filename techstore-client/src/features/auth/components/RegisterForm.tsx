import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { register as registerUser } from "../api/auth-api";
import { useState } from "react";

import {
  registerSchema,
  type RegisterFormData,
} from "../schemas/register-schema";

import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data.name, data.email, data.password);

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center">
        <div className="mb-6 flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/30">
          <span className="text-4xl font-bold text-white">✓</span>
        </div>

        <h2 className="text-4xl font-bold text-white">Welcome to TechStore</h2>

        <p className="mt-3 text-lg text-slate-400">
          Your account has been created successfully.
        </p>

        <p className="mt-1 text-slate-500">Redirecting to login...</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Nombre" {...register("name")} />

      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <Input placeholder="Email" {...register("email")} />

      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <Input
        type="password"
        placeholder="Contraseña"
        {...register("password")}
      />

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <Input
        type="password"
        placeholder="Confirmar contraseña"
        {...register("confirmPassword")}
      />

      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <Button type="submit">Crear cuenta</Button>
    </form>
  );
};
