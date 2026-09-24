import { RegisterForm } from "../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <p className="mb-2 text-blue-500">Join TechStore</p>

          <h1 className="text-4xl font-extrabold text-white">Create Account</h1>

          <p className="mt-3 text-slate-400">Start shopping today</p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
};
