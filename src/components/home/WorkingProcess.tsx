'use client';

import SectionIcon from "../common/SectionIcon";

const WorkingProcess = () => {
  const steps = [
    {
      year: "2020",
      location: "UAE",
      number: "1"
    },
    {
      year: "2022",
      location: "Qatar",
      number: "2"
    },
    {
      year: "2023",
      location: "Bahrain",
      number: "3"
    },
    {
      year: "2024",
      location: "Saudi Arabia",
      number: "4"
    },
    {
      year: "Future Plan",
      location: "Delivering Anywhere Through Export",
      number: "5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="#5A90A8 text-lg font-medium mb-4 block">
            <SectionIcon />Where We Operate
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Our Working Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[1200px] mx-auto hidden md:block">
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="relative" style={{ flex: '1' }}>
                {/* Year - Above Line */}
                <div className="text-[#002147] font-bold text-xl text-center mb-12">
                  {step.year}
                </div>

                {/* Icon Container */}
                <div className="flex justify-center relative">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="81" viewBox="0 0 41 81" fill="none">
                        <circle cx="20.4663" cy="60.5717" r="15.6166" fill="white" stroke="#5A90A8" strokeWidth="9"/>
                        <line y1="-1.5" x2="46" y2="-1.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 19 2)" stroke="#5A90A8" strokeWidth="3"/>
                        <path d="M41 15L18.5 2.00962L18.5 27.9904L41 15Z" fill="#5A90A8"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Location - Below Line */}
                <div className="text-gray-600 text-sm text-center mt-12 max-w-[150px] mx-auto">
                  {step.location}
                </div>
              </div>
            ))}

            {/* Dotted Line */}
            <div className="absolute top-[105px] left-0 right-0 border-t-2 border-dashed border-[#5A90A8]"></div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-4 mb-8">
              <div className="elementor-icon-box-icon">
                <span className="elementor-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="81" viewBox="0 0 41 81" fill="none">
                    <circle cx="20.4663" cy="60.5717" r="15.6166" fill="white" stroke="#5A90A8" strokeWidth="9"/>
                    <line y1="-1.5" x2="46" y2="-1.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 19 2)" stroke="#5A90A8" strokeWidth="3"/>
                    <path d="M41 15L18.5 2.00962L18.5 27.9904L41 15Z" fill="#5A90A8"/>
                  </svg>
                </span>
              </div>
              <div className="elementor-icon-box-content">
                <h3 className="text-xl font-bold mb-1">
                  {step.year}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
