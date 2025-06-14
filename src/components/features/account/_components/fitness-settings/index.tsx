/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from "@/context/use-context";
import { getUserData } from "@/lib/apis/auth/get-user-data.api";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { FaArrowsRotate } from "react-icons/fa6";
import SettingsDialog from "./_components/settings-dialog";

export default function FitnessSettings() {
  // Translations
  const t = useTranslations();

  // States
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [weight, setWeight] = useState(0);
  const [fitnessData, setFitnessData] = useState<User | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSetting, setCurrentSetting] = useState<{
    type: "goal" | "level" | "weight";
    value: string;
  }>({ type: "goal", value: "" });

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

  const refreshData = () => {
    if (token) {
      getUserData(token).then((data) => {
        setFitnessData(data);
        setGoal(data.goal ?? "");
        setLevel(data.activityLevel ?? "");
        setWeight(data.weight ?? 0);
      });
    }
  };

  const handleSettingClick = (settingType: "goal" | "level" | "weight", currentValue: string) => {
    setCurrentSetting({ type: settingType, value: currentValue });
    setOpenDialog(true);
  };

  // Variables
  const topSettings = [
    { 
      title: t("your-goal"), 
      value: goal,
      type: "goal" as const,
      onClick: () => handleSettingClick("goal", goal)
    },
    { 
      title: t("level"), 
      value: level,
      type: "level" as const,
      onClick: () => handleSettingClick("level", level)
    },
    { 
      title: t("weight"), 
      value: weight,
      type: "weight" as const,
      onClick: () => handleSettingClick("weight", weight.toString())
    },
  ];

  console.log("Current value:", topSettings[0].value)

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
              onClick={() => handleSettingClick(setting.type, setting.value.toString())}
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
      <SettingsDialog 
        open={openDialog} 
        onOpenChange={setOpenDialog}
        settingType={currentSetting.type}
        currentValue={currentSetting.value}
        onRefresh={refreshData}
      />
    </div>
  );
}
