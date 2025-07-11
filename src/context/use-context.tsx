import { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  token: string | null;
  email: string;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const value = {
    token,
    email,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
