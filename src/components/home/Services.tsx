'use client';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import SectionIcon from '../common/SectionIcon';
import Link from 'next/link';

const products = [
    {
        id: 1,
        title: "Delivery Bag",
        description: "Premium quality delivery bag designed for motorcycle couriers. Waterproof, durable, and spacious with multiple compartments for secure transportation.",
        image: "/images/delivery-bag.png",
    },
    {
        id: 2,
        title: "Delivery Box",
        description: "Heavy-duty delivery box perfect for commercial deliveries. Features secure locking system, weather-resistant design, and easy mounting mechanism.",
        image: "/images/delivery-box.png",
    }
];

const Services = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-block bg-gray-50 px-4 py-2 rounded-full mb-4">
                        <h2 className="#5A90A8 font-bold flex items-center">
                            <SectionIcon />Our Products
                        </h2>
                    </div>
                    <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
                        Premium Delivery Equipment
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="group bg-gray-50 rounded-[20px] p-5 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="relative h-[220px] rounded-[15px] overflow-hidden mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-[#002147] text-xl font-bold mb-3">
                                {product.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {product.description}
                            </p>
                            <Link 
                                href="/contact"
                                className="inline-flex items-center #5A90A8 font-semibold hover:text-[#002147] transition-colors text-sm"
                            >
                                Get Quote <FaArrowRight className="ml-2 text-xs" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;