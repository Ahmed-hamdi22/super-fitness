import ArrowUpRight from "@/components/common/arrow-long-right";
import { useTranslations } from "use-intl";

export default function MuscleCard({ muscle }: { muscle: Muscle }) {
  // Translation
  const t = useTranslations();
  return (
    <div className="rounded-xl hover:scale-[1.02] transition bg-soft-gray-200 overflow-hidden">
      {/* Muscle image */}
      <img
        src={muscle.image}
        alt={muscle.name}
        className="w-full h-[200px] object-cover"
      />

      {/* Name  */}

      <div className="p-4 flex flex-col justify-between h-20">
        <h3 className="text-xl font-semibold uppercase items-start text-darkGray1 mb-2">
          {muscle.name}
        </h3>

        {/* Explore button and icon */}

        <div className="flex items-center gap-2 mb-2">
          <button className="text-lg font-medium capitalize font-baloo text-flame-orange-500 gap-1">
            {t("explore")}
          </button>
          <ArrowUpRight className="w-5 h-5 bg-flame-orange-500 text-dark-gray-1 rounded-full p-1" />
        </div>
      </div>
    </div>
  );
}
