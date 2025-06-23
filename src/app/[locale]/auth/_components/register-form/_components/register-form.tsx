import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "use-intl";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Heading from "../../../../../../components/common/heading";
import { useRegistration } from "@/context/auth/register";
import AuthButton from "@/components/ui/auth-button";

export default function RegisterForm() {
  // Translations
  const t = useTranslations();

  //  State
  const { formData, setFormData, setCurrentStep } = useRegistration();
  const [hidePassword, setHidePassword] = useState(true);

  // Validation
  const formSchema = z
    .object({
      firstName: z.string().nonempty(t("first-name-is-required")),
      lastName: z.string().nonempty(t("last-name-is-required")),
      email: z
        .string()
        .nonempty(t("email-is-required"))
        .email({ message: t("email-is-invalid") }),
      password: z
        .string()
        .nonempty(t("password-is-required"))
        .min(8, { message: t("password-is-too-short") })
        .regex(/[A-Z]/, t("password-must-contain-at-least-one-uppercase-letter"))
        .regex(/[a-z]/, t("password-must-contain-at-least-one-lowercase-letter"))
        .regex(/[0-9]/, t("password-must-contain-at-least-one-number")),
      rePassword: z
        .string()
        .nonempty(t("re-password-is-required"))
        .min(8, { message: t("password-is-too-short") }),
    })
    .refine((values) => values.password === values.rePassword, {
      message: "Password confirm mismatch",
      path: ["rePassword"],
    });

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      rePassword: formData.rePassword,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setFormData((prev) => ({
      ...prev,
      ...values,
    }));
    setCurrentStep(1);
  };

  return (
    <>
      <div className="mb-4">
        <Heading welcomeText={t("hey-there")} headTitle={t("create-an-account")} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 min-w-96 border-2 border-soft-gray-400 px-14 py-5 rounded-3xl"
        >
          <div className="text-center mb-6">
            <Heading mainTitle={t("register")} />
          </div>

          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                      <User className="w-5 h-5 text-soft-gray-400" />
                    </div>
                    <Input
                      className="w-full h-full ps-10 border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                      placeholder={t("first-name")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                      <User className="w-5 h-5 text-soft-gray-400" />
                    </div>
                    <Input
                      className="w-full h-full ps-10 border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                      placeholder={t("last-name")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                      <Mail className="w-5 h-5 text-soft-gray-400" />
                    </div>
                    <Input
                      className="w-full h-full ps-10 border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                      placeholder={t("email")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                      <Lock className="w-5 h-5 text-soft-gray-400" />
                    </div>
                    <Input
                      type={hidePassword ? "password" : "text"}
                      className="w-full h-full ps-10 border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                      placeholder={t("password")}
                      {...field}
                    />
                    <div
                      className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pe-3 cursor-pointer"
                      onClick={() => setHidePassword(!hidePassword)}
                    >
                      {hidePassword ? (
                        <EyeOff className="w-5 h-5 text-soft-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-soft-gray-400" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                      <Lock className="w-5 h-5 text-soft-gray-400" />
                    </div>
                    <Input
                      type="password"
                      className="w-full h-full ps-10 border-[1px] placeholder:text-soft-gray-400 text-soft-gray-500 rounded-[20px] border-customGray bg-transparent"
                      placeholder={t("confirm-password")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <Button
            className="bg-flame-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors w-full "
            type="submit"
          >
            {t("next")}
          </Button> */}
          <AuthButton label={t("next")} type="submit" />
        </form>
      </Form>
    </>
  );
}
