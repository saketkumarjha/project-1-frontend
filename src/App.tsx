import Header from "./pages/home/Header";
import HeroSection from "./pages/home/HeroSection";
import SearchDoctor from "./pages/home/SearchDoctor";
import AboutSection from "./pages/home/AboutSection";
import ProfessionalsSection from "./pages/home/ProfessionalsSection";
import SpecialtiesSection from "./pages/home/Specialities";
import TestimonialsSection from "./pages/home/TestimonialSection";
import BlogSection from "./pages/home/BlogSection";
import Footer from "./pages/home/Footer";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SearchDoctor />
        <AboutSection />
        <ProfessionalsSection />
        <SpecialtiesSection />
        <TestimonialsSection />
        <BlogSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
