import { useParams } from "react-router-dom";
import ExercisesByLevel from "./Exercises-ui";


export default function ExercisesPage() {
  // Params
  const { primeMoverMuscleId } = useParams<{ primeMoverMuscleId: string }>();

  return (
    <div>
      {/* Exercise  */}
      <ExercisesByLevel primeMoverMuscleId={primeMoverMuscleId!} />
    </div>
  );
}
