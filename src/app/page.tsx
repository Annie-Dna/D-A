import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import WorkingProcess from '@/components/home/WorkingProcess'
import Team from '@/components/home/Team'
import Testimonials from '@/components/home/Testimonials'
import Blog from '@/components/home/Blog'
import Products from '@/components/home/Products'
import ContactCTA from '@/components/home/ContactCTA'
import ClientLogos from '@/components/home/ClientLogos'
import TrustLine from '@/components/common/TrustLine'
import WhyChoose from '@/components/home/WhyChoose'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Services /> */}
      <WhyChoose />
      <About />
      {/* <WorkingProcess /> */}
      {/* <Team /> */}
      <TrustLine />
      <ClientLogos />
      <Testimonials />
      {/* <Blog /> */}
      {/* <Products /> */}
      <ContactCTA />
    </main>
  )
}
