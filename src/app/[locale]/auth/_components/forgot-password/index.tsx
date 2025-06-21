import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "use-intl";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { useContext } from "react";
import { authContext } from "@/context/auth/use-context";
import { useForgotPassword } from "@/hooks/auth/use-forgot-password";
import Heading from "@/components/common/heading";

export default function ForgotPasswordForm() {
  // Translation
  const t = useTranslations();

  // Navigation
  const navigate = useNavigate();
  // Locale
  const locale = useLocale();

  // Context
  const auth = useContext(authContext);

  if (!auth) {
    throw new Error(
      t("forgotpasswordform-must-be-used-within-an-authprovider")
    );
  }

  // Mutation
  const { mutate: forgotPasswordMutate, isPending: forgotPasswordLoading } =
    useForgotPassword();

  // Validation
  const formSchema = z.object({
    email: z
      .string()
      .nonempty(t("email-is-required"))
      .email({ message: t("email-is-invalid") }),
  });

  // Form
  const emailForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Variables
  const { setEmail } = auth;

  // Function
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setEmail(values.email);
    forgotPasswordMutate(values.email, {
      onSuccess: () => {
        navigate(`/${locale}/verifyotp`);
      },
      onError: () => {
        throw new Error(t("sending-failed"));
      },
    });
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-md">
        <Form {...emailForm}>
          {/* Heading */}
          <div className="text-center ">
            <Heading headTitle={t("forgot-password")} />
          </div>

          {/* Forgot password form */}
          <form
            onSubmit={emailForm.handleSubmit(handleSubmit)}
            className="space-y-5 min-w-96 border-2 border-soft-gray-400 px-10 py-8 rounded-3xl bg-transparent"
          >
            {/* Email */}
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* Email label */}
                  <FormLabel className="text-center block font-normal text-2xl text-white">
                    <Heading mainTitle={t("enter-your-email")} />
                  </FormLabel>

                  <FormControl>
                    <div className="relative w-full">
                      {/* Mail icon */}
                      <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <Mail className="w-5 h-5  text-soft-gray-400" />
                      </div>

                      {/* Email input */}
                      <Input
                        className="w-full ps-10 bg-transparent border-2 rounded-2xl text-white placeholder:text-soft-gray-300 border-soft-gray-400"
                        placeholder={t("email")}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Send otp button */}
            <Button
              disabled={forgotPasswordLoading}
              className="w-full h-[50px] bg-custom-orange-500 hover:bg-flame-orange-700 text-white rounded-3xl font-semibold capitalize"
              type="submit"
            >
              {t('send-otp')}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
