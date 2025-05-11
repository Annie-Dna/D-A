'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import SectionIcon from '../common/SectionIcon';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const testimonials = [
    {
      text: "D&A Youth Club has been transformative for my personal growth. The mentorship program helped me discover my passion for leadership and gave me the confidence to pursue my dreams.",
      author: "Sarah A.",
      role: "Club Member, Age 19",
      image: "/images/testimonial-profile.jpg"
    },
    {
      text: "The skills I learned at D&A Youth Club have been invaluable. From public speaking to project management, every program is designed to help us grow and succeed.",
      author: "Mohammed K.",
      role: "Student Member, Age 17",
      image: "/images/testimonial-profile.jpg"
    },
    {
      text: "Being part of D&A Youth Club opened up so many opportunities for me. The supportive community and practical workshops helped me develop both personally and professionally.",
      author: "Aisha R.",
      role: "Alumni Member",
      image: "/images/testimonial-profile.jpg"
    }
  ];

  return (
    <section className="relative bg-[#5A90A8]">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Video Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="h-[400px] lg:h-full lg:min-h-screen relative">
            <Image
              src="/images/education-inspire-.png"
              alt="Youth Activities"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/40 z-[1] transition duration-500 ease-in-out hover:bg-[#897f6d66]"></div>
            {/* Play Button */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]"
            >
              <div className="relative">
                {/* Ripple Effect */}
                <div className="absolute -inset-4 rounded-full animate-ping bg-[#5A90A8]/50"></div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#5A90A8] text-white relative z-10">
                  <FaPlay className="text-xl ml-1" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side - Testimonials Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="h-full px-4 lg:px-12 py-12 lg:py-24">
            {/* Section Header */}
            <div className="mb-12">
            <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
              <h2 className="#5A90A8 font-bold flex items-center">
                <SectionIcon />Our Testimonials
              </h2>
            </div>
              <h2 className="text-white text-4xl lg:text-[42px] font-bold">
                What Our Members Say
              </h2>
            </div>

            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="testimonial-slider"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white/5 rounded-lg p-8">
                      <p className="text-white text-lg leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-bold">
                            {testimonial.author}
                          </h4>
                          <p className="text-white">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Dialog */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:#5A90A8"
            >
              Close
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/0O2aH4XLbto?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;