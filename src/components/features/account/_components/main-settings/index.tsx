import { useContext } from "react";
import {
  MdLanguage,
  MdOutlinePublishedWithChanges,
  MdSunny,
} from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { GiCogLock } from "react-icons/gi";
import { BsShieldExclamation } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useTranslations } from "use-intl";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/use-context";
import { logout as logoutApi } from "@/lib/apis/auth/logout.api";
import { ThemeContext } from "@/context/components/theme/context";
import { LanguageContext } from "@/context/components/language/context";

export default function MainSettings() {
  // Translations
  const t = useTranslations();

  // States
  const { lang, toggleLang } = useContext(LanguageContext);
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  // Functions
  const { token, logout: logoutContext } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      if (token) {
        await logoutApi(token);
      }
    } catch (error) {
      // Optionally handle error (e.g., show a toast)
    } finally {
      logoutContext(); // Clear auth state and redirect
      navigate("/login"); // Redirect to login page
    }
  };

  // Variables
  const menuItems = [
    {
      icon: (
        <MdOutlinePublishedWithChanges className="text-customOrange text-2xl" />
      ),
      title: t("change-password"),
      hasValue: false,
    },
    {
      icon: <MdLanguage className="text-customOrange text-2xl" />,
      title: t("select-language"),
      value: lang === "en" ? "English" : "العربية",
      hasValue: true,
      onClick: toggleLang,
    },
    {
      icon: isDark ? (
        <FaMoon className="text-customOrange text-2xl" />
      ) : (
        <MdSunny className="text-customOrange text-2xl" />
      ),
      title: t("mood"),
      hasValue: true,
      value: theme,
      toggle: isDark,
      onClick: toggleTheme,
    },
    {
      icon: <GiCogLock className="text-customOrange text-2xl" />,
      title: t("security"),
    },
    {
      icon: <BsShieldExclamation className="text-customOrange text-2xl" />,
      title: t("privacy-policy"),
    },
    {
      icon: <IoMdHelpBuoy className="text-customOrange text-2xl" />,
      title: t("help"),
    },
    {
      icon: (
        <IoArrowForwardCircleOutline className="text-customOrange text-2xl" />
      ),
      title: t("logout"),
      onClick: handleLogout,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-8 font-baloo">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="bg-transparent border border-darkGray1 dark:border-white rounded-2xl w-52 h-40 transition-colors group"
          onClick={item.onClick}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-25 h-16 flex flex-col justify-center items-center text-lg font-semibold">
              <span>{item.icon}</span>
              <span className="text-darkGray1 dark:text-white">
                {item.title}
              </span>
              {item.hasValue && (
                <span className="text-darkGray1 dark:text-white">
                  (
                  <span className="text-customOrange capitalize">
                    {item.value}
                  </span>
                  )
                </span>
              )}
            </div>
            {item.toggle !== undefined && (
              <div className="mt-2">
                <div
                  className={`w-8 h-5 rounded-full flex justify-start items-center ${item.toggle ? "bg-customOrange" : "bg-darkGray1"} relative transition-colors`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute transition-transform ${item.toggle ? "translate-x-3" : "translate-x-0.5"}`}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

/**
 * 
 * font-family: Baloo Thambi 2;
font-weight: 600;
font-size: 18px;
line-height: 100%;
letter-spacing: 0.26px;
text-align: center;
vertical-align: middle;

*/
