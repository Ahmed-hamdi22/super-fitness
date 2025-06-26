/* eslint-disable @typescript-eslint/no-unused-vars */
import Heading from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useChangePassword } from "@/hooks/auth/use-change-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { Form, FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { useTranslations } from "use-intl";
import { z } from "zod";

type SettingFormProps = {
  onCancel: () => void;
};

export default function ChangePasswordDialog({ onCancel }: SettingFormProps) {
  // Translations
  const t = useTranslations();

  // Mutation
  const { changePassword, isPending, error } = useChangePassword();

  // States
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [hideNewPassword, setHideNewPassword] = useState<boolean>(true);

  // Forms & Validation
  const schema = z.object({
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

  type Inputs = z.infer<typeof schema>;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  const {
    formState: { isDirty, isValid },
  } = form;

  // Functions
  const onSubmit: SubmitHandler<Inputs> = (values) => {
    changePassword({ password: values.password, newPassword: values.newPassword });
    onCancel();
  };

  return (
    <div className="flex flex-col items-center justify-center font-baloo">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center mb-6">
          <Heading headTitle={t("change-your-password")} />
        </div>
        <FormProvider {...form}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center space-y-2"
            >
              {/* Current password field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative w-[311px] h-[48px]">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                          <Lock className="w-5 h-5 text-soft-gray-400" />
                        </div>
                        <div
                          className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                          onClick={() => setHidePassword(!hidePassword)}
                        >
                          {hidePassword ? (
                            <EyeOff className="w-5 h-5 text-soft-gray-400" />
                          ) : (
                            <Eye className="w-5 h-5 text-soft-gray-400" />
                          )}
                        </div>
                        <Input
                          type={hidePassword ? "password" : "text"}
                          {...field}
                          placeholder={t("current-password")}
                          className="w-full h-full pl-12 border placeholder:soft-gray-500 text-soft-gray-400 rounded-[20px] border-soft-gray-400 bg-transparent"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* New password field */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative w-[311px] h-[48px]">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                          <Lock className="w-5 h-5 text-soft-gray-400" />
                        </div>
                        <div
                          className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                          onClick={() => setHideNewPassword(!hideNewPassword)}
                        >
                          {hideNewPassword ? (
                            <EyeOff className="w-5 h-5 text-soft-gray-400" />
                          ) : (
                            <Eye className="w-5 h-5 text-soft-gray-400" />
                          )}
                        </div>
                        <Input
                          type={hideNewPassword ? "password" : "text"}
                          {...field}
                          placeholder={t("new-password")}
                          className="w-full h-full pl-12 border placeholder:soft-gray-500 text-soft-gray-400 rounded-[20px] border-soft-gray-400 bg-transparent"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center items-center">
                <Button
                  type="submit"
                  disabled={isPending || !isValid}
                  className="
              bg-flame-orange-500 hover:bg-orange-600 
              w-80 rounded-3xl text-base font-extrabold"
                >
                  {t("change-password")}
                </Button>
              </div>
            </form>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}