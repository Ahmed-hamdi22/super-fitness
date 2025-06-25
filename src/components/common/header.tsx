import { Link } from "react-router-dom";
import LogoImg from "../../../public/assets/logo.png";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslations } from "use-intl";
import { ArrowUpRight, Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AccountPanel from "../features/account-panel/components";

export default function Header() {
  const t = useTranslations();

  const user = true;

  return (
    <header className="w-4/5 mx-auto flex justify-between items-center">
      <Link to={`/`}>
        <img src={LogoImg} className="w-[100px] h-[100px]" />
      </Link>
      <div className="hidden md:flex gap-5 text-lg">
        <span>
          <NavLink
            className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
            to={`/`}
          >
            {t("home")}
          </NavLink>
        </span>
        <span>
          <NavLink
            className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
            to={`/about`}
          >
            {t("about")}
          </NavLink>
        </span>
        <span>
          <NavLink
            className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
            to={`/classes`}
          >
            {t("classes")}
          </NavLink>
        </span>
        <span>
          <NavLink
            className={({ isActive }) => (isActive ? "text-flame-orange-500" : "text-black")}
            to={`/healthy`}
          >
            {t("healthy")}
          </NavLink>
        </span>
      </div>
      <div className="hidden md:block">
        {user ? (
          <>
            <Sheet>
              <SheetTrigger>
                <User className="w-[47px] h-[47px] bg-flame-orange-500 rounded-full text-white p-3 cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="bg-white bg-opacity-60 dark:bg-darkGray1 dark:bg-opacity-60 backdrop-blur-2xl h-screen">
                <AccountPanel />
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <div className="flex gap-3">
            <div className="flex">
              <Button className="bg-flame-orange-500 hover:bg-flame-orange-400 text-white rounded-full rtl:ml-3 ltr:mr-3">
                {t("login")}
              </Button>
              <ArrowUpRight className="w-8 h-8 bg-flame-orange-500 border border-white rounded-full text-white p-2 -ml-5" />
            </div>
            <div className="flex">
              <Button
                variant="outline"
                className="rounded-full border-flame-orange-500 text-flame-orange-500"
              >
                {t("sign-up")}
              </Button>
              <ArrowUpRight className="w-8 h-8 bg-flame-orange-500 border border-white rounded-full text-white p-2 -ml-3" />
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden flex gap-5">
        <User className="w-[47px] h-[47px] bg-flame-orange-500 rounded-full text-white p-3 cursor-pointer" />
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
