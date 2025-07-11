import { useRegistration } from "@/context/auth/register";
import RegisterForm from "./_components/register-form";
import GoalForm from "./_components/goal-form";
import LevelForm from "./_components/level-form";
import Slider from "@/components/common/slider";
import { SelectGender } from "@/components/common/select-gender";
import { useTranslations } from "use-intl";

export default function RegisterPage() {
  const { currentStep } = useRegistration();
  const t = useTranslations()
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <RegisterForm />;
      case 1:
        return <SelectGender />;
      case 2:
        return (
          <Slider
            title={t('how-old-are-you-0')}
            measure={t('years-old-0')}
            min={20}
            max={100}
            initialValue={25}
            step={2}
            nextStep={3}
            windowSize={7}
            field="age"
          />
        );
      case 3:
        return (
          <Slider
            title={t('what-is-your-weight-0')}
            measure={t('kg-0')}
            min={30}
            max={150}
            initialValue={40}
            step={3}
            nextStep={4}
            windowSize={7}
            field="weight"
          />
        );
      case 4:
        return (
          <Slider
            title={t('what-is-your-height-0')}
            measure={t('cm-0')}
            min={30}
            max={200}
            initialValue={55}
            step={4}
            nextStep={5}
            windowSize={7}
            field="height"
          />
        );
      case 5:
        return <GoalForm />;
      case 6:
        return <LevelForm />;
      default:
        return <RegisterForm />;
    }
  };

  return (
    <div className="h-full flex items-center justify-center font-baloo">
      <div className="w-full max-w-md">
        {/* Progress indicator */}

        {/* Steps */}
        {renderStep()}
      </div>
    </div>
  );
}
