import { useRegistration } from "@/context/auth/register";
import RegisterForm from "./_components/register-form";
import GoalForm from "../goal-form";
import LevelForm from "../level-form";

export default function RegisterPage() {
  const { currentStep } = useRegistration();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <RegisterForm />;
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
      // default:
      //   return <Step1BasicInfo />;
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Step {currentStep + 1} of 7</span>
            <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / 7) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-flame-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
            />
          </div>
        </div>
        
        {renderStep()}
      </div>
    </div>
  )
}
