import React, { useState, useEffect } from "react";
import { Printer, Menu, X } from "lucide-react";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import hpyImg from "./images/hpy.jpeg";

// import { useRef } from "react";
import AudioPlayer from "./pages/AudioPlayer";

export default function App() {
  // New Year popup image imported from local images folder
  const FESTIVAL_IMAGE = hpyImg;
  // Popup state
  const [showPopup, setShowPopup] = useState(true);

  // Just close popup on interaction
  const handlePopupInteraction = () => {
    setShowPopup(false);
  };
  // Show popup on mount/refresh
  useEffect(() => {
    setShowPopup(true);
  }, []);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { width, height } = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // const parallaxFast = scrollY * 0.7;

  return (
    <>
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Festival Popup */}
        {showPopup && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60"
            onClick={handlePopupInteraction}
          >
            {/* Confetti Bash Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <ReactConfetti width={width} height={height} />
            </div>
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-purple-600 text-2xl font-bold"
                onClick={handlePopupInteraction}
                aria-label="Close popup"
              >
                &times;
              </button>
              <img src={FESTIVAL_IMAGE} alt="Happy New Year" />
            </div>
            {/* Confetti CSS */}
            <style>{`
            .confetti {
              position: absolute;
              top: -40px;
              width: 12px;
              height: 24px;
              border-radius: 3px;
              opacity: 0.85;
              animation: confetti-fall 2.5s linear infinite;
            }
                <audio ref={audioRef} src={mySound} loop autoPlay />
              0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.85;
              }
              80% {
                opacity: 0.85;
              }
              100% {
                transform: translateY(110vh) rotate(360deg) scale(0.7);
                opacity: 0.2;
              }
            }
          `}</style>
          </div>
        )}
        {/* Animated Background Elements */}
        <Home setActiveSection={setActiveSection} setMenuOpen={setMenuOpen} />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div
                className="flex items-center space-x-2"
                onClick={() => scrollToSection("home")}
              >
                <Printer className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Print Lines
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {["home", "about", "services", "clients", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize transition-all duration-300 ${
                        activeSection === section
                          ? "text-purple-400 font-semibold"
                          : "text-gray-300 hover:text-purple-300"
                      }`}
                    >
                      {section}
                    </button>
                  )
                )}
              </div>

              <div className="space-x-1">
                <AudioPlayer />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
              <div className="px-4 py-4 space-y-3">
                {["home", "about", "services", "clients", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left capitalize py-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {section}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Home Section */}

        {/* About Section */}
        <About mousePosition={mousePosition} />

        {/* Services Section */}
        <Services />

        {/* Clients Section */}
        <Clients />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
