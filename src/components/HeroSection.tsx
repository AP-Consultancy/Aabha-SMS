import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center bg-white transition-all duration-1000 ${
        isHeroVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#1a1a1a]">
              Welcome to{" "}
              <span className="text-[#4052F6]">Aabha Vidya Niketan</span>{" "}
              School
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Transform your career with our CPD-accredited courses in
              Finance, Health & Safety, and Environmental Safety. Expert-led
              training designed for success.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#2B3377] text-white px-6 py-3 rounded-lg whitespace-nowrap cursor-pointer hover:bg-[#1a1f4d] transition-colors duration-300">
                Get Started
              </button>
              <button className="bg-white text-[#2B3377] px-6 py-3 border border-[#2B3377] rounded-lg whitespace-nowrap cursor-pointer hover:bg-gray-50 transition-colors duration-300 flex items-center">
                View Courses <span className="ml-2">→</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-[#2B3377] mb-2">
                  500+
                </h3>
                <p className="text-gray-600 text-sm">
                  Certified Professionals
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#2B3377] mb-2">
                  98%
                </h3>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#2B3377] mb-2">
                  50+
                </h3>
                <p className="text-gray-600 text-sm">Expert Instructors</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://static.readdy.ai/image/953bd119c83c8d2bfefb1444f876a614/25c3f2fb659e3a68e3ddce4b480dd5b1.png"
              alt="Aabha Vidya Niketan Campus"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-full shadow-md flex items-center space-x-2">
              <span className="text-[#4052F6]">✓</span>
              <div className="text-sm">
                <p className="font-medium text-gray-900">CPD Accredited</p>
                <p className="text-gray-600 text-xs">Industry Recognized</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full shadow-md flex items-center space-x-2">
              <p className="text-sm text-gray-600">Designed by</p>
              <span className="text-[#4052F6]">✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;