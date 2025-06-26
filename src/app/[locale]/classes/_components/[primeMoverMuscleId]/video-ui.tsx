import { Play } from "lucide-react";

interface ExerciseVideoSectionProps {
  selectedExercise: Exercise;
  extractYoutubeID: (url: string) => string | null;
}

export default function VideoSection({
  selectedExercise,
  extractYoutubeID,
}: ExerciseVideoSectionProps) {
  if (!selectedExercise) return null;

  return (
    <div className="relative w-full h-[250px] md:h-[400px] flex justify-center items-center rounded-3xl overflow-hidden">
      {/* Image */}
      <img
        src={`https://img.youtube.com/vi/${extractYoutubeID(
          selectedExercise.short_youtube_demonstration_link
        )}/hqdefault.jpg`}
        alt="Exercise Thumbnail"
        className="absolute w-full h-full object-cover opacity-50"
      />
      {/* Video link */}
      <div className="relative text-center z-10 flex flex-col items-center">
        <a
          href={selectedExercise.short_youtube_demonstration_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center bg-custom-orange-500 w-16 h-16 rounded-full text-white text-2xl"
        >
          {/* Icon */}
          <Play />
        </a>

        {/* Exercise */}
        <h2 className="text-white text-3xl font-bold mb-4">{selectedExercise.exercise}</h2>
      </div>
    </div>
  );
}
