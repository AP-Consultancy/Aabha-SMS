import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://static.readdy.ai/image/953bd119c83c8d2bfefb1444f876a614/7aa7c763b03c6207e9bbc7154388f1fe.jpeg"
              alt="Aabha Vidya Niketan Logo"
              className="h-16"
            />
            <span className="ml-3 text-xl font-bold text-[#2B3377]">
              Aabha Vidya Niketan
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#about"
              className="text-gray-700 hover:text-[#2B3377] transition-colors duration-300 cursor-pointer"
            >
              About
            </a>
            <a
              href="#admission"
              className="text-gray-700 hover:text-[#2B3377] transition-colors duration-300 cursor-pointer"
            >
              Admission
            </a>
            <a
              href="#achievements"
              className="text-gray-700 hover:text-[#2B3377] transition-colors duration-300 cursor-pointer"
            >
              Achievements
            </a>
            <button className="bg-[#2B3377] text-white px-6 py-2 rounded-lg whitespace-nowrap cursor-pointer hover:bg-[#1a1f4d] transition-colors duration-300">
              Apply Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#2B3377] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-700 hover:text-[#2B3377] transition-colors duration-300 py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#admission"
              className="text-gray-700 hover:text-[#2B3377] transition-colors duration-300 py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Admission
            </a>
            <a
              href="#achievements"
              className="text-gray-700 hover:text-[#2B3377] transition-colors duration-300 py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </a>
            <button className="bg-[#2B3377] text-white px-6 py-3 rounded-lg whitespace-nowrap cursor-pointer hover:bg-[#1a1f4d] transition-colors duration-300 text-left">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;