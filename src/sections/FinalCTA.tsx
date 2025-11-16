import Link from 'next/link';
import { ArrowUpRightIcon, InstagramIcon, PhoneIcon } from '../components/LucideIcons';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative px-4 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-white/70 bg-gradient-to-br from-mangoRed/10 via-mangoPeach/70 to-white shadow-card">
        <div className="relative grid gap-10 p-10 text-center lg:grid-cols-2 lg:text-left">
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          </div>
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-mangoOrange">Último llamado</p>
            <h2 className="text-4xl font-black text-night sm:text-5xl">¿Listo para activar tu próxima experiencia tropical?</h2>
            <p className="text-lg text-night/70">
              Delivery express, combos familiares, eventos corporativos y catering tropical. Escríbenos y cuéntanos qué estilo quieres probar hoy.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://www.ubereats.com/"
                target="_blank"
                className="btn-glow flex w-full items-center justify-center gap-2 rounded-full bg-night px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white"
              >
                Ordena por Uber Eats <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <a
                href="#locaciones"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-night/10 px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-night transition hover:border-night hover:text-night"
              >
                Encuéntranos en ruta
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-3xl border border-night/10 bg-white/80 px-4 py-3 text-left">
                <InstagramIcon className="h-6 w-6 text-mangoOrange" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-night/50">Instagram</p>
                  <p className="font-semibold text-night">@megamangosoriginal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-night/10 bg-white/80 px-4 py-3 text-left">
                <PhoneIcon className="h-6 w-6 text-mangoOrange" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-night/50">WhatsApp</p>
                  <p className="font-semibold text-night">+1 (000) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[32px] border border-white/70 bg-white/90 p-8 text-left shadow-card">
            <p className="text-sm uppercase tracking-[0.4em] text-night/50">Servicio al cliente</p>
            <p className="mt-4 text-3xl font-black text-night">Mega Concierge</p>
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
