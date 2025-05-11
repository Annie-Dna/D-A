'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ClientLogos = () => {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Clone logos for seamless loop
    const originalContent = inner.innerHTML;
    inner.innerHTML = originalContent + originalContent;

    let animationId: number;
    let startTime: number;
    const duration = 30000; // 30 seconds for one complete loop

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % duration;
      const percentage = (progress / duration) * 100;
      
      // Calculate the scroll position based on the total width
      const totalWidth = inner.scrollWidth / 2;
      const scrollPosition = (percentage * totalWidth) / 100;
      
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  const logos = [
    '/images/carousel/client-one.png',
    '/images/carousel/client-two.png',
    '/images/carousel/client-three.png',
    '/images/carousel/client-four.png',
    '/images/carousel/client-five.png',
    '/images/carousel/client-six.png',
    '/images/carousel/client-seven.png',
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/client-bg.jpg"
          alt="Client Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#16262ce6]" />
      </div>

      <div className="relative z-10">
        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="overflow-hidden"
        >
          <div 
            ref={innerRef}
            className="inline-flex items-center gap-16 py-8"
          >
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="slide-item flex-shrink-0"
              >
                <div className="relative w-[160px] h-[80px] mx-4">
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    fill
                    className="object-contain brightness-0 invert transition-all duration-300 hover:[#5A90A8] hover:[#5A90A8]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
