'use client';
import Image from 'next/image';
import Link from 'next/link';
import SectionIcon from '../common/SectionIcon';
import { FaUser, FaComments } from 'react-icons/fa';
import '@/styles/blog.css';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  author: string;
  comments: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Box Master Motorcycle Trading Embraces AI for Optimized Route Planning',
      image: '/images/blog01.jpg',
      date: {
        day: '10',
        month: 'Sep',
        year: '2024'
      },
      author: 'Admin',
      comments: '05'
    },
    {
      id: 2,
      title: 'How Box Master Motorcycle Trading is Adapting to Meet Growing Demand',
      image: '/images/blog02.jpg',
      date: {
        day: '10',
        month: 'Sep',
        year: '2024'
      },
      author: 'Admin',
      comments: '05'
    },
    {
      id: 3,
      title: "Box Master Motorcycle Trading's Commitment to Eco-Friendly Practices",
      image: '/images/blog03.jpg',
      date: {
        day: '10',
        month: 'Sep',
        year: '2024'
      },
      author: 'Admin',
      comments: '05'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 relative">
        <div className="flex pb-16 gap-3 justify-between items-end flex-wrap">
          <div className="text-start">
            <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
              <h2 className="#5A90A8 font-bold flex items-center">
                <SectionIcon />News & Blog
              </h2>
            </div>
            <h2 className="text-[#002147] text-4xl lg:text-[42px] font-bold leading-[1.2]">
              Box Master Motorcycle Trading News & Insights
            </h2>
          </div>
          <Link 
            href="/blog"
            className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-secondary transition-all duration-300"
          >
            ALL NEWS
            <svg className="w-2.5 h-2.5" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group relative rounded-[20px] overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-[300px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,transparent_50%)] opacity-0 scale-0 origin-center group-hover:animate-[glaze_1.5s_cubic-bezier(0.4,0,0.2,1)_forwards] z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_50%)] opacity-0 scale-0 origin-center group-hover:animate-[glaze_1.5s_cubic-bezier(0.4,0,0.2,1)_0.1s_forwards] z-10"></div>
                <style jsx>{`
                  @keyframes glaze {
                    0% { 
                      transform: scale(0);
                      opacity: 0;
                    }
                    15% {
                      opacity: 1;
                    }
                    100% {
                      transform: scale(3);
                      opacity: 0;
                    }
                  }
                `}</style>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute top-[-33px] right-[-38px] z-10">
                  <div className="relative">
                    <Image 
                      src="/shape.svg"  
                      alt="date shape" 
                      width={150} 
                      height={150}
                      className="w-70 h-70"
                    />
                    <div className="absolute top-[-15px] left-[6px] inset-0 flex flex-col items-center justify-center text-white">
                      <span className="text-2xl font-bold">{post.date.day}</span>
                      <span className="text-sm">{post.date.month}, {post.date.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex gap-2 items-center">
                    <FaUser className="text-sm text-[#5A90A8]" />
                    <span className="text-sm">By {post.author}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaComments className="text-sm text-[#5A90A8]" />
                    <span className="text-sm">Comments ({post.comments})</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-6 text-[#002147] group-hover:#5A90A8 transition-colors duration-300">
                  <Link href="/blog-details">
                    {post.title}
                  </Link>
                </h4>
                <Link 
                  href="/blog-details"
                  className="inline-flex items-center gap-2 text-white bg-primary px-6 py-3 rounded-full text-sm uppercase hover:bg-secondary transition-all duration-300"
                >
                  Read More
                  <svg className="w-2.5 h-2.5" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1V8C10 8.29167 9.90625 8.53125 9.71875 8.71875C9.53125 8.90625 9.29167 9 9 9C8.70833 9 8.46875 8.90625 8.28125 8.71875C8.09375 8.53125 8 8.29167 8 8V3.40625L1.71875 9.71875C1.51042 9.90625 1.27083 10 1 10C0.729167 10 0.489583 9.90625 0.28125 9.71875C0.09375 9.51042 0 9.27083 0 9C0 8.72917 0.09375 8.48958 0.28125 8.28125L6.59375 2H2C1.70833 2 1.46875 1.90625 1.28125 1.71875C1.09375 1.53125 1 1.29167 1 1C1 0.708333 1.09375 0.46875 1.28125 0.28125C1.46875 0.09375 1.70833 0 2 0H9C9.29167 0 9.53125 0.09375 9.71875 0.28125C9.90625 0.46875 10 0.708333 10 1Z" fill="currentColor"/>
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

export default Blog;
