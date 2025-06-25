import { useState, type ReactNode } from "react";
import { EmailContext } from "./context";

export const EmailProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <EmailContext.Provider value={{ email, setEmail, currentStep, setCurrentStep }}>
      {children}
    </EmailContext.Provider>
  );
};
