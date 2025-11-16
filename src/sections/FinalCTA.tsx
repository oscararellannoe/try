import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative px-4 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
        <div
          className="relative grid gap-8 bg-cover bg-center p-10 text-center lg:grid-cols-2 lg:text-left"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(3,31,20,0.85), rgba(255,0,77,0.6)), url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80')"
          }}
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.5em] text-mangoYellow">cta final</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">¿Qué estás esperando? ¡Ven a Mega Mangos!</h2>
            <p className="text-lg text-white/80">
              Delivery express, combos familiares, eventos corporativos y catering tropical. Escríbenos y cuéntanos qué estilo quieres probar hoy.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://www.ubereats.com/"
                target="_blank"
                className="btn-glow w-full rounded-full bg-gradient-to-r from-mangoRed via-mangoOrange to-mangoYellow px-8 py-3 text-center text-sm font-extrabold uppercase tracking-[0.3em] text-night"
              >
                Ordena por Uber Eats
              </Link>
              <a
                href="#locaciones"
                className="w-full rounded-full border border-white/40 px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-mangoYellow hover:text-mangoYellow"
              >
                Encuéntranos
              </a>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/20 bg-night/70 p-8 text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Servicio al cliente</p>
            <p className="mt-4 text-3xl font-black text-white">@megamangosoriginal</p>
            <p className="mt-2 text-white/80">DM para eventos privados, pop-ups y colaboraciones.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <p>📍 7500 Bellaire Blvd, Houston, TX</p>
              <p>📲 WhatsApp: +1 (000) 123-4567</p>
              <p>✉️ hola@megamangos.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
