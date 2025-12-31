import { Globe, Package, Printer, Sparkles } from "lucide-react";
import React from "react";

const About = ({ mousePosition }) => {
  return (
    <section id="about" className="relative py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Print Lines
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
              Print Lines is a premier design and printing service specializing
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
  );
};

export default About;
