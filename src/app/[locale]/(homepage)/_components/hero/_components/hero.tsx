import ArrowUpRight from "@/components/common/arrow-long-right";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

export default function Hero() {
  // Translation
  const t = useTranslations();

  return (
    <div className="relative w-full h-full bg-[url('/assets/bg-form.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-2xl" />
      {/* Hero Section */}
      <section className="relative z-10 py-8 md:py-16 md:px-8 mx-4">
        <div className=" grid grid-cols-1 md:grid-cols-2  items-center">
          <div className="">
            {/* Title */}
            <h1 className="text-[24px] md:text-5xl lg:text-6xl font-bold uppercase font-baloo leading-[120%] tracking-normal">
              {t.rich("hero-title", {
                span: (value) => <span className="text-flame-orange-500">{value}</span>,
                br: () => <br />,
              })}
            </h1>
            {/* Description */}
            <p className="my-10 ps-4 text-sm md:text-base lg:text-lg rlt:text-r border-s-4 border-flame-orange-500 ">
              {t("hero-discription")}
            </p>

            {/* Statistics */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 text-left lg:text-center rtl:text-right">
              <div>
                <p className="text-xl  text-dark-gray-800 font-bold">{t("hero-active-members")}</p>
                <p className="text-lg  text-dark-gray-800 capitalize">
                  {t("hero-active-members-discription")}
                </p>
              </div>
              <div>
                <p className="text-xl  text-dark-gray-800 font-bold">
                  {t("hero-certified-trainers")}
                </p>

                <p className="text-lg  text-dark-gray-800 capitalize">
                  {t("hero-certified-trainers-discription")}
                </p>
              </div>
              <div>
                <p className="text-xl  text-dark-gray-800 font-bold">
                  {t("hero-years-experience")}
                </p>

                <p className="text-lg  text-dark-gray-800 capitalize">
                  {t("hero-years-experience-discription")}
                </p>
              </div>
            </div>

            {/* Get start btn */}
            <div className="mt-8 flex space-y-2 items-center">
              <div className="relative">
                <Button className=" w-36 me-8 rounded-2xl bg-flame-orange-500 relative capitalize">
                  {t("get-started")}
                </Button>
                <ArrowUpRight className="absolute top-1 p-[2px] right-4 rtl:-right-4 ml-2 w-6 h-6 text-whit  bg-flame-orange-500 rounded-full border-2 border-white text-white " />
              </div>
              {/* Explore classes btn */}

              <div className="relative">
                <Button className="w-36 rounded-2xl border-2 border-flame-orange-500 relative text-flame-orange-500 bg-white">
                  {t("explore-classes")}
                </Button>
                <ArrowUpRight className="absolute top-1 p-[2px] -right-4 rtl:-right-4 ml-2 w-6 h-6 text-whit  bg-flame-orange-500 rounded-full border-2 border-white text-white " />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end  lg:mt-0 mt-8">
            <img
              src="/assets/images/hero.png"
              alt="Trainer in gym"
              className="w-[343px] h-[528px] opacity-90 md:w-[460px] md:h-[650px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
