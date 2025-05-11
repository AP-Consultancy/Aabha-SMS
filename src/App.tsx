import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AdmissionSection from './components/AdmissionSection';
import VisionSection from './components/VisionSection';
import AchievementsSection from './components/AchievementsSection';
import ExploreSection from './components/ExploreSection';
import AssociationsSection from './components/AssociationsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import HowToApplySection from './components/HowToApplySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add animation classes to elements
    const addAnimation = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        element.classList.add("opacity-0", "transition-all", "duration-1000");
      });
    };

    addAnimation();
    
    // Update document title
    document.title = "Aabha Vidya Niketan - Excellence in Education";
    
    // Update favicon if needed
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "https://static.readdy.ai/image/953bd119c83c8d2bfefb1444f876a614/7aa7c763b03c6207e9bbc7154388f1fe.jpeg";
    }
  }, []);

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdmissionSection />
      <VisionSection />
      <AchievementsSection />
      <ExploreSection />
      <AssociationsSection />
      <WhyChooseUsSection />
      <HowToApplySection />
      <Footer />
    </div>
  );
};

export default App;