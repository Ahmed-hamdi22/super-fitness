import CircularProgress from "@/components/common/circle-progress";
import Heading from "@/components/common/heading";
import AuthButton from "@/components/common/auth-button";
import { useRegistration } from "@/context/auth/register";
import { useState } from "react";
import { useTranslations } from "use-intl";
import RadioForm from "../radio-form";

export default function GoalForm() {
  // Translations
  const t = useTranslations();

  // State
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { setFormData, setCurrentStep } = useRegistration();

  // Variables
  const options = [
    { value: "lose weight", label: t("lose-weight") },
    { value: "gain weight", label: t("gain-weight") },
    { value: "get fitter", label: t("get-fitter") },
    { value: "gain more flexible", label: t("gain-more-flexible") },
    { value: "learn the basic", label: t("learn-the-basic") },
  ];

  // Functions
  const onSubmit = () => {
    setFormData((prev) => ({
      ...prev,
      goal: selectedOption,
    }));
    setCurrentStep(6);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-md space-y-4">
        <CircularProgress step={5} />

        {/* Heading */}
        <div className="text-center ">
          <Heading headTitle={t("what-is-your-goal")} />
        </div>
        {/* Title */}
        <div className="text-center mb-8">
          <Heading discripton={t("this-helps-us-create-your-personalized-plan")} />
        </div>
        {/* Radio group */}
        <RadioForm options={options} selectedValue={selectedOption} onChange={setSelectedOption} />

        {/* Selected value display */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Selected: <span className="text-flame-orange-500 font-medium">{selectedOption}</span>
          </p>
        </div>

        {/* Next button */}
        <div className="flex justify-center mt-8 w-full">
          <AuthButton disabled={!selectedOption} label={t("next")} type="button" onClick={onSubmit} className="w-[343px]" />
        </div>
      </div>
    </div>
  );
}
