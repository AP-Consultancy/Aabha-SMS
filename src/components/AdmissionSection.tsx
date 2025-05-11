import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AdmissionSection: React.FC = () => {
  const admissionRef = useRef<HTMLDivElement>(null);
  const isAdmissionVisible = useIntersectionObserver(admissionRef);

  return (
    <section
      ref={admissionRef}
      id="admission"
      className={`py-20 bg-white transition-all duration-1000 ${
        isAdmissionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-white mb-8 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Admissions Open for 2025-2026
                  </h2>
                  <p className="text-blue-100 text-lg mb-6">
                    Limited seats available. Application deadline: June 30,
                    2025
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
                      Apply Now
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg shadow-md hover:bg-white/10 transition-colors duration-300">
                      Admission Guide
                    </button>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full md:w-auto">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-4">
                      Application Timeline
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-3xl font-bold">12</div>
                        <div className="text-sm">Days Left</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-3xl font-bold">85%</div>
                        <div className="text-sm">Seats Filled</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-3xl font-bold">3</div>
                        <div className="text-sm">Phases</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-3xl font-bold">2</div>
                        <div className="text-sm">Test Dates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-800 px-8 md:px-12 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-white mb-4 md:mb-0">
                  <span className="text-blue-200">
                    Need help with your application?
                  </span>
                </div>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                    Contact Admissions
                  </button>
                  <button className="bg-transparent border border-blue-300 text-blue-100 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700/30 transition-colors duration-300">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;