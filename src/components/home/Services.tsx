'use client';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import SectionIcon from '../common/SectionIcon';
import Link from 'next/link';

const services = [
    {
        title: "Youth Development",
        description: "Comprehensive programs designed to nurture young minds through leadership training, skill development, and personal growth activities.",
        image: "/images/education-inspire-.png",
        link: "/programs/youth-development"
    },
    {
        title: "Mentorship Program",
        description: "Connect with experienced mentors who guide and inspire youth to achieve their full potential in academics, career, and personal life.",
        image: "/images/mentorship.png",
        link: "/programs/mentorship"
    },
    {
        title: "Skills Training",
        description: "Practical workshops and training sessions in various fields to equip youth with valuable skills for future success.",
        image: "/images/skills.png",
        link: "/programs/skills-training"
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block bg-gray-50 px-4 py-2 rounded-full mb-4">
                        <h2 className="text-[#5A90A8] font-bold flex items-center">
                            <SectionIcon />Our Programs
                        </h2>
                    </div>
                    <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
                        Empowering Youth Through
                    </h2>
                    <h3 className="text-[#5A90A8] text-4xl lg:text-[42px] font-bold leading-[1.2]">
                        Innovative Programs
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-[20px] shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                            <div className="relative h-[250px]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-[#002147] text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-[#5A90A8] hover:text-[#4d7789] font-medium"
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;