import { Phone, Menu, X, LogIn, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect} from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Freeze background scroll when modal is open
  useEffect(() => {
    if (showLoginModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showLoginModal]);

  const loginOptions = [
    { role: "Admin", href: "#" },
    { role: "Staff", href: "#" },
    { role: "Accountant", href: "#" },
  ];

  const handleLoginClick = (role: string) => {
    setSelectedRole(role);
    setShowLoginModal(true);
    setIsLoginOpen(false);
    setIsMenuOpen(false);
  };

  const handleLoginSubmit = () => {
    // Add your login logic here
    console.log("Login submitted for:", selectedRole);
    console.log("Username:", username);
    console.log("Password:", password);
    setShowLoginModal(false);
  };

  return (
    <>
      <header className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold tracking-tight">
                HEALTH<span className="text-gray-900">CARE</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <a
                href="#home"
                className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#doctors"
                className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                Admin
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                Room Management
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                Bill
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                Report
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
              >
                Register Patient
              </a>
            </nav>

            {/* Contact & Login Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+6285785500687"
                className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+62 85 7855 0687</span>
              </a>

              {/* Login Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsLoginOpen(!isLoginOpen)}
                  className="flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors shadow-md"
                >
                  <LogIn size={16} />
                  <span className="text-sm font-medium">Login</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isLoginOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isLoginOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {loginOptions.map((option) => (
                      <button
                        key={option.role}
                        onClick={() => handleLoginClick(option.role)}
                        className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {option.role}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#doctors"
                  className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
                >
                  Admin
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
                >
                  Room Management
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
                >
                  Bill
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
                >
                  Report
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
                >
                  Register Patient
                </a>

                {/* Mobile Contact */}
                <a
                  href="tel:+6285785500687"
                  className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors w-fit shadow-md"
                >
                  <Phone size={16} />
                  <span className="text-sm font-medium">+62 85 7855 0687</span>
                </a>

                {/* Mobile Login Options */}
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Login As
                  </p>
                  {loginOptions.map((option) => (
                    <button
                      key={option.role}
                      onClick={() => handleLoginClick(option.role)}
                      className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium py-2 w-full text-left"
                    >
                      <LogIn size={16} />
                      {option.role}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal Overlay */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Blurred Background Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowLoginModal(false)}
          ></div>

          {/* Login Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 transform transition-all">
            {/* Close Button */}
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="text-teal-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedRole} Login
              </h2>
              <p className="text-gray-600 text-sm">
                Enter your credentials to access your dashboard
              </p>
            </div>

            {/* Login Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  Forgot password?
                </a>
              </div>

              <button
                onClick={handleLoginSubmit}
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-md"
              >
                Sign In as {selectedRole}
              </button>
            </div>

            {/* Additional Info */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Having trouble logging in?{" "}
              <a
                href="#"
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
