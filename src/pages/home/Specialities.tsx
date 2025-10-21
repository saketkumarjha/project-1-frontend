import { ArrowRight, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface Specialty {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
}

const specialties: Specialty[] = [
  {
    id: 1,
    title: 'Ophthalmology',
    description: 'Lorem ipsum dolor sit amet consectetur venenatis nisl et in quis fermentum vel magna.',
    imageAlt: 'Ophthalmology specialist icon'
  },
  {
    id: 2,
    title: 'Pathology',
    description: 'Lorem ipsum dolor sit amet consectetur venenatis nisl et in quis fermentum vel magna.',
    imageAlt: 'Pathology specialist icon'
  },
  {
    id: 3,
    title: 'Pulmonology',
    description: 'Lorem ipsum dolor sit amet consectetur venenatis nisl et in quis fermentum vel magna.',
    imageAlt: 'Pulmonology specialist icon'
  },
  {
    id: 4,
    title: 'Cardiology',
    description: 'Lorem ipsum dolor sit amet consectetur venenatis nisl et in quis fermentum vel magna.',
    imageAlt: 'Cardiology specialist icon'
  }
];

const SpecialtiesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
          {/* Left Content - Header */}
          <div className="space-y-6 lg:space-y-8">
            <span className="inline-block text-teal-600 font-bold text-xs uppercase tracking-widest bg-white/50 px-4 py-2 rounded-full">
              SPECIALTIES
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
              Our wide range of specialities
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur venenatis nisl et in quis fermentum vel magna.
            </p>

            <button className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
              Browse All Specialties
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Right Content - Scrollable Cards Container */}
          <div className="relative overflow-hidden">
            {/* Scrollable Cards */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 pr-12"
            >
              {specialties.map((specialty) => (
                <div 
                  key={specialty.id}
                  className="flex-shrink-0 w-[300px] sm:w-[320px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
                >
                  {/* Icon Placeholder */}
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center">
                      <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-teal-600 font-bold">Icon</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {specialty.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {specialty.description}
                    </p>
                    <button className="flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors group-hover:gap-3">
                      Read More
                      <ArrowRight size={16} className="transition-all" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Right Button - Positioned inside container */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
              aria-label="Scroll right to see more specialties"
            >
              <ChevronRight className="text-teal-600 group-hover:text-teal-700" size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style>{`
        .overflow-x-auto {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default SpecialtiesSection;