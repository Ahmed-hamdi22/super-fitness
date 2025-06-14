import { useState } from "react";
import { useTranslations } from "use-intl";

export default function GoalForm() {
  // Translations
  const t = useTranslations();

  // State
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Variables
  const options = [
    t("gain-weight"),
    t("lose-weight"),
    t("get-fitter"),
    t("gain-more-flexible"),
    t("learn-the-basic"),
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
      <div className="w-full max-w-md space-y-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl text-white mb-2 font-extrabold capitalize">
            {t("what-is-your-goal")}
          </h1>
          <p className="text-white capitalize text-lg">
            {t("this-helps-us-create-your-personalized-plan")}
          </p>
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
                    ? "border-customOrange text-customOrange"
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
                    ? " border-gray-400 bg-transparent"
                    : "border-gray-400 bg-transparent"
                }
              `}
              >
                {/* Inner circle for selected option */}
                {selectedOption === option && (
                  <div className="w-2 h-2 rounded-full bg-customOrange"></div>
                )}
              </div>
            </label>
          ))}
        </div>

        {/* NOTE: to be removed when merging */}
        {/* Selected value display */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Selected:{" "}
            <span className="text-customOrange font-medium">
              {selectedOption}
            </span>
          </p>
        </div>

        {/* Next button */}
        <div className="flex justify-center mt-8">
          <button className="bg-customOrange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}
