import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/shared/components/layouts/MainLayout";

import { HomePage } from "@/features/products/pages/HomePage";
import { ProfilePage } from "@/features/auth/pages/ProfilePage";
import { ProductDetailPage } from "@/features/products/pages/ProductDetailPage";
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { ProductsPage } from "@/features/products/pages/ProductsPage";
import { CartPage } from "@/features/cart/pages/CartPage";
import { CheckoutPage } from "@/features/orders/pages/CheckoutPage";
import { OrderSuccessPage } from "@/features/orders/pages/OrderSuccessPage";
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
        path: "/products/:id",

        element: <ProductDetailPage />,
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
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order-success",
        element: (
          <ProtectedRoute>
            <OrderSuccessPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
