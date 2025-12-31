import { Printer } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t border-purple-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Printer className="w-6 h-6 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Print Lines
          </span>
        </div>
        <p className="text-gray-400">
          © 2025 Print Lines. All rights reserved. | Design & Print Solutions
          for Global Markets
        </p>
      </div>
    </footer>
  );
};

export default Footer;
