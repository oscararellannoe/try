import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';

export default function FinalCTA() {
  return (
    <section id="cta" className="section-shell">
      <div className="section-container overflow-hidden rounded-[48px] border border-white/70 bg-gradient-to-br from-mangoRed/10 via-mangoPeach/70 to-white shadow-card">
        <div className="relative grid gap-10 p-6 text-center sm:p-10 lg:grid-cols-2 lg:text-left">
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          </div>
          <div className="relative space-y-8">
            <SectionHeader
              eyebrow="CTA final"
              title="¿Qué estás esperando? ¡Ven a Mega Mangos!"
              description="Delivery express, combos familiares, eventos corporativos y catering tropical. Escríbenos y cuéntanos qué estilo quieres probar hoy."
              align="left"
            />
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
                className="w-full rounded-full border border-night/10 px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-night transition hover:border-night hover:text-night"
              >
                Encuéntranos
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.45em] text-night/50">Aceptamos pedidos para eventos con 48h de antelación.</p>
          </div>
          <div className="relative rounded-[32px] border border-white/70 bg-white/90 p-8 text-left shadow-card">
            <p className="text-sm uppercase tracking-[0.4em] text-night/50">Servicio al cliente</p>
            <p className="mt-4 text-3xl font-black text-night">@megamangosoriginal</p>
            <p className="mt-2 text-night/70">DM para eventos privados, pop-ups y colaboraciones.</p>
            <div className="mt-6 space-y-3 text-night/70">
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
