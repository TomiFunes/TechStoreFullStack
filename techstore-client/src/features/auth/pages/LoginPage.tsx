import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <p className="mb-2 text-blue-500">Welcome Back</p>

          <h1 className="text-4xl font-extrabold text-white">Sign In</h1>

          <p className="mt-3 text-slate-400">Access your TechStore account</p>
        </div>

        <LoginForm />
        <div className="mt-8 text-center">
          <p className="text-slate-400">Don't have an account?</p>

          <Link
            to="/register"
            className="mt-2 inline-block text-blue-500 hover:text-blue-400"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};
