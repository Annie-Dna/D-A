import BlogDetailHero from '@/components/blog/BlogDetailHero';
import TrustLine from '@/components/common/TrustLine';
import ClientLogos from '@/components/home/ClientLogos';
import BlogDetail from '@/components/blog/BlogDetail';

export const metadata = {
  title: 'Blog - Dream N Desire',
  description: 'Stay updated with the latest news, insights, and updates from Dream N Desire.',
};

export default function BlogDetailPage() {
  // Sample blog data - replace with actual data from your API or CMS
  const blogData = {
    title: "Speed and Efficiency in Global Logistics",
    date: "2024-01-10",
    author: "John Smith",
    content: `<p>Air freight is the transportation of goods by aircraft. It's a mode of shipping that prioritizes speed and efficiency, making it ideal for time-sensitive and high-value cargo. While it is generally more expensive than ocean freight, the quick delivery time often justifies the cost for many businesses.</p>

<p>Despite its higher price relative to other shipping methods, such as ocean freight, air freight provides several key benefits that often justify the investment. These include shorter transit times, enhanced security, and the ability to reach destinations that may be less accessible by sea or land. Additionally, air freight often ensures better handling and lower risk of damage of the cargo.</p>`,
    image: "/images/blog01.jpg",
    category: "Logistics"
  };

  return (
    <main>
      <BlogDetailHero />
      <BlogDetail 
        title={blogData.title}
        date={blogData.date}
        author={blogData.author}
        content={blogData.content}
        image={blogData.image}
        category={blogData.category}
      />
      <TrustLine />
      <ClientLogos />
    </main>
  );
} 