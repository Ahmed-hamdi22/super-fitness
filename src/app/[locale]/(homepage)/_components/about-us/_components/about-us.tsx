
import ArrowUpRight from "@/components/common/arrow-long-right";
import DumbbellIcon from "@/components/common/dumbbell";
import WorkoutsLogo from "@/components/common/workouts-logo";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

export default function AboutUs() {
  const t = useTranslations();

  // Services data
  const services = [
    {
      title: t("personal-trainer"),
      description: t("description-one"),
    },
    {
      title: t("cardio-programs"),
      description: t("description-cardio"),
    },
    {
      title: t("quality-quipment"),
      description: t("description-quality"),
    },
    {
      title: t("healthy-nutritions"),
      description: t("description-nutritions"),
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-dark-gray-900 backdrop-blur-[86px]">
      <div className="mx-auto px-4 sm:px-6 mb-32 md:mb-0 lg:py-8 max-w-screen-xl">
        {/*  Grid  */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 lg:gap-y-0 gap-y-12 items-center">
          {/* Images */}
          <div className="relative w-fit flex gap-4 items-start">
            {/* Big image */}
            <div>
              <img
                src="/src/assets/images/trainer-1.png"
                alt="Trainer 1"
                className="w-[203.41px] h-[307.96px] rounded-[10.23px] md:w-[300px] md:h-[540px] md:rounded-xl"
              />
            </div>

            {/* Small images */}
            <img
              src="/src/assets/images/trainer-2.png"
              alt="Trainer 2"
              className="w-[126.14px] h-[106.84px] rounded-[10.23px] mt-10 md:w-56 md:h-44 md:rounded-xl"
            />
            <img
              src="/src/assets/images/trainer-3.png"
              alt="Trainer 3"
              className="w-[200.57px] h-[256.93px] md:w-[345px] md:h-[400px] rounded-xl absolute top-40 md:top-60 -end-1 rtl:end-0 z-10"
            />
          </div>

          {/* Text content */}
          <div className="rtl:text-right mt-8 ">
            <div className="relative mb-8   ">
              {/* Title  */}
              <span className="absolute sm:-top-4 ltr:left-0 rtl:right-0 rtl:left-auto ">
                <WorkoutsLogo text={t("aboutus")} />
              </span>

              {/* Icon and label for about us */}
              <div className="relative z-10 flex items-center gap-2 -bottom-6 capitalize ">
                <DumbbellIcon text={t("about-us")} />
              </div>
            </div>

            {/*  About us description */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-dark-gray-800 dark:text-light-silver-300 mb-4 leading-[1.2] font-baloo me-4">
              {t.rich("fitness-headline", {
                span: (v) => <span className="text-flame-orange-500">{v}</span>,
              })}
            </h2>

            <p className="text-dark-gray-800 dark:text-light-silver-300 mb-12   pt-5 text-lg leading-10 font-rubik">
              {t("services-description")}
            </p>

            {/* Services grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-8 border-gray-200 pt-6 ">
              {Array.from({ length: Math.floor(services.length / 2) }, (_, i) => {
                const group = services.slice(i * 2, i * 2 + 2);
                return (
                  <div key={i} className="flex flex-col gap-6 col-span-1 sm:col-span-2">
                    {/* Map */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                      {group.map((service, index) => (
                        <div key={index} className="flex items-start gap-4 rtl:text-right">
                          <div>
                            <div className="flex items-center ms-1 gap-2 mb-4">
                              {/* Icon */}
                              <ArrowUpRight className="w-4 h-4 text-flame-orange-500 " />

                              {/* Title */}
                              <h4 className="font-bold font-baloo text-dark-gray-800 dark:text-light-silver-300 text-base mb-1 capitalize">
                                {service.title}
                              </h4>
                            </div>
                            {/*  Description */}
                            <p className="text-lg font-baloo text-dark-gray-800 dark:text-light-silver-300 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Border */}
                    {i === 0 && <div className="w-full h-px bg-gray-200 my-3"></div>}
                  </div>
                );
              })}
            </div>

            {/* Get started button */}

            <div className="relative">
              <Button className=" w-36 me-8 text-light-silver-300 rounded-3xl bg-flame-orange-500 relative capitalize">
                {t("get-started")}
              </Button>
              <ArrowUpRight className="absolute top-1 p-[2px] left-32 rtl:-right-5 ms-2 w-6 h-6 text-whit  bg-flame-orange-500 rounded-full border-2 border-light-silver-300 text-light-silver-300 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
