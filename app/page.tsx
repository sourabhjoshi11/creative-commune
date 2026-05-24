import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import Stats from '@/components/Stats/Stats';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import Process from '@/components/Process/Process';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import FloatingCTA from '@/components/FloatingCTA/FloatingCTA';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Creative Commune',
  description: 'Digital marketing & AI agency helping luxury brands scale through strategy, content & AI.',
  url: 'https://creativecommune.com',
  email: 'creativecommune.info@gmail.com',
  sameAs: ['https://instagram.com/creativecommune_'],
  serviceType: ['Brand Strategy', 'Social Media Marketing', 'Performance Marketing', 'AI Automation', 'Web Design'],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
