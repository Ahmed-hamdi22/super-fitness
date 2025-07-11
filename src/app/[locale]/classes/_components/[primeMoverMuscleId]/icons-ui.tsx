import { ArrowRight } from "lucide-react";
import { useTranslations } from "use-intl";

export default function Icons() {

   // Translations
    const t = useTranslations()
    
  return (
    <div className="flex items-center gap-8 ">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex items-center gap-4 pl-7">
          {/* Icon*/}
          <div className="bg-custom-orange-500 w-9 h-9 flex items-center justify-center rounded-full border-4  border-black dark:border-light-silver-300">
            <ArrowRight
              className="w-5 h-4 text-black dark:text-light-silver-300 "
              strokeWidth={2.5}
            />
          </div>

          {/* Text */}
          <p className="text-base font-bold text-black dark:text-light-silver-300">
            {t('expertly-designed-workout')}
          </p>
        </div>
      ))}
    </div>
  );
}
