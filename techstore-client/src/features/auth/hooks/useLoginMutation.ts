import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { login } from "../api/auth-api";
import { useAuthStore } from "../store/auth-store";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),

    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);

      navigate("/");
    },
  });
};
``;
