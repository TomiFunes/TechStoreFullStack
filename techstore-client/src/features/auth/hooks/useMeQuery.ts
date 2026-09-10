import { useQuery } from "@tanstack/react-query";

import { getMe } from "../api/auth-api";

export const useMeQuery = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });
};
