import Image from 'next/image';

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
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-night/50">Instagram</p>
          <h2 className="text-4xl font-black text-night sm:text-5xl">Feed directo desde @megamangosoriginal</h2>
          <p className="text-lg text-night/70">Haz click para ver las stories y promociones más recientes.</p>
          <a
            href="https://www.instagram.com/megamangosoriginal"
            target="_blank"
            className="mx-auto inline-flex items-center gap-3 rounded-full border border-night/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-night transition hover:border-mangoOrange hover:text-mangoOrange"
          >
            Seguir en Instagram
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
                <p className="text-3xl">🥭</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-night">Ver en Instagram</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
