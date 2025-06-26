import { useState, type ReactNode } from "react";
import { TokenContext } from "./context";
import { useNavigate } from "react-router-dom";

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  // Navigation
  const navigate = useNavigate();

  // States
  const [token, setToken] = useState<string | null>(localStorage.getItem("token") || null);

  // Functions
  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Variables
  const value = {
    token,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
};
