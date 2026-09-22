import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "@/features/cart/store/cart-store";
import { useAuthStore } from "@/features/auth/store/auth-store";

export const Navbar = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const items = useCartStore((state) => state.items);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 transition hover:text-blue-400"
        >
          TechStore
        </Link>

        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Link
                to="/products"
                className="text-slate-300 transition hover:text-white"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-2 text-slate-300 transition hover:text-white"
              >
                Cart
                <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              </Link>

              <Link
                to="/profile"
                className="text-slate-300 transition hover:text-white"
              >
                {user.name}
              </Link>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/products"
                className="text-slate-300 transition hover:text-white"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-2 text-slate-300 transition hover:text-white"
              >
                Cart
                <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              </Link>
              <Link
                to="/login"
                className="text-slate-300 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-slate-300 transition hover:text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
