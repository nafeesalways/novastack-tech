import React from 'react';
import Hero from '../components/home/Hero'; // Adjust path if your Hero is in specific folder
import { Code, Cloud, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/shared/Button';

const Home = () => {
  return (
    <div className="bg-slate-50 text-gray-800">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We build robust digital solutions tailored to your business needs using the latest tech stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Custom Development</h3>
              <p className="text-gray-600">
                Scalable web applications built with React and Node.js, designed for performance and growth.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Cloud Solutions</h3>
              <p className="text-gray-600">
                Secure cloud infrastructure setup and management to ensure your business is always online.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Cybersecurity</h3>
              <p className="text-gray-600">
                Protecting your data and digital assets with enterprise-grade security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-20 bg-slate-900 text-white">
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

      {/* 4. CTA Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 50+ companies who trust NovaStack for their digital transformation.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Get a Free Consultation
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;