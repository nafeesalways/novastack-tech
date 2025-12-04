import React from 'react';
import { Users, Target, Heart, Linkedin, Twitter, Mail } from 'lucide-react';
import Button from '../components/shared/Button';

const About = () => {
  // Data for Team Members
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      bio: 'Visionary leader with 10+ years in tech innovation.',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Lead Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      bio: 'Full-stack expert obsessed with scalable architecture.',
    },
    {
      id: 3,
      name: 'David Smith',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      bio: 'Bridging the gap between user needs and technical solutions.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Page Header */}
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About NovaStack</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Innovating the digital landscape with passion, precision, and people-first technology.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 2. Story / Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2020, NovaStack began as a small group of passionate developers with a single goal: to make enterprise-grade software accessible to growing businesses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we have grown into a full-service technology partner, helping clients across the globe navigate the complexities of the digital world. We believe in code that works and designs that inspire.
            </p>
          </div>
          {/* Improved Image Styling */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
             <img 
               src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&auto=format&fit=crop&q=60" 
               alt="NovaStack Office" 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
             />
          </div>
        </div>

        {/* 3. Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-indigo-50 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
            <Target className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">Our Mission</h3>
            <p className="text-gray-600">To empower businesses with scalable technology solutions that drive real-world results.</p>
          </div>
          <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">Our Vision</h3>
            <p className="text-gray-600">To be the global standard for innovation, quality, and reliability in software engineering.</p>
          </div>
          <div className="p-8 bg-pink-50 rounded-2xl border border-pink-100 hover:shadow-lg transition-shadow">
            <Heart className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-slate-900">Our Values</h3>
            <p className="text-gray-600">Integrity, continuous learning, and a customer-obsessed approach to development.</p>
          </div>
        </div>

        {/* 4. Team Section (Updated Professional UI) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
             The brilliant minds dedicated to building your digital future.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
              >
                {/* Image Container with Ring Effect */}
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-50 group-hover:ring-indigo-100 transition-all duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-full transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 text-gray-400 hover:text-slate-800 hover:bg-gray-100 rounded-full transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. CTA */}
        <div className="bg-slate-900 rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
            <p className="mb-8 text-gray-300 text-lg">We are always looking for new challenges and exciting projects.</p>
            <Button to="/contact" variant="primary" size="lg">Contact Us Today</Button>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-800 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-800 rounded-full blur-3xl opacity-20"></div>
        </div>

      </div>
    </div>
  );
};

export default About;