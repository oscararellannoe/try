import Image from 'next/image';
import SectionIntro from '../components/SectionIntro';
import { ArrowUpRightIcon, InstagramIcon } from '../components/LucideIcons';

const posts = [
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1529927066849-09cb256ab504?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80'
];

export default function InstagramGallery() {
  return (
    <section id="instagram" className="relative px-4 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionIntro
          eyebrow="Contenido en vivo"
          title="Feed directo desde @megamangosoriginal"
          description="Historias, lanzamientos, behind the scenes y colaboraciones con marcas aliadas."
        />
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-night/60">
          <span className="inline-flex items-center gap-2 rounded-full border border-night/10 bg-white/80 px-4 py-2">
            <InstagramIcon className="h-4 w-4" /> +80K comunidad
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-night/10 bg-white/80 px-4 py-2">
            Stories diarias
          </span>
          <a
            href="https://www.instagram.com/megamangosoriginal"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-night/10 px-4 py-2 text-night transition hover:border-night"
          >
            Seguir cuenta <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <a
              key={post}
              href="https://www.instagram.com/megamangosoriginal"
              target="_blank"
              className="group relative block overflow-hidden rounded-[36px] border border-white/70 bg-white/70 p-2 shadow-card"
            >
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src={post}
                  alt={`Post de Mega Mangos ${index + 1}`}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white/95 via-white/70 to-white/90 opacity-0 transition group-hover:opacity-100">
                <InstagramIcon className="h-8 w-8" />
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-night">Ver en Instagram</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
