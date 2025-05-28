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
import { useTranslations } from "use-intl";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { useContext } from "react";
import { authContext } from "@/context/auth/use-context";
import { useForgotPassword } from "@/hooks/auth/use-forgot-password";

export default function ForgotPasswordForm() {
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
  const { mutate: forgotPasswordMutate, isPending: forgotPasswordLoading } =
    useForgotPassword();

  // Validation
  const formSchema = z.object({
    email: z
      .string()
      .nonempty(t("email-is-required"))
      .email({ message: t("email-is-invalid") }),
  });

  // Variables
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
        navigate("/otp");
        console.log("SUCESS");
      },
    });
  };

  return (
    <Form {...emailForm}>
      {/* Forgot password form */}
      <div className="container bg-gray-400 mx-auto flex flex-col gap-5 justify-center items-center p-4">
        <h3 className="font-extrabold text-5xl text-white">Forgot Password</h3>
        <form
          onSubmit={emailForm.handleSubmit(handleSubmit)}
          className="w-[486px] h-[235px] bg-transparent flex flex-col  gap-8 justify-center items-center  border-[1px] rounded-[50px] border-customGray"
        >
          <FormField
            control={emailForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Email label */}
                <FormLabel className=" text-center block font-normal text-2xl text-white ">
                  {t("enter-your-email")}
                </FormLabel>

                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    {/* Mail icon */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-customGray" />
                    </div>

                    {/* Email input */}
                    <Input
                      className="w-full h-full pl-12 border-[1px] placeholder:text-customGray text-customGray rounded-[20px] border-customGray bg-transparent"
                      placeholder={t("email")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sent otp button */}
          <Button
            disabled={forgotPasswordLoading}
            className="w-[311px] h-[41px] rounded-[20px] text-white font-extrabold text-base bg-customOrange hover:bg-customOrange"
            type="submit"
          >
            {t("sent-otp")}
          </Button>
        </form>
      </div>
    </Form>
  );
}
