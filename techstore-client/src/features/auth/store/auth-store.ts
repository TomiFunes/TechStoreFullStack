import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { User } from "../types/user";
import type { AuthState } from "../types/auth-state";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      isAuthenticated: false,

      setUser: (user: User | null) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setToken: (token: string | null) =>
        set({
          token,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
