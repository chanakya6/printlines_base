import React, { useState, useEffect } from "react";
import {
  Calendar,
  Globe,
  Printer,
  Mail,
  Menu,
  X,
  Package,
  Sparkles,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  const parallaxFast = scrollY * 0.7;

  // Gallery data for different categories
  const galleries = {
    calendars: [
      {
        url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
        title: "Telugu Traditional Calendar 2025",
      },
      {
        url: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=800",
        title: "Festival Calendar Design",
      },
      {
        url: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800",
        title: "Panchangam Calendar",
      },
      {
        url: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800",
        title: "Multilingual Calendar",
      },
    ],
    visitingCards: [
      {
        url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800",
        title: "Premium Business Cards",
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        title: "Corporate Card Design",
      },
      {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
        title: "Luxury Finish Cards",
      },
    ],
    printing: [
      {
        url: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800",
        title: "Brochure Printing",
      },
      {
        url: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800",
        title: "Poster Designs",
      },
      {
        url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
        title: "Flyer Printing",
      },
    ],
  };

  const openGallery = (category) => {
    setCurrentGallery(galleries[category] || []);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setCurrentGallery([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentGallery.length) % currentGallery.length
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Image Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-10 bg-purple-600 hover:bg-purple-700 rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl">
            {/* Image */}
            <div className="relative aspect-video bg-slate-900/50 rounded-2xl overflow-hidden">
              <img
                src={currentGallery[currentImageIndex]?.url}
                alt={currentGallery[currentImageIndex]?.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image Title */}
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-purple-300">
                {currentGallery[currentImageIndex]?.title}
              </h3>
              <p className="text-gray-400 mt-2">
                {currentImageIndex + 1} / {currentGallery.length}
              </p>
            </div>

            {/* Navigation Arrows */}
            {currentGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 rounded-full p-3 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 rounded-full p-3 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
              {currentGallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "border-purple-500 scale-110"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Printer className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Printlines
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "services", "contact"].map((section) => (
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
              ))}
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
              {["home", "about", "services", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
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
              Specializing in Telugu traditional calendars, visiting cards, and
              custom designs exported worldwide
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

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Printlines
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-500"
              style={{
                transform: `perspective(1000px) rotateY(${
                  mousePosition.x * 0.01 - 5
                }deg) rotateX(${-mousePosition.y * 0.01 + 5}deg)`,
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-purple-300">
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Printlines is a premier design and printing service specializing
                in creating beautiful, culturally rich calendars and marketing
                materials. We take pride in preserving Telugu traditions while
                embracing modern design aesthetics.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With expertise in international export and a focus on the US
                market, we bridge cultures through exceptional print quality and
                authentic designs that resonate with communities worldwide.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Expert Design",
                  desc: "Professional designers with cultural expertise",
                  icon: Sparkles,
                },
                {
                  title: "Quality Printing",
                  desc: "State-of-the-art printing technology",
                  icon: Printer,
                },
                {
                  title: "Global Reach",
                  desc: "Export services to major international markets",
                  icon: Globe,
                },
                {
                  title: "Custom Solutions",
                  desc: "Tailored designs for every client need",
                  icon: Package,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 bg-slate-800/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:translate-x-2"
                >
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Comprehensive design and printing services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Calendars",
                desc: "Telugu traditional calendars with authentic panchangam details, festivals, and cultural elements designed for diaspora communities",
                icon: Calendar,
                color: "from-purple-600 to-pink-600",
                gallery: "calendars",
              },
              {
                title: "Multilingual Designs",
                desc: "Calendar designs in multiple languages catering to diverse cultural communities worldwide",
                icon: Globe,
                color: "from-blue-600 to-purple-600",
                gallery: "calendars",
              },
              {
                title: "Visiting Cards",
                desc: "Professional business cards with premium finishes, custom designs, and quick turnaround times",
                icon: Sparkles,
                color: "from-pink-600 to-red-600",
                gallery: "visitingCards",
              },
              {
                title: "Custom Printing",
                desc: "Wide range of printing services including brochures, flyers, posters, and promotional materials",
                icon: Printer,
                color: "from-indigo-600 to-blue-600",
                gallery: "printing",
              },
              {
                title: "Export Services",
                desc: "Reliable international shipping and export services, with special focus on US market delivery",
                icon: Package,
                color: "from-purple-600 to-blue-600",
                gallery: null,
              },
              {
                title: "Design Consultation",
                desc: "Expert design guidance and custom solutions for all your printing and branding needs",
                icon: Sparkles,
                color: "from-pink-600 to-purple-600",
                gallery: null,
              },
            ].map((service, idx) => (
              <div
                key={idx}
                onClick={() => service.gallery && openGallery(service.gallery)}
                className={`group relative bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  service.gallery ? "cursor-pointer" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />
                <div
                  className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                {service.gallery && (
                  <div className="mt-4 text-purple-400 text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view gallery
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="text-gray-300 mt-6 text-lg">
              Ready to bring your design vision to life? Contact us today
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-400">info@printlines.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:col-span-2">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-400">
                    Serving clients globally with focus on US market
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for your message! We will get back to you soon."
                  );
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl px-8 py-4 font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Printer className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Printlines
            </span>
          </div>
          <p className="text-gray-400">
            © 2025 Printlines. All rights reserved. | Design & Print Solutions
            for Global Markets
          </p>
        </div>
      </footer>
    </div>
  );
}
