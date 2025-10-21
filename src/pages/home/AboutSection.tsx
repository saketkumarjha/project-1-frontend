import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import doctorTeam from "../../assets/images/doctorTeam.jpg";
const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <span className="inline-block text-teal-600 font-bold text-xs uppercase tracking-widest bg-white/50 px-4 py-2 rounded-full">
              ABOUT US
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
              Our caring doctors are here for you
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet consectetur venenatis nisl at quis fermentum vel magna magna risus eget turpis at lacus quam effam integer eget dolor.
            </p>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={doctorTeam}
                    alt="Dr. Carter"
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-100"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = '<div class="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-lg">DC</div>';
                      }
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                    "Our goal is to provide you with the necessary resources and advices to turn my business idea"
                  </p>
                  <p className="font-bold text-gray-900 text-sm">Dr. Carter</p>
                </div>
              </div>
            </div>

            <Button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold px-8 py-6 text-base rounded-lg group shadow-md hover:shadow-lg transition-all">
              Book an Appointment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Right Content - Doctor Image with Stats */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:ml-auto">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img 
                  src={doctorTeam}
                  alt="Healthcare Professionals"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 text-sm">Doctors Team</div>';
                    }
                  }}
                />
              </div>

              {/* Stats Card */}
              <div className="absolute bottom-8 left-0 right-0 mx-4 sm:left-0 sm:right-auto sm:mx-0 bg-white rounded-3xl shadow-2xl p-6 max-w-[280px]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-teal-500 rounded-full p-3">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Happy Clients */}
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-100 rounded-full p-2.5">
                      <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">10k</p>
                      <p className="text-sm text-gray-600">Happy Clients</p>
                    </div>
                  </div>

                  <div className="h-px bg-gray-200"></div>

                  {/* Positive Reviews */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">⭐</div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">700+</p>
                      <p className="text-sm text-gray-600">Positive reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;