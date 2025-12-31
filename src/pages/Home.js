import { Calendar, Globe, Printer, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

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
  const parallaxOffset = scrollY * 0.5;
  const parallaxSlow = scrollY * 0.3;

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            top: `${20 - parallaxSlow * 0.1}%`,
            left: `${10 + mousePosition.x * 0.02}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            bottom: `${20 - parallaxSlow * 0.15}%`,
            right: `${10 - mousePosition.x * 0.01}%`,
            transform: `translate(50%, 50%)`,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"
          style={{
            top: `${50 + mousePosition.y * 0.05}%`,
            left: `${50 + mousePosition.x * 0.05}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      </div>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            backgroundImage: `radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div
            className="mb-8"
            style={{
              transform: `translateY(${-scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY / 500),
            }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Global Design
              </span>
              <br />
              <span className="text-white">& Print Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Specializing in traditional calendars, visiting cards, and custom
              designs exported worldwide
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Floating Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
            style={{
              transform: `translateY(${-scrollY * 0.1}px)`,
              opacity: Math.max(0, 1 - scrollY / 600),
            }}
          >
            {[
              {
                icon: Calendar,
                title: "Traditional Calendars",
                desc: "Telugu & multilingual designs",
              },
              {
                icon: Globe,
                title: "Global Export",
                desc: "Shipping worldwide, focusing US",
              },
              {
                icon: Printer,
                title: "Premium Printing",
                desc: "High-quality print solutions",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <item.icon className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
