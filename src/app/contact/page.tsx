import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ContactForm from '@/components/contact/ContactForm';
import ClientLogos from '@/components/home/ClientLogos';
import TrustLine from '@/components/common/TrustLine';

export const metadata = {
  title: 'Contact Us - Box Master Motorcycle Trading',
  description: 'Get in touch with D&A Youth Club for all your logistics and transportation needs.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <TrustLine />
      <ClientLogos />
    </main>
  );
} 