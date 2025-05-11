'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@/styles/products.css';
import SectionIcon from '../common/SectionIcon';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ocean Freight",
    image: "/images/portfolio-01.jpg",
    category: "Logistics"
  },
  {
    id: 2,
    name: "Air Freight",
    image: "/images/portfolio-02.jpg",
    category: "Logistics"
  },
  {
    id: 3,
    name: "Road Transport",
    image: "/images/portfolio-03.jpg",
    category: "Transport"
  },
  {
    id: 4,
    name: "Rail Freight",
    image: "/images/portfolio-04.jpg", 
    category: "Transport"
  },
  {
    id: 5,
    name: "Warehousing",
    image: "/images/portfolio-05.jpg",
    category: "Storage"
  }
];

const Products = () => {
  // Double the products array for seamless looping
  const loopedProducts = [...products, ...products];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="#5A90A8 text-lg font-medium mb-4 block">
          <SectionIcon />What We Offer
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Our Products
          </h2>
        </div>
        
        <div className="relative overflow-hidden mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              initialSlide={2}
              spaceBetween={20}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              loop={true}
              speed={800}
              watchSlidesProgress={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                }
              }}
              className="products-slider"
            >
              {loopedProducts.map((product, index) => (
                <SwiperSlide key={`${product.id}-${index}`}>
                  {({ isActive }) => (
                    <div className="w-[380px] mx-auto">
                      <div className={`relative h-[320px] rounded-xl overflow-hidden transition-all duration-500 group cursor-pointer ${isActive ? 'shadow-2xl' : 'shadow-lg'}`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className={`object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-[#002147]/90 to-transparent transition-opacity duration-300 
                          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                          <div className={`absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 
                            ${isActive ? 'translate-y-0' : 'translate-y-6 group-hover:translate-y-0'}`}>
                            <span className="inline-block px-5 py-2.5 bg-white #5A90A8 font-semibold rounded-lg mb-5 text-lg">
                              {product.category}
                            </span>
                            <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
