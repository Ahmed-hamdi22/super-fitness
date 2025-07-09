import CircularProgress from "@/components/common/circle-progress";
import Heading from "@/components/common/heading";
import AuthButton from "@/components/common/auth-button";
import { useState } from "react";
import { useTranslations } from "use-intl";
import { useRegistration } from "@/context/auth/register";
import { useRegister } from "@/hooks/auth/use-register";
import RadioForm from "../radio-form";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "@/components/common/error";

export default function LevelForm() {
  // Translations
  const t = useTranslations();

  // Navigation
  const navigate = useNavigate();

  // State
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Context
  const { formData, setFormData, setCurrentStep } = useRegistration();

  // Mutation
  const { register, isPending, error } = useRegister();

  // Variables
  const options = [
    { value: "level1", label: t("beginner") },
    { value: "level2", label: t("intermediate") },
    { value: "level3", label: t("advanced") },
    { value: "level4", label: t("expert") },
    { value: "level5", label: t("master") },
  ];

  // Functions
  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setFormData((prev) => ({ ...prev, activityLevel: value }));
  };

  const handleRedirect = () => {
    setCurrentStep(0);
    navigate("/register");
  };

  const handleSubmit = () => {
    register(formData, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  };

  return (
    <>
      {!error ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <div className="w-full max-w-md space-y-4">
            {/* Progressbar */}
            <CircularProgress step={6} />
            {/* Heading */}
            <div className="text-center ">
              <Heading headTitle={t("your-regular-physical-activity-level")} />
            </div>
            {/* Title */}
            <div className="text-center mb-8">
              <Heading discripton={t("this-helps-us-create-your-personalized-plan")} />
            </div>

            {/* Radio group */}
            <RadioForm options={options} selectedValue={selectedOption} onChange={handleSelect} />

            {/* Next button */}
            <div className="flex justify-center mt-8">
              <AuthButton
                label={t("next")}
                type="button"
                className="w-[343px]"
                onClick={handleSubmit}
                disabled={isPending || !formData.activityLevel || !selectedOption}
              />
            </div>
          </div>
        </div>
      ) : (
        // Error
        <ErrorComponent message={error?.message} onRedirect={handleRedirect} />
      )}
    </>
  );
}
