import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useVerifyOtp } from "@/hooks/auth/use-verify-otp";
import { useTranslations } from "use-intl";

export default function VerifyOTPForm() {
  // Translations
  const t = useTranslations();

  // Mutation
  const { verifyOTP, isPending } = useVerifyOtp();

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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-8">
      {/* Title */}
      <h2 className="text-2xl text-white">
        {t("enter-the-otp-you-have-received")}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="my-2">
        {/* OTP input */}
        <div className="flex flex-col items-center gap-2">
          <InputOTP
            maxLength={6}
            value={codeValue}
            onChange={handleOtpChange}
            className="gap-4"
          >
            {/* Input group */}
            <InputOTPGroup className="gap-4">
              {[...Array(6)].map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className={`w-16 h-16 text-2xl font-medium bg-transparent border-0 border-b-2 text-center focus:ring-0 focus:outline-none rounded-none transition-colors ${
                    codeValue.length > index
                      ? "border-customOrange text-customOrange focus:border-orange-400"
                      : "border-white text-white focus:border-gray-300"
                  } ${
                    // Caret animation
                    index === codeValue.length &&
                    "relative after:absolute after:bottom-4 after:left-1/2 after:h-8 after:w-0.5 after:-translate-x-1/2 after:bg-customOrange after:content-[''] after:animate-caret-blink"
                  }`}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          {/* Error message */}
          {errors.code && (
            <p className="text-red-500 text-sm">{errors.code.message}</p>
          )}

          {/* Confirm button */}
          <div className="flex justify-center items-center mt-6">
            <Button
              type="submit"
              className="bg-customOrange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              disabled={isPending || codeValue.length !== 6}
            >
              {isPending ? t('verifying') : t('confirm')}
            </Button>
          </div>
        </div>

        {/* NOTE: to be removed when mergingCurrent value */}
        {/* Current value */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Current value:{" "}
            <span className="text-white font-mono">{codeValue || "Empty"}</span>
          </p>
        </div>

        {/* Resend option */}
        <div className="text-center mt-6">
          <p className="text-white text-base capitalize">
            {t('didnt-receive-verification-code')}{" "}
          </p>

          {/* NOTE: will resend when merging with forgot password */}
          <button
            type="button"
            className="text-customOrange text-base font-bold hover:text-orange-400 underline transition-colors"
            disabled={isPending}
          >
            {t('resend-code')}
          </button>
        </div>
      </form>
    </div>
  );
}
