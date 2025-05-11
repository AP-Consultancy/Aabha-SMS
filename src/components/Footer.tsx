import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B3377] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="https://static.readdy.ai/image/953bd119c83c8d2bfefb1444f876a614/7aa7c763b03c6207e9bbc7154388f1fe.jpeg"
                alt="Aabha Vidya Niketan Logo"
                className="h-20 bg-white p-2 rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white">
                  Aabha Vidya Niketan
                </h3>
                <p className="text-sm text-gray-300">Bhopal M.P.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Inspiring excellence and innovation in education since 1995.
              Preparing students for success in a rapidly changing world.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <SocialIcon network="facebook" />
              <SocialIcon network="twitter" />
              <SocialIcon network="instagram" />
              <SocialIcon network="linkedin" />
              <SocialIcon network="youtube" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#admission"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#explore"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Campus Tour
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  News & Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <ContactItem icon="📍" text="123 Education Avenue, Innovation District, CA 90210" />
              <ContactItem icon="📞" text="+1 (555) 123-4567" />
              <ContactItem icon="✉️" text="info@aabhavidyaniketan.edu" />
              <ContactItem icon="⏰" text="Monday - Friday: 8:00 AM - 5:00 PM" />
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>
                &copy; 2025 Aabha Vidya Niketan, Bhopal M.P. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
      >
        ↑
      </a>
    </footer>
  );
};

// Helper components for Footer
const SocialIcon: React.FC<{ network: string }> = ({ network }) => {
  return (
    <a
      href="#"
      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
    >
      {network === 'facebook' && 'f'}
      {network === 'twitter' && 'X'}
      {network === 'instagram' && '📷'}
      {network === 'linkedin' && 'in'}
      {network === 'youtube' && '▶️'}
    </a>
  );
};

const ContactItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
  return (
    <li className="flex items-start">
      <span className="text-blue-400 mt-1 mr-3">{icon}</span>
      <span className="text-gray-400">{text}</span>
    </li>
  );
};

export default Footer;