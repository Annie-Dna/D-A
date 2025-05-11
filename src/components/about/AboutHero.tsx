import Image from 'next/image';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <section className="relative h-[400px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/contact-page-header.jpg"
        alt="About Us Header"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay Image */}
      <Image
        src="/images/contact-header-overlay-bg.png"
        alt="Overlay"
        fill
        className="object-cover"
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About D&A Youth Club</h1>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Dream big, Achieve bigger. Join us in shaping the future leaders of tomorrow.
          </p>
          <div className="flex items-center justify-center text-white gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-primary">»</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 