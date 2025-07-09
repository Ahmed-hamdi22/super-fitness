import CircularProgress from "@/components/common/circle-progress";
import Heading from "@/components/common/heading";
import AuthButton from "@/components/common/auth-button";
import { useRegistration } from "@/context/auth/register";
import { useState } from "react";
import { useTranslations } from "use-intl";

export default function GoalForm() {
  // Translations
  const t = useTranslations();

  // State
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { setFormData, setCurrentStep } = useRegistration();

  // Variables
  const options = [
    t("gain-weight"),
    t("lose-weight"),
    t("get-fitter"),
    t("gain-more-flexible"),
    t("learn-the-basic"),
  ];

  const onSubmit = () => {
    setFormData((prev) => ({
      ...prev,
      goal: selectedOption,
    }));
    setCurrentStep(6);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-8">
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
        <div className="space-y-4 flex flex-col items-center">
          {options.map((option, index) => (
            <label
              key={index}
              className={`
                relative flex items-center justify-between w-80 h-12 px-4 py-2 rounded-3xl cursor-pointer transition-all duration-200 border-2
                ${
                  selectedOption === option
                    ? "border-flame-orange-400 text-flame-orange-500"
                    : "border-white text-white hover:border-gray-500 hover:bg-gray-800/70"
                }
              `}
              onClick={() => setSelectedOption(option)}
            >
              {/* Option text */}
              <span className="text-base font-bold">{option}</span>

              {/* Radio button */}
              <div
                className={`
                w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${
                  selectedOption === option
                    ? " border-gray-100 bg-transparent"
                    : "border-gray-400 bg-transparent"
                }
              `}
              >
                {/* Inner circle for selected option */}
                {selectedOption === option && (
                  <div className="w-2 h-2 rounded-full bg-flame-orange-500"></div>
                )}
              </div>
            </label>
          ))}
        </div>

        {/* NOTE: to be removed when merging */}
        {/* Selected value display */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Selected: <span className="text-flame-orange-500 font-medium">{selectedOption}</span>
          </p>
        </div>

        {/* Next button */}
        <div className="flex justify-center mt-8 w-full">
          <AuthButton label={t("next")} type="button" onClick={onSubmit} className="w-[343px]" />
        </div>
      </div>
    </div>
  );
}
