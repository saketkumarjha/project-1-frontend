import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageAlt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Arlene McCoy',
    role: 'Patient',
    company: 'Johns Clinic, Patient since 2019',
    content: 'During a recent medical emergency, I was rushed to emergency department. The speed and precision with which they acted were remarkable.',
    rating: 5,
    imageAlt: 'Arlene McCoy testimonial'
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Patient',
    company: 'Healthcare Center, Patient since 2020',
    content: 'The medical staff provided exceptional care during my treatment. Their professionalism and compassion made all the difference in my recovery.',
    rating: 5,
    imageAlt: 'John Doe testimonial'
  },
  {
    id: 3,
    name: 'Jane Smith',
    role: 'Patient',
    company: 'Medical Center, Patient since 2018',
    content: 'Outstanding service and care. The doctors and nurses went above and beyond to ensure my comfort and successful treatment.',
    rating: 5,
    imageAlt: 'Jane Smith testimonial'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Header */}
          <div className="space-y-6">
            <span className="inline-block text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-4 py-2 rounded-full">
              TESTIMONIALS
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
              Our Testimonials
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              These are some customer testimonials who are satisfied with the place and service we have provided.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-teal-500 text-gray-600 hover:text-white transition-all flex items-center justify-center group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-teal-500 text-gray-600 hover:text-white transition-all flex items-center justify-center group"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <Star 
                    key={index} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-700 font-bold text-lg">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;