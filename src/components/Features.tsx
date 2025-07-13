import { ReactNode } from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const features: FeatureProps[] = [
  {
    title: "Practice Tests",
    description: "Download Microsoft 365 documents test files to practice your skills.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Split-Screen Timer Interface",
    description: "Work alongside a split-screen timer interface for a realistic test environment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  // {
  //   title: "Automated Grading",
  //   description: "Upload completed files for fully automated grading and detailed feedback.",
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  //     </svg>
  //   ),
  // },
  {
    title: "Progress Tracking",
    description: "Track progress and view multiple test attempts with detailed history.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Computer Literacy Journey
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Follow our guided path to master essential computer skills and excel in your university tests.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* The timeline line with animated gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-600"></div>
          
          <div className="relative">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`mb-24 relative ${
                  index % 2 === 0 
                    ? "text-right sm:pr-12 md:pr-16" 
                    : "text-left sm:pl-12 md:pl-16"
                } flex flex-col items-center sm:block`}
              >
                {/* Timeline connector and icon - adjusted for better mobile positioning */}
                <div className="relative mb-8 sm:mb-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/4 z-20">
                  <div className="h-16 w-16 rounded-full bg-indigo-100 border-4 border-indigo-200 flex items-center justify-center shadow-lg">
                    <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content card - adjusted for mobile */}
                <div 
                  className={`bg-white p-6 rounded-lg shadow-md w-full sm:max-w-md ${
                    index % 2 === 0 
                      ? "sm:mr-auto sm:ml-0 md:mr-0 md:ml-auto" 
                      : "sm:ml-auto sm:mr-0 md:ml-0 md:mr-auto"
                  } relative z-10 transition-transform hover:scale-105 hover:shadow-xl mt-4 sm:mt-0`}
                >
                  <span className={`hidden sm:block absolute top-6 ${
                    index % 2 === 0 ? "-right-3" : "-left-3"
                  } h-6 w-6 bg-white transform rotate-45`}></span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 sm:text-left">{feature.title}</h3>
                  <p className="text-gray-600 sm:text-left">{feature.description}</p>
                  <div className="mt-4 text-xs text-gray-400 sm:text-left">Step {index + 1}</div>
                </div>
              </div>
            ))}
            
            {/* Timeline End Point */}
            <div className="flex justify-center mt-8">
              <div className="bg-white p-4 rounded-full shadow-lg border-2 border-indigo-500">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
