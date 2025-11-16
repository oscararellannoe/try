import Header from '../components/Header';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Integrations from '../sections/Integrations';
import CallToAction from '../sections/CallToAction';
import Footer from '../sections/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0c111d] via-night to-night" />
      <div className="absolute inset-0 -z-10 bg-grid-radial opacity-60" />
      <Hero />
      <Features />
      <Integrations />
      <CallToAction />
      <Footer />
    </main>
  );
}
