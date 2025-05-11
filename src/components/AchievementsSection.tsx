import React, { useRef, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import * as echarts from 'echarts';

const AchievementsSection: React.FC = () => {
  const achievementsRef = useRef<HTMLDivElement>(null);
  const achievementsChartRef = useRef<HTMLDivElement>(null);
  const isAchievementsVisible = useIntersectionObserver(achievementsRef);

  useEffect(() => {
    if (achievementsChartRef.current && isAchievementsVisible) {
      const achievementsChart = echarts.init(achievementsChartRef.current);
      const achievementsOption = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["2020", "2021", "2022", "2023", "2024"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "National Awards",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [12, 15, 18, 22, 28],
            color: "#4e73df",
          },
          {
            name: "State Awards",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [18, 22, 26, 30, 35],
            color: "#36b9cc",
          },
          {
            name: "Regional Awards",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
            },
            data: [25, 30, 35, 42, 48],
            color: "#1cc88a",
          },
        ],
      };
      achievementsChart.setOption(achievementsOption);
      window.addEventListener("resize", () => {
        achievementsChart.resize();
      });
      
      return () => {
        achievementsChart.dispose();
        window.removeEventListener("resize", () => {
          achievementsChart.resize();
        });
      };
    }
  }, [isAchievementsVisible]);

  return (
    <section
      ref={achievementsRef}
      id="achievements"
      className={`py-20 bg-white transition-all duration-1000 ${
        isAchievementsVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition of our commitment to excellence in education and
            innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Recent Accolades
            </h3>
            <div
              ref={achievementsChartRef}
              className="w-full h-80 mb-8"
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-3">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Best STEM Program
                </h4>
                <p className="text-gray-600">
                  National Education Excellence Awards, 2024
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-3">
                  <span className="text-3xl">🏅</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Innovation in Education
                </h4>
                <p className="text-gray-600">Global Education Summit, 2023</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-purple-600 mb-3">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Sports Excellence
                </h4>
                <p className="text-gray-600">
                  Regional Sports Federation, 2024
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-yellow-600 mb-3">
                  <span className="text-3xl">⭐</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Sustainability Champion
                </h4>
                <p className="text-gray-600">
                  Green Schools Initiative, 2023
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Student Achievements
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20female%20student%20with%20a%20confident%20smile%2C%20graduation%20cap%2C%20academic%20achievement%2C%20diverse%20ethnicity%2C%20clean%20background%2C%20professional%20portrait&width=80&height=80&seq=5&orientation=squarish"
                    alt="Student"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Sarah Johnson
                    </h4>
                    <p className="text-gray-600">Class of 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  National Science Olympiad Gold Medalist and recipient of the
                  Presidential Scholarship to MIT.
                </p>
                <div className="flex items-center text-blue-600">
                  <span className="mr-2">🎓</span>
                  <span>Computer Science & Artificial Intelligence</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20male%20student%20with%20a%20confident%20smile%2C%20academic%20achievement%2C%20diverse%20ethnicity%2C%20clean%20background%2C%20professional%20portrait%2C%20graduation%20attire&width=80&height=80&seq=6&orientation=squarish"
                    alt="Student"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      David Chen
                    </h4>
                    <p className="text-gray-600">Class of 2023</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  International Robotics Competition Winner and published
                  researcher in the Journal of Young Scientists.
                </p>
                <div className="flex items-center text-green-600">
                  <span className="mr-2">🤖</span>
                  <span>Robotics & Engineering</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20female%20student%20with%20a%20confident%20smile%2C%20academic%20achievement%2C%20diverse%20ethnicity%2C%20clean%20background%2C%20professional%20portrait%2C%20arts%20and%20music%20focus&width=80&height=80&seq=7&orientation=squarish"
                    alt="Student"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Maya Patel
                    </h4>
                    <p className="text-gray-600">Class of 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Young Artist of the Year and recipient of the National Arts
                  Merit Scholarship to Juilliard.
                </p>
                <div className="flex items-center text-purple-600">
                  <span className="mr-2">🎵</span>
                  <span>Fine Arts & Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;