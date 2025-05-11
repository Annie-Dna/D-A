'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Link from 'next/link';
import { useState } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "Empowering Youth",
      subtitle: "Shape Your Future",
      description: "D&A Youth Club is dedicated to nurturing young minds through mentorship, skill development, and engaging activities that prepare you for a successful future.",
      image: "/images/hero-section-bg.jpg",
    },
    {
      title: "Learn & Grow",
      subtitle: "Together",
      description: "Join our vibrant community of young achievers. From leadership programs to creative workshops, we offer diverse opportunities for personal growth and development.",
      image: "/images/hero-section-bg.jpg",
    },
    {
      title: "Dream Big",
      subtitle: "Achieve More",
      description: "At D&A Youth Club, we believe in the power of dreams. Our expert mentors and state-of-the-art facilities help transform your aspirations into achievements.",
      image: "/images/hero-section-bg.jpg",
    }
  ];

  return (
    <section className="relative min-h-[600px] h-[85vh] max-h-[1000px] bg-primary overflow-hidden">
      {/* Slide Indicators */}
      <div className="absolute left-4 md:left-6 lg:left-[70px] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`w-[2px] h-16 transition-colors duration-300 ${activeIndex === index ? 'bg-[#5A90A8]' : 'bg-white/50'}`}
          ></div>
        ))}
      </div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full relative"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-[#16262ce6]" />
              <div className="container mx-auto h-full relative z-10">
                {/* <div className="absolute right-[-5%] bottom-[-5%] w-[50%] lg:w-[45%] md:w-[50%] sm:w-[60%] xs:w-[70%] hidden md:block z-10 transition-all duration-1000 transform translate-x-0 opacity-100">
                  <img
                    src="/images/youth-group.png"
                    alt="Youth Activities"
                    className="w-full h-[100%] object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))'
                    }}
                  />
                </div> */}
                <div className="flex flex-col justify-center h-full max-w-3xl px-4 md:px-6 lg:pl-[70px]">
                  <div
                    className="relative inline-block"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
                  >
                    <div className="bg-[#5A90A8] text-white px-8 py-3 text-sm font-medium">
                      Welcome to Dream & Achieve Youth Club
                    </div>
                    <div className="absolute left-0 top-0 w-1 h-full bg-white"></div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mt-8 mb-6 transition-all duration-500 transform translate-y-0 opacity-100">
                    <span className="text-white block">{slide.title}</span>
                    <span className="text-[#5A90A8] block">{slide.subtitle}</span>
                  </h1>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-8 md:mb-12 transition-all duration-500 delay-200 transform translate-y-0 opacity-100">
                    {slide.description}
                  </p>
                  <div className="flex gap-5 transition-all duration-500 delay-400 transform translate-y-0 opacity-100 relative z-20">
                    <Link
                      href="/membership"
                      className="bg-[#5A90A8] text-white px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#4d7789] transition-colors"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
                    >
                      JOIN NOW
                    </Link>
                    <Link
                      href="/programs"
                      className="border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#002147] transition-colors"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
                    >
                      OUR PROGRAMS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          opacity: 0;
          transition: all 800ms ease;
        }
        .swiper-slide-active {
          opacity: 1;
        }
        .swiper-slide-active h1,
        .swiper-slide-active p,
        .swiper-slide-active .flex,
        .swiper-slide-active img {
          transform: translateY(0);
          opacity: 1;
        }
        .swiper-slide:not(.swiper-slide-active) h1,
        .swiper-slide:not(.swiper-slide-active) p,
        .swiper-slide:not(.swiper-slide-active) .flex,
        .swiper-slide:not(.swiper-slide-active) img {
          transform: translateY(20px);
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero; 