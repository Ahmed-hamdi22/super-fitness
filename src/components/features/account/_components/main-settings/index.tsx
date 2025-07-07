import { useState } from "react";
import { MdLanguage, MdOutlinePublishedWithChanges, MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { HiOutlineCog } from "react-icons/hi";
import { BsShieldExclamation } from "react-icons/bs";
import { useTranslations } from "use-intl";
import { useLogout } from "@/hooks/auth/use-logout";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme";
import { IoArrowForwardCircleOutline, IoHelpBuoy } from "react-icons/io5";
import SettingsDialog from "./components/main-settings-dialog";
import { useLocale } from "@/i18n/provider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MainSettings() {
  // Translations
  const t = useTranslations();

  // Navigation
  const navigate = useNavigate();

  // Context
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme, isDark } = useTheme();

  // States
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  // Hooks
  const { logout } = useLogout();

  // Functions
  const handleLogout = () => {
    logout();
  };

  const handleChangePassword = () => {
    navigate("/change-password");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  // Variables
  const menuItems = [
    {
      icon: (
        <MdOutlinePublishedWithChanges
          className="text-flame-orange-500"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: t("change-password"),
      hasValue: false,
      onClick: handleChangePassword
    },
    {
      icon: (
        <MdLanguage className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ),
      title: t("select-language"),
      value: locale === "en" ? "English" : "العربية",
      hasValue: true,
      onClick: () => setLocale(locale === "en" ? "ar" : "en"),
    },
    {
      icon: (
        <div className="relative w-6 h-6">
          {/* Sun/Moon container */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Sun */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                y: isDark ? 24 : 0,
                opacity: isDark ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <MdSunny
                className="text-flame-orange-500"
                style={{ width: "24px", height: "24px" }}
              />
            </motion.div>

            {/* Moon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                y: isDark ? 0 : -24,
                opacity: isDark ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaMoon className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
            </motion.div>
          </div>

          {/* Horizon line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-flame-orange-500"
            style={{ top: "50%" }}
            animate={{
              scaleX: isDark ? 0 : 1,
              opacity: isDark ? 0 : 0.7,
            }}
            transition={{ delay: isDark ? 0 : 0.2 }}
          />
        </div>
      ),
      title: t("mood"),
      hasValue: true,
      value: theme,
      toggle: isDark,
      onClick: toggleTheme,
      isThemeToggle: true,
    },
    {
      icon: (
        <HiOutlineCog className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ),
      title: t("settings"),
      onClick: handleSettings
    },
    {
      icon: (
        <BsShieldExclamation
          className="text-flame-orange-500"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: t("privacy-policy"),
    },
    {
      icon: (
        <IoHelpBuoy className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ),
      title: t("help"),
    },
  ];

  return (
    <>
      <div className="font-baloo flex flex-col items-center">
        {/* Menu items grid */}
        <div className="grid grid-cols-3 gap-4 mt-8 mb-4">
          {menuItems.map((item, index) => (
            // Buttons of menu items
            <Button
              key={index}
              className="bg-transparent border border-dark-gray-800 dark:border-light-silver-300 rounded-2xl w-52 h-40 transition-colors group hover:bg-transparent"
              onClick={item.onClick}
            >
              {/* Buttons container */}
              <div className="flex flex-col items-center text-center">
                {/* Icon and title container */}
                <div className="w-25 h-16 flex flex-col justify-center items-center text-lg font-semibold">
                  {/* Icon */}
                  <div>{item.icon}</div>

                  {/* Title */}
                  <span className="text-dark-gray-800 dark:text-light-silver-300">
                    {item.title}
                  </span>

                  {/* If item has a value */}
                  {item.hasValue && (
                    <span className="text-dark-gray-800 dark:text-light-silver-300">
                      (<span className="text-flame-orange-500 capitalize">{item.value}</span>)
                    </span>
                  )}
                </div>

                {/* If item has a toggle button */}
                {item.toggle !== undefined && (
                  <div className="mt-2">
                    <div
                      className={`w-8 h-5 rounded-full flex justify-start items-center ${item.toggle ? "bg-flame-orange-500" : "bg-dark-gray-900"} relative transition-colors`}
                    >
                      <div
                        className={`w-4 h-4 bg-light-silver-300 rounded-full absolute transition-transform ${item.toggle ? "translate-x-3 rtl:-translate-x-3" : "translate-x-0.5 rtl:-translate-x-0.5"}`}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </Button>
          ))}
        </div>

        {/* Logout button */}
        <Button
          className="bg-transparent border border-dark-gray-800 dark:border-light-silver-300 rounded-2xl w-52 h-40 transition-colors group hover:bg-transparent"
          onClick={handleLogout}
        >
          {/* Buttons container */}
          <div className="flex flex-col items-center text-center">
            {/* Icon and title container */}
            <div className="w-25 h-16 flex flex-col justify-center items-center text-lg font-semibold">
              {/* Icon */}
              <span>
                <IoArrowForwardCircleOutline
                  className="text-flame-orange-500"
                  style={{ width: "24px", height: "24px" }}
                />
              </span>

              {/* Title */}
              <span className="text-dark-gray-800 dark:text-light-silver-300">{t("logout")}</span>
            </div>
          </div>
        </Button>
      </div>

      <SettingsDialog open={openDialog} onOpenChange={setOpenDialog} />
    </>
  );
}
