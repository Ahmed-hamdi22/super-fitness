import { useAuth } from "@/context/use-context";
import { getUserData } from "@/lib/apis/auth/get-user-data.api";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { FaArrowsRotate } from "react-icons/fa6";
import SettingsDialog from "./_components/settings-dialog";
import { Button } from "@/components/ui/button";

type SettingType = "goal" | "level" | "weight";

type SettingState = {
  type: SettingType;
  value: string;
};

export default function FitnessSettings() {
  // Translations
  const t = useTranslations();

  // States
  const [goal, setGoal] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [currentSetting, setCurrentSetting] = useState<SettingState>({
    type: "goal",
    value: "",
  });

  // Context
  const { token } = useAuth();

  // Functions
  const handleSettingClick = (settingType: "goal" | "level" | "weight", currentValue: string) => {
    setCurrentSetting({ type: settingType, value: currentValue });
    setOpenDialog(true);
  };

  // Effects
  useEffect(() => {
    if (token) {
      getUserData(token).then((data) => {
        setGoal(data.goal ?? "");
        setLevel(data.activityLevel ?? "");
        setWeight(data.weight ?? 0);
      });
    }
  }, [token]);

  const refreshData = () => {
    if (token) {
      getUserData(token).then((data) => {
        setGoal(data.goal ?? "");
        setLevel(data.activityLevel ?? "");
        setWeight(data.weight ?? 0);
      });
    }
  };

  // Variables
  const topSettings = [
    {
      title: t("your-goal"),
      value: goal,
      type: "goal" as const,
      onClick: () => handleSettingClick("goal", goal),
    },
    {
      title: t("level"),
      value: level,
      type: "level" as const,
      onClick: () => handleSettingClick("level", level),
    },
    {
      title: t("weight"),
      value: weight,
      type: "weight" as const,
      onClick: () => handleSettingClick("weight", weight.toString()),
    },
  ];

  return (
    <>
      {/* Top Settings Row */}
      <div className="grid grid-cols-3 gap-4 font-baloo text-darkGray1 dark:text-white">
        {topSettings.map((setting, index) => (
          <div key={index} className="text-center">
            {/* Title */}
            <h3 className=" text-3xl font-extrabold">{setting.title}</h3>

            {/* Tap to change setting button */}
            <Button
              onClick={() => handleSettingClick(setting.type, setting.value.toString())}
              className="text-base underline underline-offset-2 mb-3 bg-transparent text-darkGray1 dark:text-white hover:bg-transparent"
            >
              {t("tap-to-change")}
            </Button>

            {/* Change setting button */}
            <Button
              onClick={() => handleSettingClick(setting.type, setting.value.toString())}
              className="
                bg-customOrange w-60 h-12 rounded-2xl border 
                border-darkGray1 dark:border-white flex justify-between items-center
                px-4 capitalize font-bold text-base
                text-darkGray1 dark:text-white hover:bg-transparent
              "
            >
              {setting.value}
              <FaArrowsRotate />
            </Button>
          </div>
        ))}
      </div>

      {/* Setting Dialog(NOTE: to be common in the future) */}
      <SettingsDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        settingType={currentSetting.type}
        currentValue={currentSetting.value}
        onRefresh={refreshData}
      />
    </>
  );
}
