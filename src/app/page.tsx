import Header from '../components/Header';
import Hero from '../sections/Hero';
import Flavors from '../sections/Flavors';
import WhyMega from '../sections/WhyMega';
import Locations from '../sections/Locations';
import InstagramGallery from '../sections/InstagramGallery';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-night">
      <Header />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#022b19] via-[#031f14] to-[#05060a]" />
      <div className="absolute inset-0 -z-10 bg-grid-radial opacity-70" />
      <Hero />
      <Flavors />
      <WhyMega />
      <Locations />
      <InstagramGallery />
      <FinalCTA />
      <Footer />
    </main>
  );
}
