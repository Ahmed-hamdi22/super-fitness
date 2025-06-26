import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslations } from "use-intl";
import { useRandomMuscles } from "@/hooks/use-random-muscles";

type FormData = {
  muscleGroup: string;
};

export default function TabFitness() {
  // Translation
  const t = useTranslations();

  // Navigation
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get initial category
  const initialMuscle = searchParams.get("muscleGroup") || "";

  // Validation
  const { setValue, watch } = useForm<FormData>({
    defaultValues: {
      muscleGroup: initialMuscle,
    },
  });

  // Watch the muscleGroup value
  const muscleGroup = watch("muscleGroup");

  // Fetch muscle groups
  const { data, isLoading } = useRandomMuscles();

  // Handle button click
  const handleClick = (value: string) => {
    setValue("muscleGroup", value);

    // Create new urlsearchparams object
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("muscleGroup", value);
    } else {
      params.delete("muscleGroup");
    }

    // Update URL
    navigate(`?${params.toString()}`, {
      replace: true,
    });
  };

  //  Loading message
  if (isLoading) return <p>{t("loading")}</p>;

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center py-4">
      {/* All body  */}
      <button
        onClick={() => handleClick("")}
        className={`px-4 py-1 rounded-full text-sm font-medium capitalize ${
          muscleGroup === "" ? "bg-flame-orange-500 text-light-silver-300" : " text-dark-gray-800 dark:text-light-silver-300"
        }`}
      >
        {t("all-body")}
      </button>

      {/* All muscles */}
      {data?.slice(0, 6).map((muscle: Muscle) => (
        <button
          key={muscle._id}
          onClick={() => handleClick(muscle._id)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
            muscleGroup === muscle._id ? "bg-flame-orange-500 text-light-silver-300" : " text-dark-gray-800 dark:text-light-silver-300"
          }`}
        >
          {muscle.name}
        </button>
      ))}
    </div>
  );
}
