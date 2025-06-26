import { useRegistration } from "@/context/auth/register";
import RegisterForm from "./_components/register-form";
import GoalForm from "../goal-form";
import LevelForm from "../level-form";
import Slider from "@/components/common/slider";
import { SelectGender } from "@/components/common/select-gender";

export default function RegisterPage() {
  const { currentStep } = useRegistration();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <RegisterForm />;
      case 1:
        return <SelectGender/>;
      case 2:
        return <Slider        
        title="How Old Are You?"
        measure="Years old"
        min={20}
        max={100}
        initialValue={25}
        step={2}
        nextStep={3}
        windowSize={7} />;
      case 3:
        return <Slider
          title="What is your weight"
          measure="Kg"
          min={30}
          max={150}
          initialValue={40}
          step={3}
          nextStep={4}
          windowSize={7}
        />
      case 4:
        return <Slider
          title="What is your height?"
          measure="CM"
          min={30}
          max={200}
          initialValue={55}
          step={4}
          nextStep={5}
          windowSize={7}
        />
      case 5:
        return <GoalForm/>;
      case 6:
        return <LevelForm/>
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
