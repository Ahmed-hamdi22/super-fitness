import { useState, useEffect, type ReactNode } from "react";
import { EmailContext } from "./context";

export const EmailProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>("");

  const [currentStep, setCurrentStep] = useState<number>(() => {
    const saved = sessionStorage.getItem("currentStep");
    return saved !== null ? Number(saved) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem("currentStep", String(currentStep));
  }, [currentStep]);

  return (
    <EmailContext.Provider value={{ email, setEmail, currentStep, setCurrentStep }}>
      {children}
    </EmailContext.Provider>
  );
};


