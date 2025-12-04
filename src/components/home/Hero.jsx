import React from 'react';
import Button from '../shared/Button';
import { ArrowRight, Play, Zap, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-slate-900 via-purple-900/80 to-indigo-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Animated Blobs */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-80 -right-80 w-96 h-96 rounded-full bg-purple-700 opacity-40 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-80 -left-80 w-96 h-96 rounded-full bg-indigo-600 opacity-30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full text-sm font-semibold mb-8">
          <Zap className="w-4 h-4" /> Trusted by 50+ Companies
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-linear-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl mb-6">
          Building the <br />
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
            Digital Future
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300/90 mb-12 leading-relaxed">
          Delivering scalable, innovative software solutions with React and cutting-edge technologies to accelerate your business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} className="shadow-lg hover:shadow-indigo-500/40">
            Start Your Project
          </Button>
          <Button to="/about" variant="outline" size="lg" icon={Play} className="text-white hover:bg-indigo-900/50 border-white/40">
            Learn More
          </Button>
        </div>

        {/* Stats grid */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-12 max-w-4xl mx-auto text-left sm:text-center">
          <div>
            <p className="text-4xl font-extrabold text-indigo-400">50+</p>
            <p className="mt-1 text-sm font-semibold text-gray-300">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-purple-400">99.9%</p>
            <p className="mt-1 text-sm font-semibold text-gray-300">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-400">24h</p>
            <p className="mt-1 text-sm font-semibold text-gray-300">Response Time</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-pink-400">5+</p>
            <p className="mt-1 text-sm font-semibold text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Custom keyframe animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
