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
import { Link } from "react-router-dom";

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

        <h2 className="text-center text-5xl font-extrabold text-white">
          Welcome to TechStore
        </h2>

        <p className="mt-3 text-lg text-slate-400">
          Your account has been created successfully.
        </p>

        <p className="mt-1 text-slate-500">Redirecting to login...</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input placeholder="Name" {...register("name")} />

      {errors.name && (
        <p className="mt-2 text-sm font-medium text-red-400">
          {errors.name.message}
        </p>
      )}

      <Input placeholder="Email" {...register("email")} />

      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <Input type="password" placeholder="Password" {...register("password")} />

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <Input
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword")}
      />

      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <Button
        type="submit"
        className="
w-full
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
"
      >
        Create account
      </Button>
      <div className="pt-4 text-center">
        <p className="text-slate-400">Already have an account?</p>
        <Link
          to="/login"
          className="mt-2 inline-block text-blue-500 hover:text-blue-400"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
};
