import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
// ... existing code ...
import { FaUsers, FaCode, FaCogs, FaChartLine, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-dark">
      <div className="container">
        <SectionTitle
          title="Why Choose Stehawk"
          paragraph="We deliver excellence through our core strengths and commitment to innovation"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <SingleFeature 
            feature={{
              id: 1,
              icon: <FaUsers className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
              title: "Expert Team",
              paragraph: "Our team of seasoned professionals brings years of industry experience and technical expertise to every project.",
              // className: "hover:shadow-lg transition-all duration-300"
            }}
          />
          <SingleFeature
            feature={{
              id: 2,
              icon: <FaCode className="w-8 h-8 text-green-600 dark:text-green-400" />,
              title: "Modern Technology",
              paragraph: "We stay ahead of the curve with cutting-edge technologies and best practices in software development.",
              // className: "hover:shadow-lg transition-all duration-300"
            }}
          />
          <SingleFeature
            feature={{
              id: 3,
              icon: <FaCogs className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
              title: "Custom Solutions",
              paragraph: "Tailored solutions designed specifically for your business needs and objectives.",
              // className: "hover:shadow-lg transition-all duration-300"
            }}
          />
          <SingleFeature
            feature={{
              id: 4,
              icon: <FaChartLine className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
              title: "Scalable Solutions",
              paragraph: "Future-proof solutions that grow with your business and adapt to changing needs.",
              // className: "hover:shadow-lg transition-all duration-300"
            }}
          />
          <SingleFeature
            feature={{
              id: 5,
              icon: <FaHeadset className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
              title: "Dedicated Support",
              paragraph: "Continuous support and maintenance to ensure your solutions perform optimally.",
              // className: "hover:shadow-lg transition-all duration-300"
            }}
          />
        </div>
      </div>
    </section>
  );
};
// ... existing code ...

export default Features;
