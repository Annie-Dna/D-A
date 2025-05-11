'use client';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionIcon from '../common/SectionIcon';
import Image from 'next/image';

const ContactCTA = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/conceptual-human.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(90deg, #5A90A8 0%, rgba(183, 225, 242, 0.53) 50%, #4d7789 100%)'
          }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-white mb-6">
            <SectionIcon />Get in Touch
          </h2>
          
          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed">
            Ready to find the perfect delivery box for your needs? Contact us at BikeBox Motorcycles Trading LLC today.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-white #5A90A8 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-[#4d7789] hover:text-white hover:gap-4"
          >
            Contact Us
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 