import Image from 'next/image';
import { FaGraduationCap, FaUsers, FaLightbulb, FaChalkboardTeacher, FaHandsHelping, FaBook, FaLaptopCode, FaPalette, FaChartLine } from 'react-icons/fa';
import SectionIcon from '../common/SectionIcon';

const features = [
    {
        id: 1,
        icon: <FaChalkboardTeacher className="w-8 h-8" />,
        title: "Expert Mentorship",
        description: "Learn from experienced mentors who guide you through personal development, academic excellence, and career planning."
    },
    {
        id: 2,
        icon: <FaHandsHelping className="w-8 h-8" />,
        title: "Inclusive Community",
        description: "Join a diverse and supportive community where every young person feels welcomed, valued, and encouraged to grow."
    },
    {
        id: 3,
        icon: <FaLaptopCode className="w-8 h-8" />,
        title: "Innovative Programs",
        description: "Access cutting-edge programs in technology, leadership, arts, and personal development designed for today's youth."
    }
];

const WhyChoose = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Top Badge */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-gray-50 px-6 py-2 rounded-full font-semibold">
                        <span className="text-[#5A90A8]"><SectionIcon/>Why Choose Us</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#002147] leading-tight mb-6">
                            Why Choose Dream N Achieve for{' '}
                            <span className="text-[#5A90A8]">Your Growth</span>
                        </h2>
                        <p className="text-gray-600 mb-12">
                            We provide a unique blend of mentorship, skill development, and community engagement that helps young people discover their potential and achieve their dreams.
                        </p>

                        {/* Features List */}
                        <div className="space-y-8">
                            {features.map((feature) => (
                                <div key={feature.id} className="flex items-start gap-6 group">
                                    {/* Icon Container */}
                                    <div className="bg-gray-50 p-4 rounded-2xl text-[#5A90A8] group-hover:bg-[#5A90A8] group-hover:text-white transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-bold text-[#002147] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-full aspect-square">
                            <Image
                                src="/images/achieve.png"
                                alt="Why Choose Dream N Achieve"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;