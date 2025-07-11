import DumbbellIcon from "@/components/common/dumbbell";
import WorkoutsLogo from "@/components/common/logo";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideBotMessageSquare, LucideSend, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslations } from "use-intl";
import { z } from "zod";

export default function ContactUsPage() {
  // Translations
  const t = useTranslations();

  // Validation
  const formSchema = z.object({
    name: z.string().nonempty(t("name-is-required")),
    email: z
      .string()
      .nonempty(t("email-is-required"))
      .email({ message: t("email-is-invalid") }),
    message: z.string().nonempty(t("message-is-required")),
  });

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = form.handleSubmit(async () => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t("thank-you-for-contacting-us"));

    form.reset();
    setIsSubmitting(false);
  });

  return (
    <>
      <Header />
      <div className="font-baloo py-5 dark:bg-dark-gray-900">
        <div className="container">
          <div className="relative mb-8">
            {/* Title  */}
            <span className="absolute sm:-top-4 ltr:left-0 rtl:right-0 rtl:left-auto">
              <WorkoutsLogo text={t("contact")} />
            </span>

            {/* Icon */}
            <div className="relative z-10 flex items-center gap-2 -bottom-6 capitalize">
              <DumbbellIcon text={t("contact-us-if-you-have-any-issues")} />
            </div>
          </div>

          {/* Contact form */}
          <div className="text-dark-gray-900 dark:text-white">
            <div className="p-6">
              <div className="border-dark-light-silver-900 dark:border-light-silver-900 border rounded-lg p-6 mb-8">
                <Form {...form}>
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <User size={16} className="inline mr-2 rtl:ml-2" />
                              {t("name")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("type-your-name-here")}
                                type="text"
                                {...field}
                                className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-orange-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <Mail size={16} className="inline mr-2 rtl:ml-2" />
                              {t("email")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("type-your-email-here")}
                                type="email"
                                {...field}
                                className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-o"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <LucideBotMessageSquare size={16} className="inline mr-2 rtl:ml-2" />
                            {t("message")}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("type-your-message-here")}
                              {...field}
                              className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-o"
                              rows={5}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit button */}
                    <div className="md:col-span-2 flex gap-4 mt-6">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex items-center gap-2 px-6 py-3 dark:text-dark-gray-900 rounded-lg transition-colors ${isSubmitting ? "bg-light-silver-900 cursor-not-allowed" : "bg-flame-orange-600 hover:bg-flame-orange-700"}`}
                      >
                        <LucideSend size={16} />
                        {isSubmitting ? t("sending") : t("send-message")}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
