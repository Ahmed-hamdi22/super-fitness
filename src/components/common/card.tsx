import { useState } from "react";
import { useTranslations } from "use-intl";

type FoodCardProps = {
  title: string;
  image: string;
  description?: string;
  actionLabel?: string;
  actionIcon?: React.ReactNode;
  hideIcon?: React.ReactNode;
  className?: string;
  mode?: "Exploer";
  onClick?: () => void;
  onActionClick?: () => void;
};

export default function FoodCard({
  title,
  image,
  description,
  actionLabel,
  className,
  actionIcon,
  hideIcon,
  mode,
  onClick,
  onActionClick,
}: FoodCardProps) {
  // Translation
  const t = useTranslations();

  // Local state to control description toggle
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if the component is in "Explorer" mode
  const isExplorer = mode === "Exploer";

  // Handle button click
  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExplorer) {
      onActionClick?.();
    } else {
      setIsExpanded((prev) => !prev);
    }
  };

  // Determine which label to show based on state
  const currentLabel = isExplorer
    ? actionLabel
    : isExpanded
    ? t("hide")
    : actionLabel;

  // Determine which icon to show based on state
  const currentIcon = isExplorer
    ? actionIcon
    : isExpanded
    ? hideIcon
    : actionIcon;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={image} alt={title} className="w-full object-cover" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full backdrop-blur-3xl bg-white/30 px-6 py-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-black uppercase tracking-wide">
          {title}
        </h3>

        <div className="mt-2">
          <button
            onClick={handleActionClick}
            className="flex items-center gap-2"
          >
            {/* Action label */}
            <span className="text-sm font-semibold text-custom-orange">
              {currentLabel}
            </span>

            {/* Action icon */}
            <div className="w-7 h-7 rounded-full bg-custom-orange flex items-center justify-center">
              {currentIcon}
            </div>
          </button>

          {/* only shown if not in explorer mode */}
          {!isExplorer && isExpanded && description && (
            <p className="mt-2 text-sm text-white bg-black/60 p-2 rounded-md">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
