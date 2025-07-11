import { useEmail } from "@/context/auth/email";
import ForgotPasswordForm from "./_components/forgot-password-form";
import VerifyOTPForm from "./_components/verify-otp-form";
import NewPasswordForm from "./_components/new-password-form";
import LoginForm from "../login-form";
import { useEffect } from "react";

export default function ForgotPasswordPage() {
  const { currentStep, setCurrentStep } = useEmail();

  useEffect(() => {
    setCurrentStep(0);
  }, [setCurrentStep]);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ForgotPasswordForm />;
      case 1:
        return <VerifyOTPForm />;
      case 2:
        return <NewPasswordForm />;
      default:
        return <LoginForm />;
    }
  };

  return <div className="font-baloo">{renderStep()}</div>;
}
