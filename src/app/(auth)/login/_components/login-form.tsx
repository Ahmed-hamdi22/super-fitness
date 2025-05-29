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
import { Loader, Lock, Mail } from "lucide-react";
import { useTranslations } from "use-intl";
import Heading from "@/components/common/heading";
import { useLogin } from "@/hooks/use-login";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // Translations
  const t = useTranslations();

  // Navigate
  const navigate = useNavigate();

  // Mutation
  const { login, isLoading, error, isPending } = useLogin();

  // Login Schema
  const Schema = z.object({
    email: z
      .string({ required_error: t("email-reqired") })
      .min(1, t("email-reqired"))
      .email(t("email-invalid")),
    password: z
      .string({ required_error: t("password-required") })
      .min(1, t("password-required")),
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
        <Heading welcomeText={t("hey-there")} subtitle={t("welcome-back")} />

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 min-w-96 border-2 border-soft-gray-500 px-14 py-5 rounded-3xl "
          >
            {/* Title */}
            <div className="text-center mb-6">
              <Heading mainTitle={t("login")} />
            </div>
            {/* Email Filed */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("email")}</FormLabel>
                  <div className="relative">
                    {/* Icon */}

                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5 text-soft-gray-500" />
                    </div>
                    <FormControl>
                      {/* Input*/}
                      <Input
                        type="email"
                        placeholder={t("email")}
                        className="w-full pl-10 bg-transparent border-2 rounded-2xl text-white border-soft-gray-500"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
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
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-5 h-5 text-soft-gray-100" />
                    </div>
                    <FormControl>
                      {/* Input*/}
                      <Input
                        type="password"
                        placeholder={t("password")}
                        className="w-full pl-10 bg-transparent border-2 rounded-2xl text-white border-soft-gray-500"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Forget Button */}
            <div className="flex">
              <Button
                variant="link"
                className="text-flame-orange-500 p-0 underline ml-auto"
                onClick={() => navigate("/forgot-password")}
              >
                {t("forgot-password")}
              </Button>
            </div>

            <div className="flex flex-col gap-8">
              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm font-semibold text-center">
                  {error.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <Button
              disabled={isPending}
              type="submit"
              className="w-full h-[50px] bg-flame-orange-500 hover:bg-flame-orange-700 rounded-3xl text-white capitalize mb-3"
            >
              {isLoading ? <Loader /> : t("login")}
            </Button>

            {/* Register link */}
            <div className="flex flex-col gap-2 text-sm text-center mb-5">
              <div className="text-white">
                {t("dont-have-an-account")}{" "}
                <Button variant="link" className="text-flame-orange-500 p-0">
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
