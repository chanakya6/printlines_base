import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Package,
  Printer,
  Sparkles,
  X,
} from "lucide-react";
import React, { useState } from "react";

const Services = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Gallery data for different categories
  const galleries = {
    calendars: [
      {
        url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
        title: "Traditional Calendar 2025",
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

  return (
    <>
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
                desc: "Multilingual traditional calendars with authentic panchangam details, festivals, and cultural elements designed for diaspora communities",
                icon: Calendar,
                color: "from-purple-600 to-pink-600",
                gallery: "calendars",
              },
              {
                title: "Business Cards",
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
    </>
  );
};

export default Services;
