import React from 'react';

const AssociationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Associations
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with leading institutions and organizations to provide
            our students with unparalleled opportunities.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl text-blue-600 mb-3">🎓</div>
              <p className="text-gray-800 font-medium">Harvard University</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl text-green-600 mb-3">🔬</div>
              <p className="text-gray-800 font-medium">
                National Science Foundation
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl text-purple-600 mb-3">💻</div>
              <p className="text-gray-800 font-medium">
                Google for Education
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl text-red-600 mb-3">📚</div>
              <p className="text-gray-800 font-medium">UNESCO</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl text-teal-600 mb-3">🌍</div>
              <p className="text-gray-800 font-medium">
                World Education Forum
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-5xl text-yellow-600 mb-3">⚗️</div>
              <p className="text-gray-800 font-medium">STEM Alliance</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Partnership Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-300">
                <div className="text-blue-600 mb-4 text-3xl">🔄</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Exchange Programs
                </h4>
                <p className="text-gray-600">
                  International student exchange opportunities with partner
                  institutions worldwide.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-300">
                <div className="text-green-600 mb-4 text-3xl">👨‍🏫</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Guest Lectures
                </h4>
                <p className="text-gray-600">
                  Regular sessions by industry experts and renowned
                  academicians from partner organizations.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-300">
                <div className="text-purple-600 mb-4 text-3xl">💼</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Internship Opportunities
                </h4>
                <p className="text-gray-600">
                  Exclusive internship placements with our corporate and
                  institutional partners.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-300">
                <div className="text-red-600 mb-4 text-3xl">🤝</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Community Projects
                </h4>
                <p className="text-gray-600">
                  Collaborative community service initiatives with local and
                  global organizations.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-300">
                <div className="text-yellow-600 mb-4 text-3xl">🎓</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Scholarship Access
                </h4>
                <p className="text-gray-600">
                  Special scholarship programs and financial aid through our
                  partner network.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-300">
                <div className="text-teal-600 mb-4 text-3xl">🕶️</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Technology Access
                </h4>
                <p className="text-gray-600">
                  Access to cutting-edge technologies and resources from tech
                  industry partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociationsSection;