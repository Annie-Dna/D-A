import AboutHero from '@/components/about/AboutHero';
import TrustLine from '@/components/common/TrustLine';
import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import ClientLogos from '@/components/home/ClientLogos';
import Testimonials from '@/components/home/Testimonials';
import Team from '@/components/home/Team';

export const metadata = {
  title: 'About Us - Box Master Motorcycle Trading',
  description: 'Learn more about D&A Youth Club, our mission, values, and commitment to excellence in logistics and transportation.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <About />
      {/* <Team /> */}
      <Testimonials />
      <Blog />
      <TrustLine />
      <ClientLogos />
    </main>
  );
} 