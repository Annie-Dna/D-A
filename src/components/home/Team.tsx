'use client';
import Image from 'next/image';
import SectionIcon from '../common/SectionIcon';


const Team = () => {
  const experts = [
    {
      name: 'Sarah Benegal',
      role: 'UI/UX Designer',
      image: '/images/team01.jpg'
    },
    {
      name: 'David Anderson',
      role: 'Project Manager',
      image: '/images/team02.jpg'
    },
    {
      name: 'Michael Brown',
      role: 'Lead Developer',
      image: '/images/team03.jpg'
    }
  ];

  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
              <h2 className="#5A90A8 font-bold flex items-center">
                <SectionIcon />Our Expert Team
              </h2>
            </div>
            <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
              Meet Our Expert
            </h2>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experts.map((expert, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:text-white">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-white">{expert.name}</h3>
                      <p className="text-gray-200 text-lg">{expert.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Team; 