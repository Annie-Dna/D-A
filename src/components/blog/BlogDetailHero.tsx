import Image from 'next/image';
import Link from 'next/link';

const BlogDetailHero = () => {
  return (
    <section className="relative h-[300px] flex items-center bg-gray-900">
      {/* Background Image */}
      <Image
        src="/images/contact-page-header.jpg"
        alt="Blog Header"
        fill
        className="object-cover opacity-50"
        priority
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Details</h1>
          <div className="flex items-center justify-center text-white gap-2">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span className="text-red-600">»</span>
            <Link href="/blog" className="hover:text-red-600 transition-colors">Blog</Link>
            <span className="text-red-600">»</span>
            <span className="text-gray-300">Details</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHero;