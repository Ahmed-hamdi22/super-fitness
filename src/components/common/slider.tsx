import { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import CircularProgress from "./circle-progress";
import { useTranslations } from "use-intl";
import { Button } from "../ui/button";
import { useRegistration } from "@/context/auth/register";

type SliderProps = {
  title: string;
  step: number;
  min: number;
  max: number;
  initialValue: number;
  windowSize: number;
  nextStep:number;
  measure: string;
};

const Slider = ({
  title,
  step,
  measure,
  min = 1,
  max = 80,
  nextStep,
  initialValue = 40,
  windowSize = 7,
}: SliderProps) => {
  const t = useTranslations();

      const { setCurrentStep } = useRegistration();

  
  const [selected, setSelected] = useState(initialValue);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartSelected = useRef(initialValue);
  const dragStartX = useRef(0);
  const numberWidth = 60; // Width per number (including margins) in pixels
  const half = Math.floor(windowSize / 2); // 3 for windowSize=7

  // Calculate the start index for the window
  const start = Math.max(min, Math.min(selected - half, max - windowSize + 1));

  // Generate displayed numbers
  const displayedNumbers = Array.from(
    { length: windowSize },
    (_, i) => start + i
  );

  // Handle click on a number
  const handleClick = (value: number) => {
    setSelected(value);
    setTranslateX(0); // Reset drag offset on click
  };

  // Handle swipe and drag gestures
  const handlers = useSwipeable({
    onSwipeStart: eventData => {
      setIsDragging(true);
      dragStartSelected.current = selected;
      dragStartX.current =
        eventData.event.clientX || eventData.event.touches[0].clientX;
    },
    onSwiping: eventData => {
      const currentX =
        eventData.event.clientX || eventData.event.touches[0].clientX;
      const deltaX = currentX - dragStartX.current;
      setTranslateX(deltaX);
      // Calculate new selected value based on drag distance
      const steps = Math.round(deltaX / numberWidth);
      const newSelected = Math.max(
        min,
        Math.min(max, dragStartSelected.current - steps)
      );
      setSelected(newSelected);
    },
    onSwiped: () => {
      setIsDragging(false);
      setTranslateX(0); // Snap back to aligned position
    },
    onSwipedLeft: () => {
      if (selected < max) setSelected(selected + 1);
    },
    onSwipedRight: () => {
      if (selected > min) setSelected(selected - 1);
    },
    trackMouse: true, // Enable mouse events for dragging
  });

  const handleSubmit = () => {
    console.log(selected)
    setCurrentStep(nextStep)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="rounded-3xl p-8 w-full max-w-md">
        {/* Progress indicator */}
        <CircularProgress step={step} />

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-300">
            {t("this-helps-us-create-your-personalized-plan")}
          </p>
        </div>

        <div className="text-center mb-2">
          <span className="text-[#FF4100] text-lg font-medium">{measure}</span>
        </div>
        <div
          className="relative mb-8 py-6 cursor-pointer select-none overflow-hidden"
          {...handlers}
        >
          <div
            className="flex justify-center items-center space-x-3 mb-6"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {displayedNumbers.map(num => {
              const distance = Math.abs(num - selected);
              let textSize = "text-sm";
              let textColor = "text-gray-500";
              let fontWeight = "font-medium";

              if (distance === 0) {
                textSize = "text-5xl";
                textColor = "text-flame-orange-500";
                fontWeight = "font-bold";
              } else if (distance === 1) {
                textSize = "text-3xl";
                textColor = "text-white";
                fontWeight = "font-semibold";
              } else if (distance === 2) {
                textSize = "text-xl";
                textColor = "text-gray-400";
              } else if (distance === 3) {
                textSize = "text-sm";
                textColor = "text-gray-500";
              }

              return (
                <button
                  key={num}
                  onClick={() => handleClick(num)}
                  className={`
                    ${textSize} ${fontWeight} ${textColor} 
                    transition-all duration-300 ease-out
                    hover:text-flame-orange-700
                  `}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-flame-orange-500 drop-shadow-sm"></div>
          </div>
        </div>

        {/* Next button */}
        <Button
          onClick={handleSubmit}
          className="bg-flame-orange-500 w-full rounded-full text-white block -mt-8 hover:bg-flame-orange-700"
        >
          {t("next")}
        </Button>
      </div>
    </div>
  );
};

export default Slider