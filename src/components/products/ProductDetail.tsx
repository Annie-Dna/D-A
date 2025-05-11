'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

interface ProductDetailProps {
  title: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  images: string[];
  mainImage: string;
}

const ProductDetail = ({ title, description, features, specifications, images, mainImage }: ProductDetailProps) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-600 hover:#5A90A8 transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/products" className="text-gray-600 hover:#5A90A8 transition-colors">Products</Link>
          <span className="text-gray-400">/</span>
          <span className="#5A90A8">{title}</span>
        </div>

        {/* Product Overview */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-gray-100">
                <Image
                  src={mainImage}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-yellow-500 transition-colors">
                    <Image
                      src={image}
                      alt={`${title} view ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
              <p className="text-gray-600 mb-8">{description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheck className="#5A90A8 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/quote" 
                className="inline-block bg-[#5A90A8] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4d7789] transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(specifications).map(([key, value], index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
