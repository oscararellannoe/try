export default function Footer() {
  return (
    <footer className="px-4 pb-12 pt-16 text-sm text-night/60 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[36px] border border-white/60 bg-white/80 p-8 shadow-card backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-black text-night">MEGA MANGOS</p>
            <p className="text-xs uppercase tracking-[0.4em] text-night/50">Est. 2012 · Colombia</p>
            <p className="mt-3 text-night/70">🍋 7500 Bellaire Blvd, Houston, TX 77036</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-night/70">
            <a href="https://www.instagram.com/megamangosoriginal" target="_blank" className="rounded-full border border-night/10 px-4 py-2 transition hover:border-night hover:text-night">
              Instagram
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://megamangos.com"
              target="_blank"
              className="rounded-full border border-night/10 px-4 py-2 transition hover:border-night hover:text-night"
            >
              Facebook
            </a>
            <a href="https://wa.me/?text=Vamos%20a%20MEGA%20MANGOS!" target="_blank" className="rounded-full border border-night/10 px-4 py-2 transition hover:border-night hover:text-night">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-xs text-night/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mega Mangos. Todos los derechos reservados.</p>
          <p>Street Fruit Lab · Operaciones USA · Est. Colombia 2012</p>
        </div>
      </div>
    </footer>
  );
}
