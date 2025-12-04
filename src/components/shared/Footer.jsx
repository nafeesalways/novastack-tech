import React, { useState } from "react";
import { Link } from "react-router"; 
import {
  Rocket,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Send,
  Loader2,
  Check
} from "lucide-react";
import Button from "./Button"; 

const Footer = () => {
  // State for Newsletter Action
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call (1.5s delay)
    setTimeout(() => {
      setStatus("success");
      setEmail(""); // Clear input
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Centered on Mobile (text-center), Left on Desktop (md:text-left) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* 1. Brand Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-indigo-500" />
              <span className="text-2xl font-bold tracking-tight">NovaStack</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Innovating the digital future with scalable, high-performance solutions for modern businesses.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: Twitter, href: "https://x.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Facebook, href: "https://facebook.com" }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-center md:items-start">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400 flex flex-col items-center md:items-start">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-1" />
                <span>123 Tech Avenue, Gulshan 2,<br />Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <a href="mailto:hello@novastack.com" className="hover:text-white transition-colors">hello@novastack.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <a href="tel:+8801234567890" className="hover:text-white transition-colors">+880 1234 567890</a>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter (New Section) */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest tech updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 max-w-xs mx-auto md:mx-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === 'loading' || status === 'success'}
                className="bg-slate-900 border border-slate-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50"
              />
              
              <Button
                type="submit"
                variant={status === 'success' ? 'success' : 'primary'}
                fullWidth
                size="sm"
                disabled={status === 'loading' || status === 'success'}
                className={status === 'success' ? "bg-green-600! border-green-600!" : ""}
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                ) : status === 'success' ? (
                  <><Check className="w-4 h-4 mr-2" /> Subscribed!</>
                ) : (
                  <><Send className="w-4 h-4 mr-2" /> Subscribe</>
                )}
              </Button>
            </form>
            
            {status === 'success' && (
              <p className="text-green-400 text-xs mt-2 font-medium animate-pulse">
                Successfully subscribed!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} NovaStack Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
