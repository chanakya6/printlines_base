import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
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
                <p className="text-gray-400">printlinesindia@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-400">+91 90141 44141</p>
                <p className="text-gray-400">+91 99121 52949</p>
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
  );
};

export default Contact;
