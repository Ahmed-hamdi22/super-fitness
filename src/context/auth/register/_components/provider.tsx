import { useState } from "react";
import { RegistrationContext } from "./context";

export const RegistrationProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<RegisterFields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "",
    height: 0,
    weight: 0,
    age: 0,
    goal: "",
    activityLevel: "",
  });
  
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <RegistrationContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep }}>
      {children}
    </RegistrationContext.Provider>
  );
};