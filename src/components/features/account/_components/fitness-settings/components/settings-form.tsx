import { Button } from "@/components/ui/button";
import { useToken } from "@/context/auth/token";
import { editProfile } from "@/lib/apis/auth/edit-profile.api";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "use-intl";

type SettingFormProps = {
  settingType: "goal" | "level" | "weight";
  currentValue: string;
  onCancel: () => void;
  onRefresh: () => void;
};

const apiFieldMap = {
  goal: "goal",
  level: "activityLevel",
  weight: "weight",
};

export default function SettingForm({
  settingType,
  currentValue,
  onCancel,
  onRefresh,
}: SettingFormProps) {
  // Translations
  const t = useTranslations();

  // Context
  const { token } = useToken();

  // Form &validation
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      [apiFieldMap[settingType]]: settingType === "weight" ? Number(currentValue) : currentValue,
    },
  });

  // Variables
  const formConfig = {
    goal: {
      title: t("what-is-your-goal"),
      description: t("this-helps-us-create-your-personalized-plan"),
      options: [
        { value: "lose weight", label: t("lose-weight") },
        { value: "gain weight", label: t("gain-weight") },
        { value: "get fitter", label: t("get-fitter") },
        { value: "gain more flexible", label: t("gain-more-flexible") },
        { value: "learn the basic", label: t("learn-the-basic") },
      ],
    },
    level: {
      title: t("what-is-your-level"),
      description: t("this-helps-us-create-your-personalized-plan"),
      options: [
        { value: "level1", label: t("beginner") },
        { value: "level2", label: t("intermediate") },
        { value: "level3", label: t("advanced") },
        { value: "level4", label: t("expert") },
        { value: "level5", label: t("master") },
      ],
    },
    weight: {
      title: t("what-is-your-weight"),
      description: t("enter-your-current-weight"),
    },
  };

  // Functions
  const onSubmit = async (data: ProfileFields) => {
    try {
      if (!token) return;
      await editProfile(token, data);
      console.log("Submit Changes", data);
      onRefresh();
      onCancel();
    } catch (error) {
      console.error("Failed to update setting:", error);
    }
  };
  const selectedOption = watch(apiFieldMap[settingType]);

  // Effects
  useEffect(() => {
    const initialValue = settingType === "weight" ? Number(currentValue) : currentValue;
    setValue(apiFieldMap[settingType], initialValue);
  }, [currentValue, setValue, settingType]);

  return (
    // Form container
    <div className="flex flex-col items-center justify-center font-baloo">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center mb-8">
          {/* Title */}
          <h1 className="text-5xl text-white mb-2 font-extrabold capitalize">
            {formConfig[settingType].title}
          </h1>

          {/* Description */}
          <p className="text-white capitalize text-lg">{formConfig[settingType].description}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Dynamic form content */}
          {settingType !== "weight" ? (
            <div className="space-y-4 flex flex-col items-center">
              {formConfig[settingType].options?.map((option) => (
                // Label
                <label
                  key={option.value}
                  className={`
                    relative flex items-center justify-between w-80 h-12 px-4 py-2 rounded-3xl cursor-pointer transition-all duration-200 border-2
                    ${
                      selectedOption === option.value
                        ? "border-flame-orange-500 text-flame-orange-500"
                        : "border-white text-white hover:border-gray-500 hover:bg-gray-800/70"
                    }
                  `}
                >
                  {/* Input */}
                  <input
                    type="radio"
                    value={option.value}
                    {...register(apiFieldMap[settingType])}
                    className="absolute opacity-0"
                  />

                  {/* Option */}
                  <span className="text-base font-bold capitalize">{option.label}</span>

                  {/* Selected option */}
                  <div
                    className={`
                      w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200
                      ${
                        selectedOption === option.value
                          ? "border-gray-400 bg-transparent"
                          : "border-gray-400 bg-transparent"
                      }
                    `}
                  >
                    {selectedOption === option.value && (
                      <div className="w-2 h-2 rounded-full bg-flame-orange-500"></div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          ) : (
            // NOTE: to be replaced with original form
            <div className="flex justify-center">
              <input
                type="number"
                {...register(apiFieldMap.weight, { valueAsNumber: true })}
                className="w-80 h-12 px-4 rounded-3xl border-2 border-white text-white bg-transparent text-center text-lg font-bold"
                placeholder={t("enter-weight")}
              />
            </div>
          )}

          {/* Submit button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-flame-orange-500 hover:bg-orange-600 w-80 rounded-3xl text-base font-extrabold"
            >
              {t("save")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
