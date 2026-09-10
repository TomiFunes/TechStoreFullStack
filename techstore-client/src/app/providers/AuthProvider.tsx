import { useEffect } from "react";

import { useMeQuery } from "@/features/auth/hooks/useMeQuery";
import { useAuthStore } from "@/features/auth/store/auth-store";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const token = useAuthStore((state) => state.token);

  const setUser = useAuthStore((state) => state.setUser);

  const { data } = useMeQuery();

  useEffect(() => {
    if (token && data) {
      setUser(data);
    }
  }, [token, data, setUser]);

  return children;
};
