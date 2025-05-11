import React, { useRef, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import * as echarts from 'echarts';

const AboutSection: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsChartRef = useRef<HTMLDivElement>(null);
  const isAboutVisible = useIntersectionObserver(aboutRef);

  useEffect(() => {
    if (statsChartRef.current && isAboutVisible) {
      const statsChart = echarts.init(statsChartRef.current);
      const statsOption = {
        animation: false,
        radar: {
          indicator: [
            { name: "Academic Excellence", max: 100 },
            { name: "Sports", max: 100 },
            { name: "Arts & Culture", max: 100 },
            { name: "Innovation", max: 100 },
            { name: "Community Service", max: 100 },
          ],
          splitArea: {
            areaStyle: {
              color: ["rgba(114, 172, 209, 0.05)", "rgba(114, 172, 209, 0.1)"],
            },
          },
        },
        series: [
          {
            name: "School Performance",
            type: "radar",
            data: [
              {
                value: [95, 88, 92, 85, 90],
                name: "Performance Metrics",
                areaStyle: {
                  color: "rgba(64, 158, 255, 0.6)",
                },
              },
            ],
          },
        ],
      };
      statsChart.setOption(statsOption);
      window.addEventListener("resize", () => {
        statsChart.resize();
      });
      
      return () => {
        statsChart.dispose();
        window.removeEventListener("resize", () => {
          statsChart.resize();
        });
      };
    }
  }, [isAboutVisible]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        isAboutVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Aabha Vidya Niketan
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 1995, we have been at the forefront of educational
            innovation for over 25 years.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20school%20campus%20with%20diverse%20students%20and%20teachers%20interacting%20in%20a%20high-tech%20learning%20environment%2C%20innovative%20classroom%20setting%2C%20digital%20displays%2C%20collaborative%20spaces%2C%20bright%20and%20airy%20interior%20with%20natural%20light&width=600&height=400&seq=3&orientation=landscape"
                alt="School Campus"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">
                    Our state-of-the-art campus
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">
                  25+
                </div>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">
                  5,000+
                </div>
                <p className="text-gray-600">Alumni Worldwide</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">
                  150+
                </div>
                <p className="text-gray-600">Expert Faculty</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">
                  98%
                </div>
                <p className="text-gray-600">Graduation Rate</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6">
              Aabha Vidya Niketan was founded with a vision to redefine
              education for the modern era. What began as a small institution
              with just 50 students has now grown into one of the region's
              most prestigious educational establishments.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to academic excellence, innovative teaching
              methodologies, and holistic development has earned us
              recognition both nationally and internationally.
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Performance Metrics
              </h4>
              <div ref={statsChartRef} className="w-full h-80"></div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                Meet Our Team
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300">
                Our History
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;