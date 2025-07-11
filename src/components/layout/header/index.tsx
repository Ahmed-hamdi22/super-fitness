import { Link } from "react-router-dom";
import LogoImg from "@/assets/logo.png";
import { NavLink } from "react-router-dom";
import { Button } from "../../ui/button";
import { useTranslations } from "use-intl";
import { ArrowUpRight, Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import AccountModal from "../../features/account";
import { Sheet } from "../../custom/sheet";
import { useToken } from "@/context/auth/token";

export default function Header() {
  const { token } = useToken();
  const t = useTranslations();
  const [isAccountSheetOpen, setIsAccountSheetOpen] = useState(false);
  const user = token;

  return (
    <>
      <header className="relative z-20 px-8 mx-auto flex justify-between items-center dark:bg-dark-gray-900 backdrop:bg-inherit font-baloo">
        <Link to={`/`}>
          <img src={LogoImg} className="w-[100px] h-[100px]" />
        </Link>
        <div className="hidden md:flex gap-5 text-lg">
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-flame-orange-500 hover:text-flame-orange-300"
                  : "text-dark-gray-800 hover:text-dark-gray-800/80 dark:text-light-silver-300"
              }
              to={`/`}
            >
              {t("home")}
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-flame-orange-500 hover:text-flame-orange-300"
                  : "text-dark-gray-800 hover:text-dark-gray-800/80 dark:text-light-silver-300"
              }
              to={`/about`}
            >
              {t("about")}
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-flame-orange-500 hover:text-flame-orange-300"
                  : "text-dark-gray-800 hover:text-dark-gray-800/80 dark:text-light-silver-300"
              }
              to={`/classes`}
            >
              {t("classes")}
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-flame-orange-500 hover:text-flame-orange-300"
                  : "text-dark-gray-800 hover:text-dark-gray-800/80 dark:text-light-silver-300"
              }
              to={`/healthy`}
            >
              {t("healthy")}
            </NavLink>
          </span>
        </div>
        <div className="hidden md:block">
          {user ? (
            // Will be used to open account sheet
            <button onClick={() => setIsAccountSheetOpen(true)} className="focus:outline-none">
              <User className="w-[47px] h-[47px] bg-flame-orange-500 rounded-full text-white p-3 cursor-pointer" />
            </button>
          ) : (
            <div className="flex gap-5">
              <div className="flex rtl:ml-4">
                <Button
                  asChild
                  className="bg-flame-orange-500 hover:bg-flame-orange-400 text-white rounded-full rtl:ml-5 ltr:mr-3"
                >
                  <Link to="/login">{t("login")}</Link>
                </Button>
                <ArrowUpRight className="w-8 h-8 bg-flame-orange-500 border border-white rounded-full text-white p-2 -ml-5 rtl:-mr-8" />
              </div>
              <div className="flex">
                <Button
                  variant="outline"
                  className="rounded-full border-flame-orange-500 text-flame-orange-500"
                  asChild
                >
                  <Link to="/register">{t("sign-up")}</Link>
                </Button>
                <ArrowUpRight className="w-8 h-8 bg-flame-orange-500 border border-white rounded-full text-white p-2 -ml-3 rtl:-mr-2" />
              </div>
            </div>
          )}
        </div>
        <div className="md:hidden flex gap-5">
          {
            user && (
              <button onClick={() => setIsAccountSheetOpen(true)} className="focus:outline-none">
                <User className="w-[47px] h-[47px] bg-flame-orange-500 rounded-full text-white p-3 cursor-pointer" />
              </button>
            )
          }
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="w-10 h-10 bg-flame-orange-500 p-2 rounded-full text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <NavLink
                  end
                  className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
                  to={`/`}
                >
                  {t("home")}
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
                  to={`/about`}
                >
                  {t("about")}
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
                  to={`/classes`}
                >
                  {t("classes")}
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
                  to={`/healthy`}
                >
                  {t("healthy")}
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
                  to={`/login`}
                >
                  {t("login")}
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <Sheet isOpen={isAccountSheetOpen} onClose={() => setIsAccountSheetOpen(false)}>
        <AccountModal />
      </Sheet>
    </>
  );
}
