import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { fetchMuscleGroups } from "@/lib/apis/auth/muscle-group.api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslations } from "use-intl";

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
  const { data, isLoading } = useQuery({
    queryKey: ["muscleGroups"],
    queryFn: fetchMuscleGroups,
  });

  // Handle button click
  const handleClick = (value: string) => {
    setValue("muscleGroup",value);

    // Create new URLSearchParams object
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
      {/* All Body Button */}
      <button
        onClick={() => handleClick("")}
        className={`px-4 py-1 rounded-full text-sm font-medium capitalize ${
          muscleGroup === ""
            ? "bg-flame-orange-500 text-white"
            : " text-darkGray1"
        }`}
      >
       {t("all-body")}
      </button>

      {/* Muscle Group Buttons */}
      {data?.slice(0, 6).map((mg: Muscle) => (
        <button
          key={mg._id}
          onClick={() => handleClick(mg._id)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
            muscleGroup === mg._id
              ? "bg-flame-orange-500 text-white"
              : " text-darkGray1"
          }`}
        >
          {mg.name}
        </button>
      ))}
    </div>
  );
}