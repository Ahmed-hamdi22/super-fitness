import React, { useState, useRef, useEffect } from "react";
import CircularProgress from "./circle-progress";
import { useTranslations } from "use-intl";
import Heading from "./heading";
import AuthButton from "./auth-button";

type SliderProps = {
  title: string;
  step: number;
  range: number[];
  measure: string;
};

function Slider({ title, step, range, measure }: SliderProps) {
  // Translations
  const t = useTranslations();

  // State
  const [selected, setSelected] = useState<number>(25);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  //   Functions
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !range || range.length === 0) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const rangeSize = range[range.length - 1] - range[0];
    const newAge = range[0] + Math.round(percentage * rangeSize);
    setSelected(Math.max(range[0], Math.min(range[range.length - 1], newAge)));
  };

  const handleAgeClick = (age: number) => {
    setSelected(age);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  const getVisibleAges = (): number[] => {
    if (!range || range.length === 0) return [];

    const selectedIndex = range.indexOf(selected);
    // If selectedAge is not in range, find closest index
    const actualIndex =
      selectedIndex !== -1
        ? selectedIndex
        : range.findIndex((age) => age >= selected) !== -1
          ? range.findIndex((age) => age >= selected)
          : range.length - 1;

    const start = Math.max(0, actualIndex - 4);
    const end = Math.min(range.length, actualIndex + 5);
    return range.slice(start, end);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className=" backdrop-blur-sm rounded-3xl p-8 w-full max-w-md">
        {/* Progress indicator */}
        <CircularProgress step={step} />

        {/* Title */}
        <div className="text-center mb-8">
          <Heading question={title} />

          <Heading discripton={t("this-helps-us-create-your-personalized-plan")} />
        </div>

        {/* Age display */}
        <div className="text-center mb-2">
          <span className="text-[#FF4100] text-lg font-medium">{measure}</span>
        </div>

        {/* Age slider */}
        <div
          ref={containerRef}
          className="relative mb-8 py-6 cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Age numbers */}
          <div className="flex justify-center items-center space-x-3 mb-6">
            {getVisibleAges().map((age) => {
              const distance = Math.abs(age - selected);

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
                  key={age}
                  onClick={() => handleAgeClick(age)}
                  className={`
          ${textSize} ${fontWeight} ${textColor} 
          transition-all duration-300 ease-out
          hover:text-flame-orange-700
        `}
                >
                  {age}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-flame-orange-500 drop-shadow-sm"></div>
          </div>
        </div>

        {/* Next button */}
        <AuthButton
          className="w-full -mt-8  hover:bg-flame-orange-700"
          label={t("next")}
          type="button"
        />
      </div>
    </div>
  );
}

export default Slider;
