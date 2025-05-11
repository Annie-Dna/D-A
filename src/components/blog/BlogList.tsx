import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import BlogSidebar from './BlogSidebar';

interface BlogPost {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  views: string;
  slug: string;
}

const BlogList = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Speed and Efficiency in Global Logistics",
      excerpt: "Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the speed and reliability make it worth the investment for many businesses.",
      image: "/images/blog-list-img-1.jpg",
      date: "30 Sep, 2023",
      views: "27 Admin",
      slug: "speed-and-efficiency-in-global-logistics"
    },
    {
      title: 'Sustainable Building Materials for the Future',
      excerpt: 'Discover the latest innovations in eco-friendly construction materials...',
      image: '/images/blog/blog-2.jpg',
      date: 'March 10, 2024',
      views: '189',
      slug: 'sustainable-materials'
    },
    {
      title: "Building Tomorrow's Leaders Through Youth Programs",
      excerpt: "Discover how our youth programs are creating positive change and developing future leaders in our community.",
      image: "/images/blog/youth-programs.jpg",
      date: "March 15, 2024",
      views: "189",
      slug: "building-tomorrows-leaders"
    }
  ];

  const categories = [
    "Air Freight",
    "Road Transport",
    "Rail Transport",
    "Cargo Services",
    "Warehouse",
    "Ocean Freight"
  ];

  const recentPosts = [
    {
      title: 'The Future of Smart Buildings',
      date: 'March 20, 2024',
      image: '/images/blog/blog-3.jpg',
      slug: 'future-of-smart-buildings'
    },
    {
      title: 'Innovations in Construction Safety',
      date: 'March 18, 2024',
      image: '/images/blog/blog-4.jpg',
      slug: 'innovations-in-construction-safety'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Blog Posts */}
          <div className="lg:w-2/3">
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative">
                    {/* Blog Image */}
                    <div className="relative h-[400px] w-full rounded-xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    
                    {/* Post Meta */}
                    <div className="absolute bottom-4 left-4 flex gap-4">
                      <div className="bg-primary text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
                        <span>{post.views}</span>
                      </div>
                      <div className="bg-primary text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-text-primary mb-4 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link 
                      href="/quote"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-accent-hover transition-all duration-300"
                    >
                      FREE QUOTE
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar categories={categories} recentPosts={recentPosts} />
        </div>
      </div>
    </section>
  );
};

export default BlogList; 