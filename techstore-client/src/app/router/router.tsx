import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/shared/components/layouts/MainLayout";

import { HomePage } from "@/features/products/pages/HomePage";
import { ProfilePage } from "@/features/auth/pages/ProfilePage";
2;
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { ProductsPage } from "@/features/products/pages/ProductsPage";
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile",

        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
