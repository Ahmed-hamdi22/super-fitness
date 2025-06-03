// HeroPage.jsx
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "use-intl";

export default function HeroPage() {
  const t = useTranslations();

  return (
    <div className=" bg-gray-500 text-white pt-3">
      {/* Hero Section */}
      <section className="py-8 px-4 md:py-16 md:px-8 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left gap-7">
            <h1 className="text-6xl md:text-2xl lg:text-5xl font-bold uppercase">
              {t.rich("hero-title", {
                span: (value) => (
                  <span className="text-orange-500">{value}</span>
                ),
                br: () => <br />,
              })}
            </h1>
            <p className="my-10 pl-4 text-sm md:text-base lg:text-lg text- border-l-4 border-flame-orange-500">
              {t("hero-discription")}
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 text-left lg:text-center">
              <div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold">
                  1200+
                </p>
                <p className="text-xs md:text-sm text-[#242424]">
                  Active Members
                </p>
              </div>
              <div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold">12+</p>
                <p className="text-xs md:text-sm ">Certified Trainers</p>
              </div>
              <div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold ">20+</p>
                <p className="text-xs md:text-sm text-gray-400 ">
                  Year Of Experience
                </p>
              </div>
            </div>
            <div className="mt-8 flex space-y-2 items-center">
              <Button className=" w-[150px] mr-8 rounded-2xl bg-flame-orange-500 relative">
                {" "}
                Get Started
                <ArrowUpRight className="absolute top-3 -right-3 ml-2 w-9 h-9 text-whit  bg-flame-orange-500 rounded-full border-2 border-white " />
              </Button>
              <div className="relative inline-block">
                <Button
                  variant="outline"
                  className=" w-[150px] rounded-2xl border-2 border-flame-orange-500 relative text-flame-orange-500"
                >
                  Explore More
                  <ArrowUpRight className="absolute top-3 -right-3 ml-2 w-9 h-9 text-white bg-flame-orange-500 rounded-full border-2 border-white" />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-10 pl-12">
            <img
              src="/assets/images/hero.png"
              alt="Trainer in gym"
              className="w-[460px] h-[700px] "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
