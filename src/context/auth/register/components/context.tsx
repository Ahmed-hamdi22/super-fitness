import { createContext } from "react";

type RegistrationContextType = {
  formData: RegisterFields;
  setFormData: React.Dispatch<React.SetStateAction<RegisterFields>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);