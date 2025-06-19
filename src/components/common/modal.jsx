import React from "react";

export default function modal() {
  return (
    <div className="bg-darkGray1 flex pt-5 gap-3">
      <div className="bg-darkGray1 rounded-3xl border-2 border-darkGray3 min-h-screen w-[409px] px-3 py-6">
        {/* Levels */}
        <div className="flex flex-wrap gap-4 mb-4">
          <button></button>
        </div>

        <div className="flex gap-4">
          <div className="flex justify-between items-center flex-1">
            <div>
              <h3 className="text-lg font-medium text-lightGray"></h3>
              <p className="text-sm font-normal text-lightGray leading-snug"></p>
            </div>
          </div>
        </div>
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-customOrange w-16 h-16 rounded-full text-white text-2xl "
            >
              {/* Play icon */}
              <Play />
            </a>

            <h2 className="text-white text-3xl font-bold mb-4"></h2>
          </div>
        </div>
      )}
    </div>
  );
}
