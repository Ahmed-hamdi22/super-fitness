import { useParams } from "react-router-dom";
import ExercisesByLevel from "./levels-ui";

export default function ExercisesPage() {
  const { primeMoverMuscleId } = useParams<{ primeMoverMuscleId: string }>();
  return (
    <div>
      <ExercisesByLevel primeMoverMuscleId={primeMoverMuscleId!} />
    </div>
  );
}
