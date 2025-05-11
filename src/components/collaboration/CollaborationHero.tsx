import Image from 'next/image';
import Link from 'next/link';

const CollaborationHero = () => {
  return (
    <section className="relative h-[400px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/contact-page-header.jpg"
        alt="Collaboration Header"
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
          <h1 className="text-5xl font-bold text-white mb-4">Collaboration</h1>
          <div className="flex items-center justify-center text-white gap-2">
            <Link href="/" className="hover:text-[#5A90A8] transition-colors">Home</Link>
            <span className="text-[#5A90A8]">»</span>
            <span>Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationHero; 