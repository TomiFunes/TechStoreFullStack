import { RegisterForm } from "../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-slate-950 p-6">
        <h1 className="mb-6 text-3xl font-bold text-white">Registro</h1>

        <RegisterForm />
      </div>
    </div>
  );
};
``;
