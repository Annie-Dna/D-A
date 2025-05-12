import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';
import TrustLine from '@/components/common/TrustLine';
import ClientLogos from '@/components/home/ClientLogos';

export const metadata = {
  title: 'Blog - Dream N Desire',
  description: 'Stay updated with the latest news, insights, and updates from Dream N Desire.',
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogList />
      <TrustLine />
      <ClientLogos />
    </main>
  );
} 