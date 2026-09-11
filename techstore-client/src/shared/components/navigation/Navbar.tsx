import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/auth-store";

export const Navbar = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-white">
          TechStore
        </Link>

        <div className="flex gap-4">
          {user ? (
            <>
              <Link to="/profile" className="text-white">
                {user.name}
              </Link>

              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/products" className="text-white">
                Products
              </Link>
              <Link to="/login" className="text-white">
                Login
              </Link>

              <Link to="/register" className="text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
