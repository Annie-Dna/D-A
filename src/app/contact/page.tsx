import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ContactForm from '@/components/contact/ContactForm';
import ClientLogos from '@/components/home/ClientLogos';
import TrustLine from '@/components/common/TrustLine';

export const metadata = {
  title: 'Contact Us | Dream N Desire',
  description: 'Get in touch with Dream N Desire to learn more about our youth programs and how to get involved.',
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