import SectionHeader from '../components/SectionHeader';

const cities = [
  { name: 'Houston', state: 'Texas', address: '7500 Bellaire Blvd, Houston, TX 77036' },
  { name: 'Fort Worth', state: 'Texas', address: 'Pop-up Market & food trucks' },
  { name: 'Dallas', state: 'Texas', address: 'Deep Ellum & Bishop Arts' },
  { name: 'New York', state: 'NY', address: 'Queens & Brooklyn collabs' },
  { name: 'California', state: 'CA', address: 'LA + San Diego summer tour' }
];

export default function Locations() {
  return (
    <section id="locaciones" className="section-shell">
      <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_0.85fr]">
        <div className="space-y-8 rounded-[40px] border border-white/60 bg-white/85 p-6 shadow-card backdrop-blur-xl sm:p-8">
          <SectionHeader
            eyebrow="Locaciones"
            title="Estamos donde tú estás"
            description="Houston es casa, pero nuestros food trucks aparecen en Fort Worth, Dallas, New York y California. Síguenos en Instagram para saber dónde parqueará la Mega Mango Crew. 💨"
            align="left"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cities.map((city) => (
              <div
                key={city.name}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 p-5 shadow-card transition hover:-translate-y-1.5"
              >
                <div className="absolute -left-6 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-mangoGreen/30 blur-2xl" aria-hidden />
                <div className="relative flex items-center gap-3">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-mangoOrange/20 text-2xl">
                    📍
                    <span className="pulse-ring absolute inset-0" />
                  </span>
                  <div>
                    <p className="text-xl font-black text-night">{city.name}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-night/50">{city.state}</p>
                  </div>
                </div>
                <p className="relative mt-3 text-night/70">{city.address}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 rounded-3xl border border-night/5 bg-gradient-to-r from-mangoPeach via-white to-white p-6 text-sm text-night/70 shadow-card sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-night/50">Dirección principal</p>
              <p className="mt-2 text-2xl font-black text-night">7500 Bellaire Blvd, Houston, TX 77036</p>
              <p className="mt-2">Abierto todos los días · Delivery via Uber Eats · Walk-ins bienvenidos.</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/80 p-4 text-night/70">
              <p className="text-xs uppercase tracking-[0.4em] text-night/50">Horario sugerido</p>
              <p className="mt-1 font-semibold text-night">Lunes - Domingo · 12:00 p.m. a 10:00 p.m.</p>
              <p className="mt-1">Eventos privados bajo reserva previa.</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[40px] border border-white/60 bg-white/85 p-4 shadow-card">
          <div className="h-[480px] overflow-hidden rounded-[32px] border border-white/70">
            <iframe
              title="Mapa Houston Mega Mangos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.600694684308!2d-95.5214019246953!3d29.70417907506896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d293c05ab1%3A0x2c0d20593d3536c1!2s7500%20Bellaire%20Blvd%2C%20Houston%2C%20TX%2077036!5e0!3m2!1sen!2sus!4v1717200000000!5m2!1sen!2sus"
              loading="lazy"
              className="h-full w-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 rounded-3xl border border-white/70 bg-white/90 p-5 text-sm text-night/70">
            <p className="text-xs uppercase tracking-[0.4em] text-night/50">Radar de pop-ups</p>
            <p className="mt-2 text-night font-semibold">Anunciamos nuevas ubicaciones cada semana vía Instagram Stories.</p>
            <p className="mt-1">Activa las notificaciones y no te pierdas los drops sorpresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
