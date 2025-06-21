function CircularProgress({
  step,
}: {
  step: number;
}) {
  
  const totalSteps = 7
  const radius = 30;
  const stroke = 3;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = step / totalSteps;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="relative w-20 h-20 flex items-center justify-center mx-auto">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#FF4100"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`} 
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <span className="absolute text-white text-lg font-semibold">
        {step}/{totalSteps}
      </span>
    </div>
  );
}

export default CircularProgress;
