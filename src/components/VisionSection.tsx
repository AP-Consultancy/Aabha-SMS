import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Shaping the Future of Education
            </h3>
            <p className="text-gray-600 mb-6">
              Our vision is to be a globally recognized institution that
              nurtures innovative thinkers, responsible citizens, and
              compassionate leaders who contribute positively to society and
              drive meaningful change.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    Fostering creativity and innovative thinking through
                    cutting-edge educational approaches.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 p-3 rounded-full text-white mr-4">
                  <span className="text-xl">🌎</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Global Perspective
                  </h4>
                  <p className="text-gray-600">
                    Preparing students to thrive in an interconnected world
                    with cultural awareness and global competence.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-full text-white mr-4">
                  <span className="text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Character Development
                  </h4>
                  <p className="text-gray-600">
                    Building ethical leaders with strong values, integrity,
                    and a commitment to service.
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Learn More About Our Approach
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=futuristic%20education%20concept%20with%20holographic%20displays%2C%20students%20engaged%20in%20innovative%20learning%2C%20high-tech%20classroom%20with%20digital%20interfaces%2C%20bright%20and%20inspiring%20educational%20environment%20with%20blue%20and%20green%20color%20scheme&width=600&height=600&seq=4&orientation=squarish"
                alt="Our Vision"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-3 rounded-full text-white mr-3">
                    <span className="text-xl">❝</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium italic">
                      "Education is not the filling of a pail, but the
                      lighting of a fire."
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      - William Butler Yeats
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;