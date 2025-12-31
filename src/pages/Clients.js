import React, { useState, useEffect } from "react";

const clients = [
  {
    name: "Sai Mandir New Jersey",
    logo: "https://omsrisaibalajitemple.org/images/home/slider5.jpg",
    testimonial: "Excellent quality and service!",
  },
  {
    name: "Sri Sai Dutta Pettam, New Jersey",
    logo: "https://rammandir2024.org/wp-content/uploads/2024/04/IMG-20240406-WA0145.jpg",
    testimonial: "Very reliable and professional.",
  },
  {
    name: "Sri Shiva Vishnu Temple, New Jersey",
    logo: "https://www.pureenergywindow.com/wp-content/uploads/2022/08/Venkateshwara-Swamy-Temple.jpg",
    testimonial: "Outstanding print results every time.",
  },
  {
    name: "Sri Karapage Ganapathi Temple and Community Center, CA",
    logo: "https://img.p.mapq.st/?url=https://s3-media0.fl.yelpcdn.com/bphoto/AK6zKJFxMHHE9NbSMRSU6A/l.jpg?w=3840&q=75",
    testimonial: "Fast delivery and great communication.",
  },
];

export default function Clients() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const getVisibleClients = () => {
    const arr = [];
    for (let i = -1; i <= 1; i++) {
      arr.push(clients[(index + i + clients.length) % clients.length]);
    }
    return arr;
  };

  return (
    <section id="clients" className="relative py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            We are trusted by clients worldwide. Here are some of our valued
            customers.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 select-none">
          {getVisibleClients().map((client, idx) => (
            <div
              key={client.name}
              className={`transition-all duration-500 flex flex-col items-center bg-slate-800/60 border border-purple-500/20 rounded-xl px-8 py-6 shadow-sm ${
                idx === 1
                  ? "scale-110 z-10 shadow-lg border-purple-400"
                  : "opacity-60"
              }`}
              style={{ minWidth: 220, maxWidth: 260 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-purple-100"
              />
              <div className="font-bold text-white text-lg mb-1">
                {client.name}
              </div>
              <div className="text-gray-300 text-sm italic text-center">
                "{client.testimonial}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
