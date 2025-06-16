import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../common/heading";

export default function RegisterForm() {
  // Translations
  const t = useTranslations();

  //  State
  const [hidePassword, setHidePassword] = useState(true);

  // Validation
  const formSchema = z.object({
    firstName: z.string().nonempty(t("first-name-is-required")),
    lastName: z.string().nonempty(t("last-name-is-required")),
    email: z
      .string()
      .nonempty(t("email-is-required"))
      .email({ message: t("email-is-invalid") }),
    password: z
      .string()
      .nonempty(t("password-is-required"))
      .min(8, { message: t("password-is-too-short") }),
  });

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-full flex items-center justify-center">
      {/* Headline */}
      <div className="w-full max-w-md">
        <Heading
          welcomeText={t("hey-there")}
          headTitle={t("create-an-account")}
        />

        <Form {...form}>
          {/* Register form */}
          <form className="space-y-5 min-w-96 border-2 border-soft-gray-400 px-14 py-5 rounded-3xl">
            {/* Title */}
            <div className="text-center mb-6">
              <Heading mainTitle={t("register")} />
            </div>

            {/* First name field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-[311px] h-[48px]">
                      <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none ">
                        {/* User icon */}
                        <User className="w-5 h-5 text-soft-gray-400" />
                      </div>

                      {/* First name input */}
                      <Input
                        className="w-full h-full ps-10  border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                        placeholder={t("first-name")}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last name field */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-[311px] h-[48px]">
                      <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none ">
                        {/* User icon */}
                        <User className="w-5 h-5  text-soft-gray-400" />
                      </div>

                      {/* Last name */}
                      <Input
                        className="w-full h-full ps-10  border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                        placeholder={t("last-name")}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-[311px] h-[48px]">
                      <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none ">
                        {/* Mail icon */}
                        <Mail className="w-5 h-5  text-soft-gray-400" />
                      </div>

                      {/* Email input */}
                      <Input
                        className="w-full h-full ps-10  border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                        placeholder={t("email")}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-[311px] h-[48px]">
                      <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none ">
                        {/* Lock icon */}
                        <Lock className="w-5 h-5  text-soft-gray-400" />
                      </div>

                      {/* Password input */}
                      <Input
                        type={hidePassword ? "password" : "text"}
                        className="w-full h-full ps-10  border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                        placeholder={t("password")}
                        {...field}
                      />

                      {/* Password icon */}
                      <div
                        className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pe-3 cursor-pointer"
                        onClick={() => setHidePassword(!hidePassword)}
                      >
                        {hidePassword ? (
                          <EyeOff className="w-5 h-5  text-soft-gray-400" />
                        ) : (
                          <Eye className="w-5 h-5 text-soft-gray-400 " />
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forgotpassword link */}
            <div className=" w-[311px] flex flex-col justify-end items-end ">
              <Link
                to="/forgotpassword"
                className="text-base font-bold underline text-flame-orange-400"
              >
                {t("forget-password")}
              </Link>
            </div>

            {/* Or span */}
            <div className="flex items-center w-[311px] my-2">
              <div className="flex-grow border-t border-soft-gray-400"></div>
              <span className="px-3 text-sm font-normal text-soft-gray-400">
                {t("or")}
              </span>
              <div className="flex-grow border-t border-soft-gray-400"></div>
            </div>

            {/* Register button */}
            <Button
              className="bg-flame-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors w-full"
              type="submit"
            >
              {t("register")}
            </Button>

            {/* Login link */}
            <div className="text-center text-base text-white font-bold ">
              {t("already-have-an-account")}
              <Link
                to="/login"
                className="text-flame-orange-400 text-base font-bold underline"
              >
                {t("login")}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
