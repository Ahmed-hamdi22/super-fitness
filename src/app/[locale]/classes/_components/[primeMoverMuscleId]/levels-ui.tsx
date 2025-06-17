import { getLevelsByPrimeMover } from "@/lib/apis/auth/levels.api";
import { getAllExercies } from "@/lib/apis/exercies.api";
import type { LevelsResponse } from "@/lib/types/levels";
import { useQuery } from "@tanstack/react-query";
import { Play } from "lucide-react";
import { useState } from "react";

interface ExercisesPageProps {
  primeMoverMuscleId: string;
}

export default function ExercisesByLevel({primeMoverMuscleId}: ExercisesPageProps) {

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
  
  // Loading
  if (levelsLoading) {
    return <div className="text-center py-8">Levels are Loading.....</div>;
  }

  // Error
  if (levelsError) {
    return (
      <div className="text-center py-8 text-red-500">
        Error While Fetching Levels
      </div>
    );
  }

  return (
    <div className="bg-darkGray1 flex pt-5 gap-3">
      <div className="bg-darkGray1 rounded-3xl border-2 border-darkGray3 min-h-screen w-[409px] px-3 py-6">
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
                  ? "bg-customOrange rounded-3xl text-white"
                  : "text-lightGray2"
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>

        {/* Exercises */}
        {exercisesLoading ? (
          <div className="text-center py-8 text-white">
            Exercises are Loading....
          </div>
        ) : exercisesError ? (
          <div className="text-center py-8 text-red-500">
            Error While Fetching Exercises
          </div>
        ) : exercises?.exercises?.length ? (
          <div className="space-y-4">
            {exercises.exercises.map((exercise: Exercise) => (
              <div
                key={exercise._id}
                className="p-5 border-b-2 border-darkGray3 cursor-pointer"
                onClick={() => setSelectedExercise(exercise)}
              >
                <div className="flex gap-4">
                  <div className="flex justify-between items-center flex-1">
                    <div>
                      <h3 className="text-lg font-medium text-lightGray">
                        {exercise.exercise}
                      </h3>
                      <p className="text-sm font-normal text-lightGray leading-snug">
                        {exercise.short_youtube_demonstration}
                      </p>
                    </div>
                    <div className="bg-customOrange w-6 h-6 rounded-full flex justify-center  items-center">
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
      
      {/* Video section */}
      {selectedExercise && (
        <div className="relative w-full h-[400px]  flex  justify-center items-center rounded-3xl">
          <img
            src={`https://img.youtube.com/vi/${extractYoutubeID(
              selectedExercise.short_youtube_demonstration_link
            )}/hqdefault.jpg`}
            alt="Exercise Thumbnail"
            className="absolute  w-full h-full object-cover opacity-50 rounded-3xl"
          />
           
           {/* Youtube link */}
          <div className="relative text-center z-10">
            <a
              href={selectedExercise.short_youtube_demonstration_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-customOrange w-16 h-16 rounded-full text-white text-2xl "
            >

              {/* Play icon */}
              <Play />
            </a>

            {/* Exercise name */}
            <h2 className="text-white text-3xl font-bold mb-4">
              {selectedExercise.exercise}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
