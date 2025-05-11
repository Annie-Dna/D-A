'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionIcon from '../common/SectionIcon';

const galleryItems = [
  {
    id: 1,
    title: 'Youth Leadership Workshop',
    category: 'workshops',
    image: '/images/gallery/workshop-1.jpg',
  },
  {
    id: 2,
    title: 'Community Service Day',
    category: 'community',
    image: '/images/gallery/community-1.jpg',
  },
  {
    id: 3,
    title: 'Sports Tournament',
    category: 'sports',
    image: '/images/gallery/sports-1.jpg',
  },
  {
    id: 4,
    title: 'Art Exhibition',
    category: 'arts',
    image: '/images/gallery/art-1.jpg',
  },
  {
    id: 5,
    title: 'Tech Innovation Fair',
    category: 'technology',
    image: '/images/gallery/tech-1.jpg',
  },
  {
    id: 6,
    title: 'Cultural Festival',
    category: 'culture',
    image: '/images/gallery/culture-1.jpg',
  },
  // Add more items as needed
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'community', label: 'Community' },
  { id: 'sports', label: 'Sports' },
  { id: 'arts', label: 'Arts' },
  { id: 'technology', label: 'Technology' },
  { id: 'culture', label: 'Culture' },
];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-50 px-4 py-2 rounded-full mb-4">
            <h2 className="#5A90A8 font-bold flex items-center">
              <SectionIcon />Our Activities
            </h2>
          </div>
          <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
            Capturing Moments of Growth & Achievement
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-[#5A90A8] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                alt="Gallery Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid; 