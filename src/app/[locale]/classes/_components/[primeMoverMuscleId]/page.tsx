import { useParams } from "react-router-dom";
import ExercisesByLevel from "./exercises-ui";

export default function ExercisesPage() {
  // Params
  const { primeMoverMuscleId } = useParams<{ primeMoverMuscleId: string }>();
  console.log("primeMoverMuscleId:", primeMoverMuscleId);

  return (
    <div>
      {/* Exercise  */}
      <ExercisesByLevel primeMoverMuscleId={primeMoverMuscleId!} />
    </div>
  );
}
