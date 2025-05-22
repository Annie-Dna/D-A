import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import BlogSidebar from './BlogSidebar';

interface BlogDetailProps {
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
  category: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ 
  title, 
  date, 
  author, 
  content, 
  image,
  category 
}) => {
  const blogContent = {
    title: "Empowering Youth Through Community Engagement",
    content: "Youth development is the cornerstone of a thriving community, fostering leadership, creativity, and personal growth while building lasting connections and positive change.",
    image: "/images/blog/blog-1.jpg",
    date: "March 15, 2024",
    author: "Dream N Achieve Team",
    categories: ['Youth Programs', 'Community Events'],
    tags: ['youth development', 'community', 'leadership', 'mentorship']
  };

  const relatedPosts = [
    {
      title: 'The Impact of Youth Mentorship',
      image: '/images/blog/blog-2.jpg',
      date: 'March 10, 2024',
      slug: 'impact-of-youth-mentorship'
    },
    {
      title: 'The Future of Global Logistics',
      date: 'March 20, 2024',
      image: '/images/blog-list-img-1.jpg',
      slug: 'future-of-global-logistics'
    },
    {
      title: 'Innovation in Supply Chain',
      date: 'March 18, 2024',
      image: '/images/blog-list-img-2.jpg',
      slug: 'innovation-in-supply-chain'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Blog Header Image */}
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  <span className="bg-[#5A90A8] text-sm px-3 py-1 rounded">BY {author}</span>
                  <span>{format(new Date(date), 'dd MMM, yyyy')}</span>
                  <span className="bg-[#5A90A8] text-sm px-3 py-1 rounded">{category}</span>
                </div>
              </div>
            </div>

            <div className="px-8 pt-8 pb-8">
              {/* Blog Title */}
              <h1 className="text-4xl font-bold mb-8">{title}</h1>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>

              {/* Quote Section */}
              <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-100">
                <blockquote className="text-xl font-medium mb-4 text-gray-800">
                  "Efficient logistics is the backbone of a thriving business, seamlessly connecting supply with demand while driving innovation, reliability, and global growth."
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-[#5A90A8] text-white px-6 py-2 rounded relative">
                    {author}
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                      <svg className="w-4 h-4 #5A90A8 fill-current" viewBox="0 0 16 16">
                        <polygon points="0,0 16,8 0,16" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Image */}
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-12 border border-gray-100">
                <Image
                  src="/images/blog02.jpg"
                  alt="Global Logistics Map"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Final Paragraph */}
              <div className="text-gray-600 mb-12">
                <p className="leading-relaxed">
                  Logistic services encompass the comprehensive management of the flow of goods from their point of origin to their final destination. This intricate process involves a wide range of activities, including transportation, warehousing, inventory management, order fulfillment.
                </p>
              </div>

              {/* Tags and Share */}
              <div className="flex items-center justify-between py-6 border-t border-gray-100">
                <div className="flex gap-2">
                  <span className="font-semibold">Tags:</span>
                  {['Builders', 'Construction', 'ProBuild'].map((tag) => (
                    <Link 
                      key={tag} 
                      href={`/tag/${tag.toLowerCase()}`}
                      className="text-gray-600 hover:#5A90A8 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold">Share:</span>
                  <div className="flex gap-3">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <Link 
                        key={social} 
                        href={`https://${social}.com`}
                        className="text-gray-400 hover:#5A90A8 transition-colors"
                      >
                        <span className="w-6 h-6 flex items-center justify-center">
                          <i className={`fab fa-${social}`}></i>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <BlogSidebar 
          categories={[
            'Logistics',
            'Transportation',
            'Warehouse',
            'Inventory',
            'Supply Chain'
          ]} 
          recentPosts={relatedPosts} 
        />
      </div>
    </div>
  );
};

export default BlogDetail;