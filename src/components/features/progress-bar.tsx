import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type ProgressCircle = {
  currentStep: number;
};
export default function ProgressCircle({ currentStep }: ProgressCircle) {
  const TotalSteps = 6;
  const percentage = (currentStep / TotalSteps) * 100;

  return (
    <div className="w-16 h-16">
      <CircularProgressbar
        value={percentage}
        text={`${currentStep}/${TotalSteps}`}
        styles={{
          path: { stroke: `#FF4100`, strokeLinecap: 'round', strokeWidth: 4,transition: 'stroke-dashoffset 0.5s ease 0s' },
          trail: { stroke: '#F3F4F6', strokeWidth: 4,},
          text: { fill: '#FFFFFF', fontSize: '24px', fontWeight: 'bold' },
        }}
      />
    </div>
  );
}