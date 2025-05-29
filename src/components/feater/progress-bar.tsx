
// import { Progress } from "@radix-ui/react-progress";

// type ProgressCircleProps = {
//   currentStep: number;
// };

// const ToaltSteps = 6; 
// export default function ProgressCircle({ currentStep }: ProgressCircleProps) {
//   const percentage = (currentStep / ToaltSteps) * 100;

//   return (
//     <div className="relative w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center">
//       <div className="">
//         <Progress 
//           value={percentage} 
//           className="h-full w-full rounded-full transform -rotate-90"
//         />
//       </div>
      
//       <div className="relative z-10 flex flex-col items-center justify-center">
//         <span className="text-gray font-bold text-lg"> {currentStep}/{ToaltSteps}</span>
//       </div>
//     </div>
//   );
// }


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type ProgressCircle = {
  currentStep: number;
};

const TotalSteps = 6; 
export default function ProgressCircle({ currentStep }: ProgressCircle) {
  const percentage = (currentStep / TotalSteps) ;

  return (
    <div className="w-16 h-16">
      <CircularProgressbar
        value={percentage}
        text={`${currentStep}/${TotalSteps}`}
        styles={{
          path: {
            stroke: `#F97316`, 
            strokeLinecap: 'round',
          },
          trail: {
            stroke: '#F3F4F6', 
          },
          text: {
            fill: '#111827', 
            fontSize: '24px',
            fontWeight: 'bold',
          },
        }}
        strokeWidth={10} 
              />
    </div>
  );
}