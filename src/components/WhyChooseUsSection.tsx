import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Aabha Vidya Niketan
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart and why we're the right choice for
            your educational journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=innovative%20classroom%20with%20students%20engaged%20in%20project-based%20learning%2C%20modern%20educational%20technology%2C%20collaborative%20environment%2C%20bright%20and%20inspiring%20space%20with%20blue%20and%20green%20accents&width=400&height=250&seq=8&orientation=landscape"
                alt="Innovative Curriculum"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovative Curriculum
              </h3>
              <p className="text-gray-600 mb-4">
                Our curriculum goes beyond traditional education, integrating
                project-based learning, real-world applications, and
                future-ready skills development.
              </p>
              <div className="flex items-center text-blue-600 cursor-pointer">
                <span className="mr-2">Learn more</span>
                <span>→</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20expert%20teachers%20mentoring%20students%2C%20professional%20educational%20setting%2C%20engaging%20teaching%20methods%2C%20supportive%20learning%20environment%20with%20blue%20and%20green%20color%20elements&width=400&height=250&seq=9&orientation=landscape"
                alt="Expert Faculty"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Expert Faculty
              </h3>
              <p className="text-gray-600 mb-4">
                Our educators are leaders in their fields, bringing a wealth
                of knowledge, experience, and passion to inspire and guide our
                students.
              </p>
              <div className="flex items-center text-blue-600 cursor-pointer">
                <span className="mr-2">Meet our faculty</span>
                <span>→</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=state%20of%20the%20art%20educational%20facilities%2C%20modern%20school%20infrastructure%2C%20high%20tech%20learning%20spaces%2C%20science%20labs%2C%20sports%20facilities%2C%20library%20with%20blue%20and%20green%20design%20elements&width=400&height=250&seq=10&orientation=landscape"
                alt="World-Class Facilities"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                World-Class Facilities
              </h3>
              <p className="text-gray-600 mb-4">
                Our campus features state-of-the-art facilities including
                advanced laboratories, modern libraries, sports complexes, and
                creative spaces.
              </p>
              <div className="flex items-center text-blue-600 cursor-pointer">
                <span className="mr-2">Explore our campus</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Schedule a Campus Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;