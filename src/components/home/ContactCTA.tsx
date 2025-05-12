'use client';
import Link from 'next/link';
import Image from 'next/image';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Image */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="relative h-[400px] rounded-[30px] overflow-hidden">
              <Image
                src="/images/conceptual-human.jpg"
                alt="Youth Group"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg">
              <h2 className="text-4xl lg:text-[42px] font-bold text-[#002147] leading-tight mb-6">
                Join Our Youth Community and Make a Difference
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to be part of something bigger? Join Dream N Desire and connect with like-minded young individuals who are passionate about personal growth, leadership, and making a positive impact in the community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/membership"
                  className="inline-block bg-[#5A90A8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4d7789] transition-colors"
                >
                  Become a Member
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-[#5A90A8] text-[#5A90A8] px-8 py-4 rounded-full font-semibold hover:bg-[#5A90A8] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 