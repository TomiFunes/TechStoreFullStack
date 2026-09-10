import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/auth-store";

type Props = {
  children: React.ReactNode;
  role: "ADMIN";
};

export const RoleGuard = ({ children, role }: Props) => {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};
