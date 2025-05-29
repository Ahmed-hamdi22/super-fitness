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
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { useContext } from "react";
import { authContext } from "@/context/use-context";
import { useNewPassword } from "@/hooks/auth/use-new-password";
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function NewPasswordForm() {
  // Translation
  const t = useTranslations();

  // Navigation
  const navigate = useNavigate();

  // Context
  const auth = useContext(authContext);

  if (!auth) {
    throw new Error("ForgotPasswordForm must be used within an AuthProvider");
  }

  // Mutation
  const { mutate: newPasswordMutate, isPending: newPasswordLoading } =
    useNewPassword();

  // State
  const [showPassword, setShowPassword] = useState(false);

  // Validation
  const formSchema = z.object({
    email: z
      .string()
      .nonempty(t("email-is-required"))
      .email({ message: t("email-is-invalid") }),

    newpassword: z
      .string()
      .nonempty(t("password-is-required"))
      .min(8, { message: t("password-is-too-short") })
      .regex(/[A-Z]/, { message: t("password-must-have-uppercase") })
      .regex(/[a-z]/, { message: t("password-must-have-lowercase") })
      .regex(/[0-9]/, { message: t("password-must-have-number") })
      .regex(/[^A-Za-z0-9]/, { message: t("password-must-have-symbol") }),
  });

  // Variables
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      newpassword: "",
    },
  });

  // Variables
  const { setEmail } = auth;

  // Function
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setEmail(values.email);
    newPasswordMutate(
      { email: values.email, password: values.newpassword },
      {
        onSuccess: () => {
          navigate("/login");
        },
      }
    );
  };

  return (
    <Form {...form}>
      {/* Forgot password form */}
      <div className="container bg-gray-400 mx-auto flex flex-col gap-5 justify-center items-center ">
        <h3 className="font-extrabold text-5xl text-white">
          create new password
        </h3>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-[493px] h-[291px] bg-transparent flex flex-col  gap-5 justify-center items-center  border-[1px] rounded-[50px] border-customGray"
        >
          <h3 className=" text-center block font-normal text-2xl text-white ">
            Make sure to create a strong password!
          </h3>
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative  w-[311px] h-[48px] ">
                    {/* Mail icon */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-customGray" />
                    </div>

                    {/* Email input */}
                    <Input
                      className="w-full h-full pl-12  border-[1px] placeholder:text-customGray text-customGray rounded-[20px] border-customGray bg-transparent"
                      placeholder={t("email")}
                      {...field}
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
            name="newpassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px] ">
                    {/* Mail icon */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-customGray" />
                    </div>

                    {/* Toggle visibility icon */}
                    <div
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-customGray" />
                      ) : (
                        <Eye className="w-5 h-5 text-customGray" />
                      )}
                    </div>

                    {/* Password input */}
                    <Input
                      type="password"
                      {...field}
                      placeholder={t("new-password")}
                      className=" w-full h-full pl-12  border-[1px] placeholder:text-customGray text-customGray rounded-[20px] border-customGray bg-transparent"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Create new password */}
          <Button
            disabled={newPasswordLoading}
            className="w-[311px] h-[41px] rounded-[20px] text-white font-extrabold text-base bg-customOrange hover:bg-customOrange"
            type="submit"
          >
            {t("create-new-password")}
          </Button>
        </form>
      </div>
    </Form>
  );
}
