import { useRandomMuscles } from "@/hooks/use-random-muscles";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const location = useLocation();

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

  // Check if user is inside /classes page
  const isInsideClassesPage = location.pathname.startsWith("/classes/");

  // Handle tab click
  const handleClick = (value: string) => {
    setValue("muscleGroup", value);

    if (isInsideClassesPage) {
      // If inside classes page
      if (value) {
        navigate(`/classes/${value}`);
      }
    } else {
      // If outside classes page
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("muscleGroup", value);
      } else {
        params.delete("muscleGroup");
      }
      // Update URL
      navigate(`?${params.toString()}`, { replace: true });
    }
  };

  //  Loading message
  if (isLoading) return <p>{t("loading")}</p>;

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center py-4">
      {/* Fullbody  */}
      <button
        onClick={() => handleClick("")}
        className={`px-4 py-1 rounded-full font-bold font-baloo text-xl capitalize ${
          muscleGroup === ""
            ? "bg-flame-orange-500 text-light-silver-300"
            : " text-dark-gray-800 dark:text-light-silver-300"
        }`}
      >
        {t("all-body")}
      </button>

      {/* All muscles */}
      {data?.slice(0, 5).map((muscle: Muscle) => (
        <button
          key={muscle._id}
          onClick={() => handleClick(muscle._id)}
          className={`px-4 py-1.5 rounded-full  font-bold font-baloo text-xl ${
            muscleGroup === muscle._id
              ? "bg-flame-orange-500 text-light-silver-300"
              : " text-dark-gray-800 dark:text-light-silver-300"
          }`}
        >
          {muscle.name}
        </button>
      ))}
    </div>
  );
}
