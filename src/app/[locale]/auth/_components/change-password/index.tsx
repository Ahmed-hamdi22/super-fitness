import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "use-intl";
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import Heading from "@/components/common/heading";
// import AuthButton from "@/components/ui/auth-button";
import { useChangePassword } from "@/hooks/auth/use-change-password";
import AuthButton from "@/components/common/auth-button";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NewPasswordForm() {
  // Translation
  const t = useTranslations();

  // Navigation
  const navigate = useNavigate();

  // State
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState<boolean>(true);

  // Mutation
  const { changePassword, isPending } = useChangePassword();

  // Validation
  const formSchema = z.object({
    password: z
      .string()
      .nonempty(t("password-is-required"))
      .min(8, { message: t("password-is-too-short") })
      .regex(/[A-Z]/, t("password-must-have-uppercase"))
      .regex(/[a-z]/, t("password-must-have-lowercase"))
      .regex(/[0-9]/, t("password-must-have-number"))
      .regex(/[!@#$%^&*]/, t("password-must-have-symbol")),
    newPassword: z
      .string()
      .nonempty(t("re-password-is-required"))
      .min(8, { message: t("password-is-too-short") })
      .regex(/[A-Z]/, t("password-must-have-uppercase"))
      .regex(/[a-z]/, t("password-must-have-lowercase"))
      .regex(/[0-9]/, t("password-must-have-number"))
      .regex(/[!@#$%^&*]/, t("password-must-have-symbol")),
  });

  // Form
  type Inputs = z.infer<typeof formSchema>;
  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  // Function
  const onSubmit = (values: Inputs) => {
    changePassword({ password: values.password, newPassword: values.newPassword });
  };

  return (
    <Form {...form}>
      <div className="container mx-auto flex flex-col gap-5 justify-center items-center">
        {/* Heading */}
        <Heading question={t("create-new-password")} />

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-[493px] h-auto p-5 bg-transparent flex flex-col gap-5 justify-center items-center border-[1px] rounded-[50px] border-soft-gray-400 px-4 md:px-0"
        >
          {/* Heading */}
          <Heading mainTitle={t("make-sure-to-create-a-strong-password")} />

          {/* New password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full flex justify-center">
                <FormControl>
                  <div className="relative w-full md:w-[311px] h-[48px]">
                    {/* Lock icon */}
                    <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none rtl:right-4 rtl:left-auto">
                      <Lock className="w-5 h-5 text-soft-gray-400" />
                    </div>

                    {/* Toggle visibility icon */}
                    <div
                      className="absolute inset-y-0 end-4 flex items-center cursor-pointer rtl:left-4 rtl:right-auto"
                      onClick={() => setHidePassword(!hidePassword)}
                    >
                      {hidePassword ? (
                        <EyeOff className="w-5 h-5 text-soft-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-soft-gray-400" />
                      )}
                    </div>

                    {/* Password input */}
                    <Input
                      type={hidePassword ? "password" : "text"}
                      {...field}
                      placeholder={t("new-password")}
                      className="w-full h-full ps-12 pe-12 border placeholder:soft-gray-500 text-soft-gray-400 rounded-2xl border-soft-gray-400 bg-transparent"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />

          {/* Confirm password field */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <div className="relative w-full md:w-[311px] h-[48px]">
                    {/* Lock icon */}
                    <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none rtl:right-4 rtl:left-auto">
                      <Lock className="w-5 h-5 text-soft-gray-400" />
                    </div>

                    {/* Toggle visibility icon */}
                    <div
                      className="absolute inset-y-0 end-4 flex items-center cursor-pointer rtl:left-4 rtl:right-auto"
                      onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
                    >
                      {hideConfirmPassword ? (
                        <EyeOff className="w-5 h-5 text-soft-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-soft-gray-400" />
                      )}
                    </div>

                    {/* Password input */}
                    <Input
                      type={hideConfirmPassword ? "password" : "text"}
                      {...field}
                      placeholder={t("confirm-password")}
                      className="w-full h-full ps-12 pe-12 border placeholder:soft-gray-500 text-soft-gray-400 rounded-2xl border-soft-gray-400 bg-transparent"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-center" />
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
          {/* Create new password button */}
          <AuthButton type="submit" disabled={isPending} label={t("create-new-password")} />
        </form>
      </div>
    </Form>
  );
}
