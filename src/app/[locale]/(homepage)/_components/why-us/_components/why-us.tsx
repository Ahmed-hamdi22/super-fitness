import { useTranslations } from "use-intl";

export default function WhyUs() {
  // Translation
  const t = useTranslations();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-5 bg-light-silver-300 dark:bg-dark-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left section */}
          <div className="space-y-10">
            <div className="space-y-6 mb-10">
              {/* Text */}
              <h2 className="text-2xl md:text-5xl font-baloo uppercase text-dark-gray-800 dark:text-light-silver-300">
                {t("elevate-fitness-wite-the")}{" "}
                <span className="text-flame-orange-500">{t("best-way")}</span> {t("possible")}
              </h2>

              {/* Text */}
              <p className="text-rubik text-dark-gray-800 dark:text-light-silver-300 mr-28">
                {t(
                  "we-offer-a-fitness-journey-thats-tailored-to-your-goals-supported-by-professional-trainers-and-a-welcoming-community-whether-its-weight-loss-strength-building-or-overall-wellness-our-proven-methods",
                )}
              </p>
            </div>

            {/* Right section */}
            <div className="space-y-14 pt-12">
              {/* Point one */}
              <div className="flex items-start gap-4">
                <div className="bg-flame-orange-500 rounded-full min-w-16 h-16 flex items-center justify-center font-bold text-light-silver-300">
                  01
                </div>

                <div className="text-dark-gray-800 dark:text-light-silver-300">
                  {/* Text */}
                  <h4 className="font-inter font-bold text-xl mb-2">
                    {t("personalized-fitness-plans")}
                  </h4>

                  {/* Text */}
                  <p className="text-rubik ">
                    {t(
                      "we-tailor-every-workout-to-fit-your-unique-goals-and-fitness-level-ensuring-that-you-make-the-most-progress",
                    )}
                  </p>
                </div>
              </div>

              {/* Point two */}
              <div className="flex items-start gap-4">
                <div className="bg-flame-orange-500 rounded-full min-w-16 h-16 flex items-center justify-center font-bold text-light-silver-300">
                  02
                </div>

                <div className="text-dark-gray-800 dark:text-light-silver-300">
                  {/* Text */}
                  <h4 className="font-bold text-xl mb-2">{t("results-driven-focus")}</h4>

                  {/* Text */}
                  <p className="text-rubik">
                    {t(
                      "everything-we-do-is-designed-to-help-you-achieve-measurable-results-whether-youre-aiming-for-weight-loss",
                    )}
                  </p>
                </div>
              </div>

              {/* Point three */}
              <div className="flex items-start gap-4">
                <div className="bg-flame-orange-500 rounded-full min-w-16 h-16 flex items-center justify-center font-bold text-light-silver-300">
                  03
                </div>

                <div className="text-dark-gray-800 dark:text-light-silver-300">
                  {/* Text */}
                  <h4 className="font-bold text-xl mb-2">{t("state-of-the-art-equipment")}</h4>

                  {/* Text */}
                  <p className="text-rubik">
                    {t(
                      "we-provide-the-latest-in-gym-equipment-from-cardio-machines-to-free-weights-designed-to-support-every-type",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imag one */}
          <div className="grid grid-cols-2 gap-x-2 relative mb-5 ">
            <div>
              <img
                src="/src/assets/Figure [image-anime].png"
                alt="Fitness 1"
                className="w-full object-cover mt-3 sm:mt-0 rounded-lg"
              />
            </div>

            {/* Image two */}
            <div className="relative top-[5rem] sm:top-[6.2rem]">
              <img
                src="/src/assets/Image.png"
                alt="Fitness 2"
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Image three */}
            <div className=" relative top-2">
              <img
                src="/src/assets/Image (1).png"
                alt="Fitness 3"
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Image four */}
            <div>
              <img
                src="/src/assets/Figure [image-anime] (1).png"
                alt="Fitness 4"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
