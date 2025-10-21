import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hospital from "../assets/images/hospital.jpg";
import professionalTeam from "../assets/images/professionalTeam.jpg";
const ProfessionalsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hospital}
          alt="Hospital background"
          className="w-full h-full object-cover"
        />
        {/* White overlay with opacity */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Team Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto lg:mr-auto">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={professionalTeam}
                  alt="Healthcare Professional Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <span className="inline-block text-teal-600 font-bold text-xs uppercase tracking-widest bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              OUR PROFESSIONALS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
              We have a highly trained team
            </h2>

            <Button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold px-8 py-6 text-base rounded-lg group shadow-md hover:shadow-lg transition-all">
              Meet our team
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
