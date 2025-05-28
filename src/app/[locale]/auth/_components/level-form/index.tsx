import { useState } from "react";

export default function LevelForm() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    "Rookie",
    "Beginner",
    "Intermediate",
    "Advance",
    "True Beast",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
          Your regular physical activity level ?
          </h1>
          <p className="text-gray-400">This helps us create Your personalized plan</p>
        </div>

        {/* Radio Group */}
        <div className="space-y-3">
          {options.map((option, index) => (
            <label
              key={index}
              className={`
                relative flex items-center justify-between w-80 h-12 px-4 py-2 rounded-3xl cursor-pointer transition-all duration-200 border-2
                ${
                  selectedOption === option
                    ? "border-customOrange text-customOrange"
                    : "border-customGreyWhite text-customGreyWhite hover:border-gray-500 hover:bg-gray-800/70"
                }
              `}
              onClick={() => setSelectedOption(option)}
            >
              <span className="text-base font-bold">{option}</span>

              {/* Custom Radio Button */}
              <div
                className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${
                  selectedOption === option
                    ? "border-customOrange bg-customOrange"
                    : "border-gray-400 bg-transparent"
                }
              `}
              >
                {selectedOption === option && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>

              {/* Hidden native radio input for accessibility */}
              <input
                type="radio"
                name="fitness-goal"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="absolute opacity-0 w-0 h-0"
              />
            </label>
          ))}
        </div>

        {/* Selected value display */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Selected:{" "}
            <span className="text-customOrange font-medium">
              {selectedOption}
            </span>
          </p>
        </div>

        {/* Action button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-customOrange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            onClick={() => alert(`Goal selected: ${selectedOption}`)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
