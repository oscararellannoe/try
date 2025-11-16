import Image from 'next/image';

const flavors = [
  {
    name: '🇲🇽 Mango Mexicano',
    description: 'Chamoy artesanal, miguelito rojo y limón verde. El más picante y adictivo.',
    color: '#ff004d',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '🇺🇸 Mango Americano',
    description: 'Butter chips, chile en polvo dulce y gummy bears para los sweet tooth.',
    color: '#ff6b35',
    image: 'https://images.unsplash.com/photo-1497051788611-2c64812349a0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '🇨🇴 Mango Colombiano',
    description: 'Panela, queso costeño y limón mandarina. Como en la esquina de tu barrio.',
    color: '#ffd700',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '🇳🇮 Mango Nicaragüense',
    description: 'Chilero casero, pepino, tajín verde y cacahuate tostado.',
    color: '#00ff84',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '🇨🇺 Mango Cubano',
    description: 'Hierba buena, pimienta dulce y sirope de guayaba. Refrescante y glam.',
    color: '#ff9f1c',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '🇬🇹 Mango Guatemalteco',
    description: 'Pepitoria tostada, chile cobanero y limón mandarina.',
    color: '#00a8ff',
    image: 'https://images.unsplash.com/photo-1470909752005-5fc0e884b5f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '🇭🇳 Mango Hondureño',
    description: 'Chile cabro, sal negra y maracuyá. Balance perfecto.',
    color: '#ff4d00',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '🇻🇪 Mango Venezolano',
    description: 'Chamoy casero, queso rallado y toque de anís estrellado.',
    color: '#ff6bd6',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Flavors() {
  return (
    <section id="sabores" className="relative px-4 py-28 sm:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-gradient-to-b from-white via-mangoBlush/60 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-night/50">Nuestros sabores</p>
          <h2 className="mt-4 text-4xl font-black text-night sm:text-5xl">
            Cada país tiene su versión favorita de mango preparado. ¿Cuál es la tuya?
          </h2>
          <p className="mt-3 text-lg text-night/70">Zoom suave, emojis y colores explosivos para que elijas tu combo ideal. 💚🥭</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {flavors.map((flavor) => (
            <article
              key={flavor.name}
              className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 text-night shadow-card transition hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(5,6,10,0.12)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/80 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden />
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative mt-5 space-y-3">
                <span className="inline-flex rounded-full bg-night/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-night/60">
                  Signature
                </span>
                <h3 className="text-2xl font-black" style={{ color: flavor.color }}>
                  {flavor.name}
                </h3>
                <p className="text-night/70">{flavor.description}</p>
              </div>
              <div className="relative mt-6 flex items-center justify-between rounded-2xl border border-night/5 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-night/60">
                <span>Sweet + Heat</span>
                <span className="text-night/40">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
