import ArrowUpRight from "@/components/common/arrow-long-right";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import { useTranslations } from "use-intl";

export default function AboutUs() {
  // Translations
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
    <section className="w-full bg-white  mb-14">
      <div className="mx-auto px-4 sm:px-6 lg:py-8 max-w-screen-xl">
        {/*  Grid  */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 lg:gap-y-0 gap-y-12 items-center">
          {/* Images */}
          <div className="relative w-fit flex gap-4 items-start">
            {/* Big image */}
            <div>
              <img
                src="/assets/images/trainer-1.png"
                alt="Trainer 1"
                className="w-[203.41px] h-[307.96px] rounded-[10.23px] md:w-[300px] md:h-[540px] md:rounded-xl"
              />
            </div>

            {/* Small images */}
            <img
              src="/assets/images/trainer-2.png"
              alt="Trainer 2"
              className="w-[126.14px] h-[106.84px] rounded-[10.23px] mt-10 md:w-56 md:h-44 md:rounded-xl"
            />
            <img
              src="/assets/images/trainer-3.png"
              alt="Trainer 3"
              className="w-[200.57px] h-[256.93px] md:w-[345px] md:h-[400px] rounded-xl absolute top-40 md:top-60 -end-1 rtl:end-0 z-10"
            />
          </div>

          {/* Text content */}
          <div className="rtl:text-right mt-8 ">
            <div className="relative mb-8">
              <h2 className="absolute sm:-top-6 ltr:left-0 rtl:right-0 rtl:left-auto text-5xl sm:text-7xl font-extrabold font-montserrat uppercase text-gray-200 opacity-30  z-0">
                {t("about-us-title")}
              </h2>

              {/* About us*/}
              <div className="relative z-10 flex items-center gap-2 -bottom-6 ">
                <Dumbbell className="w-5 h-5 text-flame-orange-500 rotate-45" />
                <span className="text-sm font-semibold text-flame-orange-500">
                  {t("about-us")}
                </span>
              </div>
            </div>

            {/*  About us description */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-dark-gray-800 mb-4 leading-[1.2]">
              {t.rich("fitness-headline", {
                span: (v) => <span className="text-flame-orange-500">{v}</span>,
              })}
            </h2>

            <p className="text-dark-gray-800 mb-12  pt-5 text-sm sm:text-base leading-10">
              {t("services-description")}
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-8  border-gray-200 pt-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rtl:text-right"
                >
                  <div>
                    <div className="flex items-center  ms-1 gap-2">
                      {/* Icon */}
                      <ArrowUpRight className="w-6 h-6 text-flame-orange-500 mt-1" />

                      {/* Title */}
                      <h4 className="font-semibold text-dark-gray-800 text-lg mb-1 capitalize">
                        {service.title}
                      </h4>
                    </div>
                    {/*  Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get started button */}
            <Button className="capitalize w-[150px] mr-8 mt-8 rounded-2xl bg-flame-orange-500 relative rtl:flex-row-reverse">
              {t("get-started")}
              <ArrowUpRight className="absolute top-3 rtl:-rotate-90 -right-3 rtl:-left-3 rtl:right-36 ml-2 w-9 h-9 text-white bg-flame-orange-500 rounded-full border-2 border-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
