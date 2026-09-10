import type { User } from "./user";

export interface AuthResponse {
  user: User;
  token: string;
}
