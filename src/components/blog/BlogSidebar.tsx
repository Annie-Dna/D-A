import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

interface RecentPost {
  title: string;
  date: string;
  image: string;
  slug: string;
}

interface BlogSidebarProps {
  categories: string[];
  recentPosts: RecentPost[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories, recentPosts }) => {
  const youthFocusedCategories = [
    'Youth Programs',
    'Community Events',
    'Education',
    'Mentorship',
    'Sports & Activities',
    'Leadership Development'
  ];

  return (
    <div className="lg:w-1/3 space-y-8">
      {/* Search Bar */}
      <div className="bg-bg-light p-6 rounded-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here"
            className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-yellow-500"
          />
          <button className="absolute right-0 top-0 h-full aspect-square flex items-center justify-center text-white bg-[#5A90A8] rounded-full hover:bg-[#4d7789] transition-colors">
            <FaSearch className="text-sm" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-bg-light p-6 rounded-lg">
        <h3 className="text-xl font-bold text-text-primary mb-6">Category</h3>
        <div className="space-y-3">
          {youthFocusedCategories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
              className="flex items-center justify-between p-4 bg-white rounded-full text-text-secondary hover:#5A90A8 transition-colors"
            >
              <span>{category}</span>
              <FaArrowRight className="text-sm" />
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-bg-light p-6 rounded-lg">
        <h3 className="text-xl font-bold text-text-primary mb-6">Recent post</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link 
              key={index} 
              href={`/blog/${post.slug}`} 
              className="flex gap-4 items-center group"
            >
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary group-hover:#5A90A8 transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-text-secondary">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-bg-light p-6 rounded-lg">
        <h3 className="text-xl font-bold text-text-primary mb-6">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Logistics Services',
            'Cargo',
            'Warehouse',
            'Ocean Freight',
            'Air Freight',
            'Global'
          ].map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
              className="bg-white px-4 py-2 rounded-full text-gray-600 hover:#5A90A8 transition-colors text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
