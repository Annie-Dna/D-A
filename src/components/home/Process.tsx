'use client';
import Image from 'next/image';
import SectionIcon from '../common/SectionIcon';

const Process = () => {
  const steps = [
    {
      year: "2020",
      location: "UAE",
      image: "/images/uae.jpg",
      number: "1"
    },
    {
      year: "2022",
      location: "Qatar",
      image: "/images/qatar.jpg",
      number: "2"
    },
    {
      year: "2023",
      location: "Bahrain",
      image: "/images/bahrain.jpg",
      number: "3"
    },
    {
      year: "2024",
      location: "Saudi Arabia",
      image: "/images/saudi.jpg",
      number: "4"
    },
    {
      year: "Future Plan",
      location: "Delivering Anywhere Through Export",
      image: "/images/global.jpg",
      number: "5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="#5A90A8 text-lg font-medium mb-4 block">
            <SectionIcon />Our Journey
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Where We Operate
          </h2>
        </div>

        {/* Timeline Steps */}
        <div className="flex flex-wrap justify-center">
          {steps.map((step, index) => (
            <div key={step.number} className="relative w-full md:w-1/3 lg:w-1/5 px-4 mb-10 md:mb-0">
              {/* Step Content */}
              <div className="relative text-center">
                {/* Image Circle */}
                <div className="relative w-[200px] h-[200px] mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.location}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Year Badge */}
                  <div className="absolute -right-2 top-6 w-16 h-16 bg-[#5A90A8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>

                {/* Year */}
                <h3 className="text-[#002147] text-2xl font-bold mb-2">
                  {step.year}
                </h3>
                
                {/* Location */}
                <p className="text-gray-600 font-medium">
                  {step.location}
                </p>

                {/* Connecting Line - Hide for last item */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-[100px] right-0 w-full h-[2px]">
                    <div className="relative w-full h-full">
                      {/* Dotted Line */}
                      <div className="absolute top-0 left-1/2 w-full h-full border-t-2 border-dashed border-yellow-500"></div>
                      {/* Arrow */}
                      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-yellow-500 transform rotate-45"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 