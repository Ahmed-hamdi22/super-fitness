import { createContext } from "react";

type EmailContextType = {
  email: string;
  setEmail: (email: string) => void;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const EmailContext = createContext<EmailContextType | undefined>(
  undefined
);