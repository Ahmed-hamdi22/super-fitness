import ArrowUpRight from "@/components/common/arrow-long-right";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

export default function Hero() {
  // Translation
  const t = useTranslations();

  return (
    <div className="relative w-full h-full bg-[url('/src/assets/bg-form.png')] bg-cover bg-center ">
      <Header />
      <div className="absolute inset-0 bg-light-silver-300 bg-opacity-60 dark:bg-dark-gray-900 dark:bg-opacity-60  backdrop-blur-2xl" />
      {/* Hero Section */}
      <section className="relative z-10  md:pt-16 md:px-8 mx-4">
        <div className=" grid grid-cols-1 md:grid-cols-2  items-center">
          <div>
            {/* Title */}
            <h1 className="text-2xl md:text-5xl lg:text-6xl text-dark-gray-800 dark:text-light-silver-300 font-bold uppercase font-baloo tracking-normal">
              {t.rich("hero-title", {
                span: (value) => <span className="text-flame-orange-500">{value}</span>,
                br: () => <br />,
              })}
            </h1>
            {/* Description */}
            <p className="my-10 text-dark-gray-800 me-32 dark:text-light-silver-300 ps-4 text-sm md:text-base lg:text-lg rlt:text-regi border-s-4 border-flame-orange-500 font-rubik">
              {t("hero-discription")}
            </p>

            {/* Statistics */}
            <div className="mt-4 capitalize text-dark-gray-800 dark:text-light-silver-300 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  text-left  rtl:text-right">
              <div>
                <p className="text-xl font-bold font-inter">{t("hero-active-members")}</p>
                <p className="text-lg font-rubik">{t("hero-active-members-discription")}</p>
              </div>
              <div>
                <p className="text-xl font-bold  font-inter">{t("hero-certified-trainers")}</p>

                <p className="text-lg font-rubik">{t("hero-certified-trainers-discription")}</p>
              </div>
              <div>
                <p className="text-xl font-bold  font-inter">{t("hero-years-experience")}</p>

                <p className="text-lg font-rubik">{t("hero-years-experience-discription")}</p>
              </div>
            </div>

            {/* Get start btn */}
            <div className="mt-8 flex space-y-2 items-center  gap-6">
              <div className="relative">
                <Button className="w-36 h-12 text-base rounded-full me-8 text-light-silver-300 bg-flame-orange-500 relative capitalize">
                  {t("get-started")}
                </Button>
                <ArrowUpRight className="absolute top-1 p-1 right-4 rtl:-right-4 ml-2 w-7 h-7 text-whit  bg-flame-orange-500 rounded-full border-2 border-light-silver-300 text-light-silver-300 " />
              </div>

              {/* Explore classes btn */}
              <div className="relative">
                <Button className="w-36 h-12 text-base rounded-full border-2 border-flame-orange-500 relative text-flame-orange-500 bg-transparent">
                  {t("explore-classes")}
                </Button>
                <ArrowUpRight className="absolute top-1 p-1 -right-4 rtl:-right-4 ml-2 w-7 h-7 text-whit  bg-flame-orange-500 rounded-full border-2 border-light-silver-300 text-light-silver-300 " />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end  lg:mt-0 mt-8">
            <img
              src="/src/assets/images/hero.png"
              alt="Trainer in gym"
              className="w-80 h-96 opacity-90 md:w-[460px] md:h-[650px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
