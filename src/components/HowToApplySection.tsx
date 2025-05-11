import React from 'react';

const HowToApplySection: React.FC = () => {
  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How to Apply
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to becoming part of the Aabha Vidya Niketan community
            starts here.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    📝
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Step 1
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-3">
                    Submit Application
                  </h4>
                  <p className="text-gray-600">
                    Complete the online application form with all required
                    information and documentation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    ✅
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Step 2
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-3">
                    Entrance Assessment
                  </h4>
                  <p className="text-gray-600">
                    Complete the required assessments and interviews as part
                    of our selection process.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    🎓
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Step 3
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-3">
                    Enrollment
                  </h4>
                  <p className="text-gray-600">
                    Upon acceptance, complete the enrollment process and
                    prepare to join our community.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Important Dates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      📅
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Application Deadline
                      </p>
                      <p className="text-gray-600">June 30, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      📋
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Entrance Exams
                      </p>
                      <p className="text-gray-600">July 15-20, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      💬
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Interviews</p>
                      <p className="text-gray-600">July 25-30, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      ✉️
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Results Announcement
                      </p>
                      <p className="text-gray-600">August 15, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Required Documents
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">
                        Completed application form
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">
                        Academic transcripts
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">
                        Two recommendation letters
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">
                        Personal statement
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">
                        Identification documents
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">
                        Recent passport-sized photograph
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4">
                        ✉️
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Email</p>
                        <p className="text-gray-600">
                          admissions@aabhavidyaniketan.edu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4">
                        📞
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4">
                        📍
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">
                          Admissions Office
                        </p>
                        <p className="text-gray-600">
                          123 Education Avenue, Innovation District, CA 90210
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mt-1 mr-4">
                        🕒
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">
                          Office Hours
                        </p>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Start Your Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApplySection;