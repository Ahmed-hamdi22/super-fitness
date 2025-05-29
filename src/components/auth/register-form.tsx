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
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  // Translations
  const t = useTranslations();

  //  State
  const [hidePassword, setHidePassword] = useState(true);

  // Validation
  const formSchema = z.object({
    firstName: z.string().nonempty(t("first-name-is-required")),
    lastName: z.string().nonempty(t("last-name-is-required")),
    email: z
      .string()
      .nonempty(t("email-is-required"))
      .email({ message: t("email-is-invalid") }),
    password: z
      .string()
      .nonempty(t("password-is-required"))
      .min(8, { message: t("password-is-too-short") }),
  });

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <div className="container bg-gray-400 mx-auto flex flex-col gap-5 justify-center items-center">
        {/* Headline */}
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-white text-lg font-normal">Hey There</p>
          <h1 className="font-extrabold text-5xl  text-white">
            Create An Account
          </h1>
        </div>

        {/* Register form */}
        <form className="w-[486px] h-[592px] bg-transparent flex flex-col  gap-5 justify-center items-center  border-[1px] rounded-[50px] border-customGray">
          <h2 className="text-white  font-extrabold text-2xl  text-center">
            Register
          </h2>
          {/* First name field */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      {/* User icon */}
                      <User className="w-5 h-5 text-customlightGray" />
                    </div>

                    {/* First name input */}
                    <Input
                      className="w-full h-full pl-12  border-[1px] placeholder:text-customlightGray text-customGray rounded-[20px] border-customGray bg-transparent"
                      placeholder="First Name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last name field */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      {/* User icon */}
                      <User className="w-5 h-5 text-customlightGray" />
                    </div>

                    {/* Last name */}
                    <Input
                      className="w-full h-full pl-12  border-[1px] placeholder:text-customlightGray text-customGray rounded-[20px] border-customGray bg-transparent"
                      placeholder="Last Name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      {/* Mail icon */}
                      <Mail className="w-5 h-5 text-customlightGray" />
                    </div>

                    {/* Email input */}
                    <Input
                      className="w-full h-full pl-12  border-[1px] placeholder:text-customlightGray text-customGray rounded-[20px] border-customGray bg-transparent"
                      placeholder="Email"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative w-[311px] h-[48px]">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      {/* Lock icon */}
                      <Lock className="w-5 h-5 text-customlightGray" />
                    </div>

                    {/* Password input */}
                    <Input
                      type={hidePassword ? "password" : "text"}
                      className="w-full h-full pl-12  border-[1px] placeholder:text-customlightGray text-customGray rounded-[20px] border-customGray bg-transparent"
                      placeholder="Password"
                      {...field}
                    />

                    {/* Password icon */}
                    <div
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                      onClick={() => setHidePassword(!hidePassword)}
                    >
                      {hidePassword ? (
                        <EyeOff className="w-5 h-5 text-customlightGray" />
                      ) : (
                        <Eye className="w-5 h-5 text-customlightGray " />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forgotpassword link */}
          <div className=" w-[311px] flex flex-col justify-end items-end ">
            <Link
              to="/forgotpassword"
              className="text-base font-bold underline text-customdarkOrange"
            >
              Forget Password?
            </Link>
          </div>

          {/* Or span */}
          <div className="flex items-center w-[311px] my-2">
            <div className="flex-grow border-t border-customlightGray"></div>
            <span className="px-3 text-sm font-normal text-customlightGray">
              Or
            </span>
            <div className="flex-grow border-t border-customlightGray"></div>
          </div>

          {/* Register button */}
          <Button
            className="w-[311px] h-[38px] bg-customOrange hover:bg-customOrange rounded-[20px] py-6 text-white font-extrabold text-base"
            type="submit"
          >
            Register
          </Button>

          {/* Login link */}
          <div className="text-center text-base text-white font-bold">
            Already Have An Account?
            <Link
              to="/login"
              className="text-customdarkOrange text-base font-bold underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
}
