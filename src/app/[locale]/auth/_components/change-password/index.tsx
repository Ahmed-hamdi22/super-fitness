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

export default function NewPasswordForm() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { changePassword, isPending } = useChangePassword();

  // State
  const [hidePassword, setHidePassword] = useState(true);

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
      <div className="container mx-auto flex flex-col gap-5 justify-center items-center ">
        {/* Heading */}
        <Heading question={t("create-new-password")} />

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[493px] h-[291px] bg-transparent flex flex-col  gap-5 justify-center items-center  border-[1px] rounded-[50px] border-soft-gray-400"
        >
          {/* Heading */}

          <Heading mainTitle={t("make-sure-to-create-a-strong-password")} />

          {/* New password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px] ">
                    {/* Mail icon */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-soft-gray-400" />
                    </div>

                    {/* Toggle visibility icon */}
                    <div
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      onClick={() => setHidePassword(!hidePassword)}
                    >
                      {hidePassword ? (
                        <EyeOff className="w-5 h-5  text-soft-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5  text-soft-gray-400 " />
                      )}
                    </div>

                    {/* Password input */}
                    <Input
                      type={hidePassword ? "password" : "text"}
                      {...field}
                      placeholder={t("new-password")}
                      className=" w-full h-full pl-12  border-[1px] placeholder:soft-gray-500 text-soft-gray-400 rounded-[20px] border-soft-gray-400 bg-transparent"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm password field */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px] ">
                    {/* Mail icon */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-soft-gray-400 " />
                    </div>

                    {/* Toggle visibility icon */}
                    <div
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      onClick={() => setHidePassword(!hidePassword)}
                    >
                      {hidePassword ? (
                        <EyeOff className="w-5 h-5  text-soft-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-soft-gray-400 " />
                      )}
                    </div>

                    {/* Password input */}
                    <Input
                      type={hidePassword ? "password" : "text"}
                      {...field}
                      placeholder={t("confirm-password")}
                      className=" w-full h-full pl-12  border-[1px] placeholder:soft-gray-500 text-soft-gray-400 rounded-[20px] border-soft-gray-400 bg-transparent "
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Create new password button */}
          <AuthButton
            type="submit"
            disabled={isPending}
            label={t("create-new-password")}
          />
        </form>
      </div>
    </Form>
  );
}
