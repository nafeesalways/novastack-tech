import React from 'react';
import Hero from '../components/home/Hero';
import { Code, Cloud, Shield, ArrowRight } from 'lucide-react';
import Button from '../components/shared/Button';
import { Reveal } from '../components/animations/Reveal';
import TiltCard from '../components/animations/TiltCard';

const Home = () => {
  return (
    <div className="bg-slate-50 text-gray-800 overflow-hidden">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We build robust digital solutions tailored to your business needs using the latest tech stack.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Wrapped in TiltCard + Reveal */}
            <Reveal delay={0.2} width="100%">
              <TiltCard className="h-full">
                <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <Code className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Custom Development</h3>
                  <p className="text-gray-600">
                    Scalable web applications built with React and Node.js, designed for performance and growth.
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            {/* Service 2 */}
            <Reveal delay={0.4} width="100%">
              <TiltCard className="h-full">
                <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Cloud className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Cloud Solutions</h3>
                  <p className="text-gray-600">
                    Secure cloud infrastructure setup and management to ensure your business is always online.
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            {/* Service 3 */}
            <Reveal delay={0.6} width="100%">
              <TiltCard className="h-full">
                <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Cybersecurity</h3>
                  <p className="text-gray-600">
                    Protecting your data and digital assets with enterprise-grade security protocols.
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

            {/* 3. Testimonials Section */}
      <section className="py-20 bg-slate-900 text-white mb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-slate-800 p-8 rounded-2xl relative">
              <p className="text-lg text-gray-300 italic mb-6">
                "NovaStack transformed our outdated platform into a modern, high-speed application. Their attention to detail is unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white">JD</div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-400">CEO, TechStream</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-800 p-8 rounded-2xl relative">
              <p className="text-lg text-gray-300 italic mb-6">
                "Professional, timely, and technically brilliant. The team went above and beyond to meet our tight deadline."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white">AS</div>
                <div>
                  <h4 className="font-semibold">Sarah Amin</h4>
                  <p className="text-sm text-gray-400">CTO, CreativeHub</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. Creative Stats Section (New Addition) */}
      <section className="py-16 bg-indigo-600 text-white mb-5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {[
             { label: "Projects Done", value: "120+" },
             { label: "Happy Clients", value: "50+" },
             { label: "Years Exp.", value: "5+" },
             { label: "Team Members", value: "15" }
           ].map((stat, idx) => (
             <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-4">
                  <h4 className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</h4>
                  <p className="text-indigo-200 font-medium">{stat.label}</p>
                </div>
             </Reveal>
           ))}
        </div>
      </section>

     
      
    </div>
  );
};

export default Home;
