export type Option = { value: string; label: string };

export type RadioFormProps = {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function RadioForm({ options, selectedValue, onChange, className }: RadioFormProps) {
  return (
    <div className={`space-y-4 flex flex-col items-center ${className ?? ""}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`
            relative flex items-center justify-between w-80 h-12 px-4 py-2 rounded-3xl cursor-pointer transition-all duration-200 border-2
            ${
              selectedValue === option.value
                ? "border-flame-orange-500 text-flame-orange-500"
                : "border-white text-white hover:border-gray-500 hover:bg-gray-800/70"
            }
          `}
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="absolute opacity-0"
          />
          <span className="text-base font-bold capitalize">{option.label}</span>
          <div
            className={`
              w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200
              border-gray-400 bg-transparent
            `}
          >
            {selectedValue === option.value && (
              <div className="w-2 h-2 rounded-full bg-flame-orange-500"></div>
            )}
          </div>
        </label>
      ))}
    </div>
  );
}
