import { useAuthStore } from "../store/auth-store";
import { Link } from "react-router-dom";
export const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="relative mx-auto max-w-5xl px-6 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-md">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl font-bold text-white shadow-lg shadow-blue-500/30">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-4xl font-extrabold text-white">{user?.name}</h1>

          <p className="mt-2 text-slate-400">{user?.email}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <p className="text-sm text-slate-500">Account Role</p>

            <p className="mt-2 text-xl font-semibold text-white">
              {user?.role}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <p className="text-sm text-slate-500">Membership</p>

            <p className="mt-2 text-xl font-semibold text-green-400">Active</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/products"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800
"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};
