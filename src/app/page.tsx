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
    <main className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-white via-mangoBlush to-[#ffe2cc]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-radial opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-40 -z-10 h-[38rem] rounded-[50%] bg-gradient-to-br from-mangoGreen/25 via-mangoYellow/30 to-mangoOrange/40 blur-3xl" aria-hidden />
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
