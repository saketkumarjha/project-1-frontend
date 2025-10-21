import { Facebook, Instagram, Twitter, Youtube, Phone, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Book Appointment Section */}
      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block text-teal-600 font-bold text-xs uppercase tracking-widest bg-white/50 px-4 py-2 rounded-full">
                BOOK NOW
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
                Book your medical appointment today
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Call Button */}
              <button className="flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg min-w-[240px] justify-center group">
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                Book an appointment
              </button>

              {/* Online Button */}
              <button className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg border-2 border-gray-900 min-w-[240px] justify-center group">
                <User size={20} className="group-hover:scale-110 transition-transform" />
                Book an appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                HEALTH<span className="text-gray-900">CARE</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                These are some customer testimonials who are satisfied with the place and service we have provided.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 pt-2">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-teal-500 text-gray-600 hover:text-white transition-all flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-teal-500 text-gray-600 hover:text-white transition-all flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-teal-500 text-gray-600 hover:text-white transition-all flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-teal-500 text-gray-600 hover:text-white transition-all flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Homepage Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Homepage</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Medical Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Our Specialist
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    How we work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Press Release
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Security Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              All Rights Reserved HealthCare 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;