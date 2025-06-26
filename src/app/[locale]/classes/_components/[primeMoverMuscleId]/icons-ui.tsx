import { ArrowRight } from "lucide-react";

export default function Icons() {
  return (
     <div className="flex items-center gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center gap-4 pl-7">
                  {/* Icon*/}
                  <div className="bg-custom-orange-500 w-9 h-9 flex items-center justify-center rounded-full border-4 border-white">
                    <ArrowRight className="w-5 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  {/* Text*/}
                  <p className="text-base font-bold text-white">Expertly designed workout.</p>
                </div>
              ))}
            </div>
  )
}
