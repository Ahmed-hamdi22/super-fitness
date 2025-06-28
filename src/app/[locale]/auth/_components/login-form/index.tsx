import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useTranslations } from "use-intl";
import Heading from "@/components/common/heading";
import { useLogin } from "@/hooks/auth/use-login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthButton from "@/components/ui/auth-button";

export default function LoginForm() {
  // Translations
  const t = useTranslations();

  // Navigate
  const navigate = useNavigate();

  //  State
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  // Mutation
  const { login, isLoading, error, isPending } = useLogin();

  // Login Schema
  const Schema = z.object({
    email: z.string({ required_error: t("email-reqired") }).min(1, t("email-reqired")),
    password: z
      .string()
      .nonempty(t("password-is-required"))
      .min(8, { message: t("password-is-too-short") })
      .regex(/[A-Z]/, t("password-must-contain-at-least-one-uppercase-letter"))
      .regex(/[a-z]/, t("password-must-contain-at-least-one-lowercase-letter"))
      .regex(/[0-9]/, t("password-must-contain-at-least-one-number")),
  });
  type Inputs = z.infer<typeof Schema>;

  const form = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(Schema),
  });

  // Functions
  const onSubmit: SubmitHandler<Inputs> = (values) => {
    login(values);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Heading */}
        <Heading welcomeText={t("hey-there")} question={t("welcome-back")} />

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 min-w-96 border-2 border-soft-gray-400 px-14 py-5 rounded-3xl "
          >
            {/* Title */}
            <div className="text-center mb-6">
              <Heading mainTitle={t("login")} />
            </div>
            {/* Email filed */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("email")}</FormLabel>
                  <div className="relative">
                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3  pointer-events-none">
                      {" "}
                      <Mail className="w-5 h-5 text-soft-gray-400 " />
                    </div>
                    <FormControl>
                      {/* Input*/}
                      <Input
                        type="email"
                        placeholder={t("email")}
                        className="ps-10  bg-transparent border-2 rounded-2xl text-white placeholder:text-soft-gray-300 border-soft-gray-400"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  {/* Message */}
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Password field*/}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("password")}</FormLabel>
                  <div className="relative">
                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none  ">
                      <Lock className="w-5 h-5 text-soft-gray-500" />
                    </div>
                    <FormControl>
                      {/* Input*/}
                      <Input
                        type={isPasswordHidden ? "password" : "text"}
                        placeholder={t("password")}
                        className="ps-10  bg-transparent border-2 rounded-2xl text-white placeholder:text-soft-gray-300 border-soft-gray-400"
                        {...field}
                      />
                    </FormControl>

                    {/* Eye icon  */}
                    <div
                      className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pe-3  cursor-pointer"
                      onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                    >
                      {isPasswordHidden ? (
                        <Eye className="w-5 h-5 text-soft-gray-400 hover:text-flame-orange-500 " />
                      ) : (
                        <EyeOff className="w-5 h-5 text-soft-gray-400 hover:text-flame-orange-500" />
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Forget button */}
            <div className="flex ">
              <Button
                variant="link"
                className="text-flame-orange-500 underline ml-auto"
                onClick={() => navigate("/forgot-password")}
              >
                {t("forgot-password")}
              </Button>
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-500 text-sm font-semibold text-center">{error.message}</p>
            )}

            {/* Login button */}
            <AuthButton
              label={t("login")}
              isLoading={isLoading}
              disabled={isPending}
              type="submit"
              className="w-full h-[50px]"
            />
            {/* Register link */}
            <div className="flex flex-col gap-2 text-sm text-center mb-5">
              <div className="text-white">
                {t("dont-have-an-account")}{" "}
                <Button
                  variant="link"
                  onClick={() => navigate("/register")}
                  className="text-flame-orange-500 p-0"
                >
                  <span> {t("register")}</span>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
