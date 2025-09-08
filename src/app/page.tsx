"use client";

import { useState, useEffect } from "react";

export default function HelloPage() {
  const [mounted, setMounted] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  const greetings = [
    "Hello, World! 👋",
    "Welcome! ✨",
    "Greetings! 🌟",
    "Hi there! 🎉"
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [greetings.length]);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-8">
          {/* Animated Greeting */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              {greetings[currentGreeting]}
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur-lg opacity-20 animate-pulse"></div>
          </div>

          {/* Subtitle */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              Welcome to Our Beautiful Hello Page
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience modern web design with elegant typography, smooth animations, 
              and responsive layouts that look great on every device.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white font-bold">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Modern Design</h3>
            <p className="text-gray-600">
              Clean, contemporary aesthetics with careful attention to typography and spacing.
            </p>
          </div>

          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white font-bold">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsive</h3>
            <p className="text-gray-600">
              Perfectly optimized for desktop, tablet, and mobile experiences.
            </p>
          </div>

          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-white font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Performance</h3>
            <p className="text-gray-600">
              Built with Next.js for optimal performance and seamless user experience.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50">
              Learn More
            </button>
          </div>
          
          <p className="text-sm text-gray-500">
            Built with ❤️ using Next.js, Tailwind CSS, and modern web technologies
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-30 animate-bounce animation-delay-1000"></div>
      </div>
    </main>
  );
}