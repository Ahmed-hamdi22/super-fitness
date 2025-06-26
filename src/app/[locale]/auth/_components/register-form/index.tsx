import { useRegistration } from "@/context/auth/register";
import RegisterForm from "./_components/register-form";
import GoalForm from "../goal-form";
import LevelForm from "../level-form";
import AboutPage from "@/app/[locale]/about/page";

export default function RegisterPage() {
  const { currentStep } = useRegistration();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <RegisterForm />;
      // case 1:
      //   return <AboutPage />;
      case 1:
        return <GoalForm />;
      case 2:
        return <LevelForm />;
      // case 3:
      //   return <Step4Age />;
      // case 4:
      //   return <Step5Height />;
      // case 5:
      //   return <Step6Goal />;
      // case 6:
      //   return <Step7ActivityLevel />;
      default:
        return <RegisterForm />;
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Progress indicator */}

        {/* Steps */}
        {renderStep()}
      </div>
    </div>
  )
}
