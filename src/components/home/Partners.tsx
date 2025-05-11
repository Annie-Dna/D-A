'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Partners = () => {
  const partners = [
    '/images/partners/partner-1.png',
    '/images/partners/partner-2.png',
    '/images/partners/partner-3.png',
    '/images/partners/partner-4.png',
    '/images/partners/partner-5.png',
    '/images/partners/partner-6.png',
    '/images/partners/partner-7.png',
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10"></div>

          {/* Partner Logos Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
              1280: { slidesPerView: 6, spaceBetween: 50 },
            }}
            className="partner-slider"
          >
            {[...partners, ...partners].map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24">
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    width={120}
                    height={60}
                    className="brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners; 