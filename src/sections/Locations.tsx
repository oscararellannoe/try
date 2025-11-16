const cities = [
  { name: 'Houston', state: 'Texas', address: '7500 Bellaire Blvd, Houston, TX 77036' },
  { name: 'Fort Worth', state: 'Texas', address: 'Pop-up Market & food trucks' },
  { name: 'Dallas', state: 'Texas', address: 'Deep Ellum & Bishop Arts' },
  { name: 'New York', state: 'NY', address: 'Queens & Brooklyn collabs' },
  { name: 'California', state: 'CA', address: 'LA + San Diego summer tour' }
];

export default function Locations() {
  return (
    <section id="locaciones" className="relative px-4 py-24 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">Locaciones</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Estamos donde tú estás.</h2>
          <p className="text-lg text-white/80">
            Houston es casa, pero nuestros food trucks aparecen en Fort Worth, Dallas, New York y California. Síguenos en Instagram para saber dónde parqueará la Mega Mango Crew. 💨
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cities.map((city) => (
              <div key={city.name} className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-5">
                <div className="absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-mangoGreen/30 blur-2xl" />
                <div className="relative flex items-center gap-3">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-mangoOrange/30 text-2xl">
                    📍
                    <span className="pulse-ring absolute inset-0" />
                  </span>
                  <div>
                    <p className="text-xl font-black text-white">{city.name}</p>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">{city.state}</p>
                  </div>
                </div>
                <p className="mt-3 text-white/80">{city.address}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/15 bg-night/70 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Dirección principal</p>
            <p className="mt-3 text-2xl font-black text-mangoYellow">7500 Bellaire Blvd, Houston, TX 77036</p>
            <p className="mt-2 text-white/80">Abierto todos los días · Delivery via Uber Eats · Walk-ins bienvenidos.</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-[480px] overflow-hidden rounded-[36px] border border-white/15 shadow-neon">
            <iframe
              title="Mapa Houston Mega Mangos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.600694684308!2d-95.5214019246953!3d29.70417907506896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d293c05ab1%3A0x2c0d20593d3536c1!2s7500%20Bellaire%20Blvd%2C%20Houston%2C%20TX%2077036!5e0!3m2!1sen!2sus!4v1717200000000!5m2!1sen!2sus"
              loading="lazy"
              className="h-full w-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
