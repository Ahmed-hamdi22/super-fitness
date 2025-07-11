import { getLevelsByPrimeMover } from "@/lib/apis/levels.api";
import { getAllExercies } from "@/lib/apis/exercies.api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Card from "../card";
import VideoSection from "./video-ui";
import { Play } from "lucide-react";
import Icons from "./icons-ui";
import Header from "@/components/layout/header";
import WorkoutsLogo from "@/components/common/logo";
import { useTranslations } from "use-intl";
import TabFitness from "@/components/common/tab-transform";

type ExercisesPageProps = {
  primeMoverMuscleId: string;
};

export default function ExercisesByLevel({ primeMoverMuscleId }: ExercisesPageProps) {
  // Translation
  const t = useTranslations();

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
    if (!levels?.difficulty_levels?.length) return;

    const beginnerLevel = levels.difficulty_levels.find(
      (level) => level.name.toLowerCase() === "beginner",
    );

    if (beginnerLevel) {
      setSelectedLevel(beginnerLevel.id);
    } else {
      setSelectedLevel(levels.difficulty_levels[0].id);
    }
  }, [levels]);

  useEffect(() => {
    if (exercises?.exercises?.length) {
      setSelectedExercise(exercises.exercises[0]);
    }
  }, [exercises]);

  // Loading
  if (levelsLoading) {
    return <div className="text-center py-8">Levels are Loading.....</div>;
  }

  // Error
  if (levelsError) {
    return <div className="text-center py-8 text-red-500">Error While Fetching Levels</div>;
  }

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-16 py-5 dark:bg-dark-gray-900 dark:text-light-silver-300">
      {/* Header */}
      <Header />

      {/* Worksout logo */}
      <div className="flex flex-col justify-center items-center relative ">
        <div className=" absolute -top-2  flex justify-center pointer-events-none">
          <WorkoutsLogo text={t("about-us-title")} />
        </div>

        {/* Tabfitness nav */}
        <TabFitness />
      </div>

      <div className=" flex flex-col  lg:flex-row pt-5 gap-6 mb-5">
        {/* Exercises */}
        <div className=" rounded-3xl border-2 border-dark-gray-700 dark:border-soft-gray-500 w-full lg:w-[409px] px-3 py-6">
          {/* Levels */}
          <div className="flex flex-wrap gap-4 mb-4">
            {levels?.difficulty_levels?.map((level) => (
              <button
                key={level.id}
                onClick={() => {
                  setSelectedLevel(level.id);
                  setSelectedExercise(null);
                }}
                className={`p-3 font-semibold ${
                  selectedLevel === level.id
                    ? "bg-flame-orange-500 rounded-3xl text-white"
                    : "text-dark-gray-900 dark:text-soft-gray-500"
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
              {exercises?.exercises?.map((exercise: Exercise) => (
                <div
                  key={exercise._id}
                  className="p-5 border-b-2 border-dark-gray-700 dark:border-soft-gray-500 cursor-pointer"
                  onClick={() => setSelectedExercise(exercise)}
                >
                  <div className="flex gap-4">
                    <div className="flex justify-between items-center flex-1">
                      <div>
                        <h3 className="text-lg font-medium text-soft-gray-60">
                          {exercise.exercise}
                        </h3>
                        <p className="text-sm font-normal text-soft-gray-60 leading-snug">
                          {exercise.short_youtube_demonstration}
                        </p>
                      </div>
                      <div className=" bg-flame-orange-500 text-black w-8 h-8 p-1 rounded-full flex justify-center items-center">
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
    </div>
  );
}
