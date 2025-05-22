import AboutHero from '@/components/about/AboutHero';
import TrustLine from '@/components/common/TrustLine';
import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import ClientLogos from '@/components/home/ClientLogos';
import Testimonials from '@/components/home/Testimonials';
import Team from '@/components/home/Team';

export const metadata = {
  title: 'About Us | Dream N Achieve',
  description: 'Learn more about Dream N Achieve, our mission to empower youth, and our commitment to building stronger communities through engaging programs.',
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