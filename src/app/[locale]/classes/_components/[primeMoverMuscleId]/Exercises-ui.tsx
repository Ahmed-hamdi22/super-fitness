import { getLevelsByPrimeMover } from "@/lib/apis/auth/levels.api";
import { getAllExercies } from "@/lib/apis/exercies.api";
import type { LevelsResponse } from "@/lib/types/levels";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Card from "../card";
import VideoSection from "./video-ui";
import { Play } from "lucide-react";
import Icons from "./icons-ui";


interface ExercisesPageProps {
  primeMoverMuscleId: string;
}

export default function ExercisesByLevel({ primeMoverMuscleId }: ExercisesPageProps) {
  // State
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  // Queries
  const {
    data: levels,
    isLoading: levelsLoading,
    error: levelsError,
  } = useQuery({
    queryKey: ["levels", primeMoverMuscleId],
    queryFn: () => getLevelsByPrimeMover(primeMoverMuscleId),
  });

  const {
    data: exercises,
    isLoading: exercisesLoading,
    error: exercisesError,
  } = useQuery({
    queryKey: ["exercises", primeMoverMuscleId, selectedLevel],
    queryFn: () => {
      if (!selectedLevel) return Promise.resolve(null);
      return getAllExercies(primeMoverMuscleId, selectedLevel);
    },
    enabled: !!selectedLevel,
  });

  // Function
  function extractYoutubeID(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  // Effect
  useEffect(() => {
    if (levels?.difficulty_levels?.length > 0) {
      setSelectedLevel(levels.difficulty_levels[0].id);
    }
  }, [levels]);

  // Loading
  if (levelsLoading) {
    return <div className="text-center py-8">Levels are Loading.....</div>;
  }

  // Error
  if (levelsError) {
    return <div className="text-center py-8 text-red-500">Error While Fetching Levels</div>;
  }

  return (
    <div className="bg-dark-gray-800 flex flex-col lg:flex-row pt-5 gap-6">
      {/* Exercises */}
      <div className="bg-dark-gray-800 rounded-3xl border-2 border-dark-gray-700 w-full lg:w-[409px] px-3 py-6">
        {/* Levels */}
        <div className="flex flex-wrap gap-4 mb-4">
          {levels?.difficulty_levels?.map((level: LevelsResponse) => (
            <button
              key={level.id}
              onClick={() => {
                setSelectedLevel(level.id);
                setSelectedExercise(null);
              }}
              className={`p-3 font-semibold ${
                selectedLevel === level.id
                  ? "bg-custom-orange-500 rounded-3xl text-white"
                  : "text-soft-gray-400"
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>

        {/* Exercises */}
        {exercisesLoading ? (
          <div className="text-center py-8 text-white">Exercises are Loading....</div>
        ) : exercisesError ? (
          <div className="text-center py-8 text-red-500">Error Fetching Exercises</div>
        ) : exercises?.exercises?.length ? (
          <div className="space-y-4">
            {exercises.exercises.map((exercise: Exercise) => (
              <div
                key={exercise._id}
                className="p-5 border-b-2 border-dark-gray-700 cursor-pointer"
                onClick={() => setSelectedExercise(exercise)}
              >
                <div className="flex gap-4">
                  <div className="flex justify-between items-center flex-1">
                    <div>
                      <h3 className="text-lg font-medium text-soft-gray-60">{exercise.exercise}</h3>
                      <p className="text-sm font-normal text-soft-gray-60 leading-snug">
                        {exercise.short_youtube_demonstration}
                      </p>
                    </div>
                    <div className="bg-custom-orange-500 w-6 h-6 rounded-full flex justify-center items-center">
                      <Play />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-white">No Exercises Found</div>
        )}
      </div>

      {/* Video */}
      <div className="flex-1 flex flex-col gap-5">
        {selectedExercise && (
          <VideoSection selectedExercise={selectedExercise} extractYoutubeID={extractYoutubeID} />
        )}

        {/* Icons */}
        <Icons />

        {/* Card */}
        <Card />
      </div>
    </div>
  );
}
