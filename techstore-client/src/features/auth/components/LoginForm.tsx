import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginFormData } from "../schemas/login-schema";

import { Input } from "@/shared/components/ui/Input";
import { Button } from "@/shared/components/ui/Button";

import { useLoginMutation } from "../hooks/useLoginMutation";

export const LoginForm = () => {
  const loginMutation = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input type="email" placeholder="Email" {...register("email")} />

        {errors.email && (
          <p className="mt-2 text-sm font-medium text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {loginMutation.isError && (
        <p className="text-sm text-red-500">Error al iniciar sesión</p>
      )}

      <Button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        py-3
        font-semibold
        text-white
        shadow-lg
        shadow-blue-500/20
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-blue-500/40
        disabled:cursor-not-allowed
        disabled:opacity-50"
      >
        {loginMutation.isPending ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>
    </form>
  );
};
