'use client';
import Image from 'next/image';
import SectionIcon from '../common/SectionIcon';
import Link from 'next/link';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { useState } from 'react';

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-8 lg:gap-12">
          {/* Left Side - Image and Video */}
          <div className="w-full lg:w-1/2 max-w-[540px] lg:max-w-none px-0 sm:px-4">
            <div className="relative">
              {/* Experience Badge */}
              <div className="absolute -right-2 sm:-right-4 top-2 sm:top-4 z-[1] scale-75 sm:scale-100">
                <div className="relative">
                  <Image
                    src="/shape01.svg"
                    alt=""
                    width={280}
                    height={80}
                    className="w-auto h-[80px] sm:h-[100px]"
                    style={{ position: 'relative', right: '-42px', top: '30px' }}
                    priority
                  />
                  <div className="absolute inset-0 flex items-center gap-2 relative left-[70px] sm:left-[90px] top-[-45px] sm:top-[-55px]">
                    <span className="text-2xl sm:text-3xl font-bold text-white">29+</span>
                    <span className="text-xs sm:text-sm text-white leading-tight">Years Of<br />Experience</span>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative rounded-2xl">
                <Image
                  src="/images/start-up.jpg"
                  alt="Shipping Container"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl"
                />

                {/* Video Overlay */}
                <div className="absolute -right-4 sm:-right-8 lg:-right-12 -bottom-6 sm:-bottom-8 lg:-bottom-10 z-[2] scale-75 sm:scale-90 lg:scale-100 origin-bottom-right">
                  <div className="relative w-[240px] h-[180px] rounded-2xl overflow-hidden shadow-2xl bg-black/10 backdrop-blur-sm border-4 border-white">
                    <Image
                      src="/images/start-up.jpg"
                      alt="Video Thumbnail"
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                    >
                      <div className="play-btn-wrapper">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#5A90A8] text-white relative z-10">
                          <FaPlay className="text-xl ml-1" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 px-0 sm:px-4">
            <div className="lg:pl-6 xl:pl-10">
              {/* About Badge */}
              <div className="inline-block bg-white pr-4 py-2 rounded-full mb-4">
                <h2 className="#5A90A8 font-bold flex items-center text-sm sm:text-base"><SectionIcon />About Us</h2>
              </div>

              {/* Title */}
              <h2 className="text-[#002147] text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold leading-[1.2] mb-5">
                Empowering Youth to Dream
                <br className="hidden sm:block" />
                and Achieve Excellence
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Dream N Desire is dedicated to nurturing young minds and helping them transform their dreams into achievements. We provide a supportive environment where youth can discover their potential, develop essential skills, and build lasting connections.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 flex-shrink-0 rounded-lg bg-primary/10 p-2 sm:p-3">
                    <Image
                      src="/mentorship.png"
                      alt="Mentorship Programs"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#002147]">
                    Mentorship Programs
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 flex-shrink-0 rounded-lg bg-primary/10 p-2 sm:p-3">
                    <Image
                      src="/skills.png"
                      alt="Skill Development"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#002147]">
                    Skill Development
                  </div>
                </div>
              </div>

              {/* About More Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#5A90A8] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-[15px] font-medium tracking-wide rounded hover:bg-[#4d7789] transition-colors"
              >
                ABOUT MORE
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white text-xl hover:#5A90A8"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0O2aH4XLbto?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default About; 