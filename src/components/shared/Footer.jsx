import React from 'react';
import { Rocket, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">NovaStack</span>
            </div>
            <p className="text-gray-400 text-sm">
              Innovating the digital future with scalable, high-performance solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links (Reusing Navigation Logic) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 123 Tech Avenue, Dhaka
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@novastack.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +880 1234 567890
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NovaStack Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;