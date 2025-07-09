import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useVerifyOtp } from "@/hooks/auth/use-verify-otp";
import { useTranslations } from "use-intl";
import Heading from "@/components/common/heading";
import { useEmail } from "@/context/auth/email";
import { useForgotPassword } from "@/hooks/auth/use-forgot-password";
import AuthButton from "@/components/common/auth-button";
import { Button } from "@/components/ui/button";

export default function VerifyOTPForm() {
  // Translations
  const t = useTranslations();

  // Context
  const { email, setCurrentStep } = useEmail();

  // Mutation
  const { verifyOTP } = useVerifyOtp();
  const { mutate: forgotPasswordMutate, isPending } = useForgotPassword();

  // Form & Validation
  const otpSchema = z.object({
    code: z.string().length(6, t("code-must-be-exactly-6-characters")),
  });

  type OtpFormValues = z.infer<typeof otpSchema>;

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      code: "",
    },
  });

  const codeValue = watch("code");

  // Functions
  const handleOtpChange = (value: string) => {
    setValue("code", value, { shouldValidate: true });
  };

  const onSubmit = (data: OtpFormValues) => {
    verifyOTP({ resetCode: data.code });
    setCurrentStep(2);
  };

  const handleResendOTP = () => {
    forgotPasswordMutate(email);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Heading */}
        <Heading question={t("otp-code")} />

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 min-w-96 border-2 border-soft-gray-400 px-14 py-10 rounded-3xl"
        >
          {/* Title */}
          <div className="text-center mb-6">
            <Heading subtitle={t("enter-the-otp-you-have-received")} />
          </div>

          {/* OTP input */}
          <div className="flex flex-col items-center gap-2">
            <InputOTP maxLength={6} value={codeValue} onChange={handleOtpChange} className="gap-4">
              {/* Input group */}
              <InputOTPGroup className="gap-4">
                {[...Array(6)].map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className={`w-12 h-14 text-xl font-medium bg-transparent border-0 border-b-2 text-center rounded-none transition-colors ${
                      codeValue.length > index
                        ? "border-flame-orange-500 text-flame-orange-500 focus:border-flame-orange-400"
                        : "border-soft-gray-300 text-white focus:border-soft-gray-400"
                    } ${
                      // Caret animation
                      index === codeValue.length &&
                      "relative after:absolute after:bottom-4 after:left-1/2 after:h-8 after:w-0.5 after:-translate-x-1/2 after:bg-flame-orange-500 after:content-[''] after:animate-caret-blink"
                    }`}
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            {/* Error message */}
            {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}

            {/* Confirm button */}
            <div className="flex justify-center items-center mt-6 w-full">
              <AuthButton
                type="submit"
                label={isPending ? t("verifying") : t("confirm")}
                disabled={isPending || codeValue.length !== 6}
              />
            </div>
          </div>

          {/* Resend option */}
          <div className="text-center mt-6">
            <p className="text-white text-base capitalize">
              {t("didnt-receive-verification-code")}{" "}
            </p>

            <Button
              onClick={handleResendOTP}
              type="button"
              className="text-flame-orange-500 font-bold bg-transparent  hover:bg-transparent hover:text-flame-orange-400 underline transition-colors text-sm"
              disabled={isPending}
            >
              {t("resend-code")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
