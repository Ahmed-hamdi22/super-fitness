import { useAuth } from "@/context/use-context";
import { getUserData } from "@/lib/apis/auth/get-user-data.api";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { FaArrowsRotate } from "react-icons/fa6";

export default function FitnessSettings() {
  // Translations
  const t = useTranslations();

  // States
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [weight, setWeight] = useState(0);
  const [fitnessData, setFitnessData] = useState<User | null>(null);

  // Functions
  const { token } = useAuth();
  useEffect(() => {
    if (token) {
      getUserData(token).then((data) => {
        setFitnessData(data);
        setGoal(data.goal ?? "");
        setLevel(data.activityLevel ?? "");
        setWeight(data.weight ?? 0);
      });
    }
  }, [token]);

  // Variables
  const topSettings = [
    { title: t("your-goal"), value: goal },
    { title: t("level"), value: level },
    { title: t("weight"), value: weight },
  ];

  return (
    <div>
      {/* Top Settings Row */}
      <div className="grid grid-cols-3 gap-4 font-baloo text-darkGray1 dark:text-white">
        {topSettings.map((setting, index) => (
          <div key={index} className="text-center">
            <h3 className=" text-3xl font-extrabold">{setting.title}</h3>
            <p className="text-base  underline underline-offset-2 mb-3">
              {t("tap-to-change")}
            </p>
            <button
              className="
              bg-customOrange w-60 h-12 rounded-2xl border 
              border-darkGray1 dark:border-white flex justify-between items-center
                px-4 capitalize font-bold text-base
              "
            >
              {setting.value}
              <FaArrowsRotate />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
