import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ExploreSection: React.FC = () => {
  const exploreRef = useRef<HTMLDivElement>(null);
  const isExploreVisible = useIntersectionObserver(exploreRef);

  return (
    <section
      ref={exploreRef}
      id="explore"
      className={`py-20 bg-white transition-all duration-1000 ${
        isExploreVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our School
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our campus and discover the facilities that
            make Aabha Vidya Niketan special.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20school%20campus%20aerial%20view%2C%20futuristic%20educational%20architecture%2C%20green%20spaces%2C%20sports%20facilities%2C%20innovative%20building%20design%20with%20blue%20and%20green%20color%20elements&width=600&height=400&seq=14&orientation=landscape"
                alt="Campus Overview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/80 backdrop-blur-sm text-blue-600 p-4 rounded-full shadow-lg hover:bg-white transition-colors duration-300">
                  <span className="text-2xl">▶</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Virtual Campus Tour
            </h3>
            <p className="text-gray-600 mb-6">
              Experience our campus from anywhere in the world with our
              interactive virtual tour. Explore our classrooms, laboratories,
              sports facilities, and more.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <span>🧪</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    State-of-the-art Science Labs
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <span>💻</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Advanced Technology Centers
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <span>🎭</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Performing Arts Complex
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-100 text-yellow-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <span>🏃</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Olympic-sized Sports Facilities
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Start Virtual Tour
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20school%20library%20with%20digital%20resources%2C%20students%20studying%2C%20bookshelves%2C%20reading%20areas%2C%20educational%20technology%20with%20blue%20and%20green%20design%20elements&width=400&height=250&seq=15&orientation=landscape"
                alt="Library"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Library & Resource Center
              </h3>
              <p className="text-gray-600">
                Our modern library features over 50,000 books, digital
                resources, and collaborative study spaces.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=high%20tech%20school%20science%20laboratory%20with%20students%20conducting%20experiments%2C%20modern%20equipment%2C%20interactive%20displays%2C%20STEM%20education%20with%20blue%20and%20green%20color%20theme&width=400&height=250&seq=16&orientation=landscape"
                alt="Science Labs"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Science & Innovation Labs
              </h3>
              <p className="text-gray-600">
                Specialized laboratories for physics, chemistry, biology,
                robotics, and engineering projects.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20school%20sports%20complex%20with%20indoor%20courts%2C%20swimming%20pool%2C%20fitness%20center%2C%20students%20engaged%20in%20athletic%20activities%20with%20blue%20and%20green%20design%20elements&width=400&height=250&seq=17&orientation=landscape"
                alt="Sports Complex"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sports & Recreation Complex
              </h3>
              <p className="text-gray-600">
                World-class facilities including indoor and outdoor courts,
                swimming pool, and fitness center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;