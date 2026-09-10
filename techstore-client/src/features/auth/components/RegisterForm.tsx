import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterFormData,
} from "../schemas/register-schema";

import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

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
