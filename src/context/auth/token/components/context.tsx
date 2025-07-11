import { createContext } from "react";

type TokenContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

export const TokenContext = createContext<TokenContextType | undefined>(
  undefined
);