import type { User } from "./user";

export interface AuthState {
  user: User | null;
  token: string | null;

  isAuthenticated: boolean;

  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;

  logout: () => void;
}
