import { ArrowRight, Phone, Menu } from "lucide-react";
import { Button } from '@/components/ui/button';
import hero from "../../assets/images/hero.jpg";
import hero2 from "../../assets/images/hero-2.jpg";
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight">
              Digital way to take medical services.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              We help you to start get best medical service & make your life
              more easier.
            </p>

            <Button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold px-8 py-6 text-base rounded-lg group shadow-md hover:shadow-lg transition-all">
              Book an Appointment
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative order-1 lg:order-2">
            {/* Discount Card - Positioned at top right */}
            <div className="absolute top-8 lg:top-12 right-0 lg:-right-4 bg-white rounded-2xl shadow-xl p-5 sm:p-6 w-[220px] sm:w-[260px] z-20">
              <div className="flex items-start gap-3">
                <div className="bg-teal-500 rounded-full p-2.5 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight mb-1">
                    Get the Discount 30%
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    for the first time
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Image Container */}
            <div className="relative max-w-lg mx-auto lg:ml-auto mt-20 lg:mt-0">
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img
                  src={hero}
                  alt="Professional Healthcare Doctor"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-gray-500 text-sm">Doctor Image</div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Preview Card */}
      <div className="absolute bottom-8 right-8 hidden xl:block">
        <div className="w-[280px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-900">
          {/* Mobile Header */}
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 flex items-center justify-between">
            <div className="text-sm font-bold">
              HEALTH<span className="text-gray-900">CARE</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <Phone className="w-3 h-3 text-white" />
              </div>
              <div className="bg-gray-900 rounded-lg p-2">
                <Menu className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 space-y-3">
            <h2 className="text-lg font-bold text-gray-900 leading-tight">
              Digital way to take medical services.
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              We help you to start get best medical service & make your life
              more easier.
            </p>

            {/* Mobile Doctor Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl aspect-[4/5] flex items-center justify-center text-gray-500 text-[10px]">
                <img
                  src={hero2}
                  alt="Professional Healthcare Doctor"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-gray-500 text-sm">Doctor Image</div>';
                    }
                  }}
                />
              </div>

              {/* Mobile Discount Badge */}
              <div className="absolute top-2 left-2 bg-white rounded-xl shadow-lg p-3 text-[10px] w-32 ">
                <div className="flex items-start gap-2">
                  <div className="bg-teal-500 rounded-full p-1">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">
                      Get the Discount 30%
                    </p>
                    <p className="text-gray-600">for the first time</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-teal-500 text-gray-900 font-semibold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1">
              Book an Appointment
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
