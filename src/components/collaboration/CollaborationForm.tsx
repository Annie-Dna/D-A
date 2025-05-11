'use client';

import SectionIcon from '../common/SectionIcon';

const CollaborationForm = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-50 px-4 py-2 rounded-full mb-4">
            <h2 className="#5A90A8 font-bold flex items-center">
              <SectionIcon />Get in Touch
            </h2>
          </div>
          <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
            Let's Collaborate Together
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-[40px] p-6 sm:p-8 md:p-12 text-center">
            <p className="text-gray-600 text-lg mb-4">
              Our collaboration form is currently under maintenance.
            </p>
            <p className="text-gray-600">
              Please contact us through email at{' '}
              <a href="mailto:DnaYouthClub@gmail.com" className="text-[#5A90A8] hover:underline">
                DnaYouthClub@gmail.com
              </a>
              {' '}or call us at{' '}
              <a href="tel:03109585555" className="text-[#5A90A8] hover:underline">
                0310 958 5555
              </a>
              {' '}to discuss collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationForm; 