import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';

const heroImages = [hero1, hero2, hero3, hero4, hero5];

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen overflow-hidden flex items-center justify-center bg-black transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeCarousel`}
            style={{
              animationDelay: `${index * 5}s`,
              animationDuration: `${heroImages.length * 5}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for contrast */}
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 text-center px-6 mt-20">
        <h1 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
          Welcome to
        </h1>
        {/* <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right,rgb(78, 95, 245), rgb(48, 38, 185), #4f46e5, #4f46e5, #3730a3,rgb(78, 95, 245))',
            }}
          >
            Aabha Vidya Niketan
          </span>{" "}
          School
        </h1> */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg  color-white p-2 rounded-lg"
        style={{
              backgroundImage:
                'linear-gradient(to right,rgb(78, 95, 245), rgb(48, 38, 185), #4f46e5, #4f46e5, #3730a3,rgb(78, 95, 245))',
            }}>
          <span
            className=""
          >
            Aabha Vidya Niketan
          </span>{" "}
          School
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
