import { createContext, useState, type ReactNode } from "react";

type authContextType = {
  email: string;
  setEmail: (email: string) => void;
};

export const authContext = createContext<authContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");

  return (
    <authContext.Provider value={{ email, setEmail }}>
      {children}
    </authContext.Provider>
  );
};
