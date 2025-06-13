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
import Heading from "@/components/common/heading";

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
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Heading */}
        <Heading welcomeText={t("otp-code")} />

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
                    className={`w-12 h-14 text-xl font-medium bg-transparent border-0 border-b-2 text-center focus:ring-0 focus:outline-none rounded-none transition-colors ${
                      codeValue.length > index
                        ? "border-flame-orange-500 text-flame-orange-500 focus:border-flame-orange-400 border-collapse"
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
            {errors.code && (
              <p className="text-red-500 text-sm">{errors.code.message}</p>
            )}

            {/* Confirm button */}
            <div className="flex justify-center items-center mt-6 w-full">
              <Button
                type="submit"
                className="w-full  bg-flame-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-3xl "
                disabled={isPending || codeValue.length !== 6}
              >
                {isPending ? t("verifying") : t("confirm")}
              </Button>
            </div>
          </div>

          {/* Resend option */}
          <div className="text-center mt-6">
            <p className="text-white text-base capitalize">
              {t("didnt-receive-verification-code")}{" "}
            </p>

            {/* NOTE: will resend when merging with forgot password */}
            <button
              type="button"
              className="text-flame-orange-500 font-bold hover:text-flame-orange-400 underline transition-colors text-sm"
              disabled={isPending}
            >
              {t("resend-code")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
