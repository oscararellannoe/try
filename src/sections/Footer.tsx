export default function Footer() {
  return (
    <footer className="px-4 pb-12 pt-16 text-sm text-night/60 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[30px] border border-night/10 bg-white p-8 text-center shadow-[0_20px_60px_rgba(5,6,10,0.06)] sm:text-left lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-black text-night">MEGA MANGOS</p>
          <p className="text-xs uppercase tracking-[0.4em] text-night/50">Est. 2012 · Colombia</p>
          <p className="mt-3 text-night/70">🍋 7500 Bellaire Blvd, Houston, TX 77036</p>
        </div>
        <div className="flex flex-col gap-3 text-night/70 sm:flex-row sm:items-center">
          <a href="https://www.instagram.com/megamangosoriginal" target="_blank" className="transition hover:text-mangoOrange">
            Instagram
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://megamangos.com" target="_blank" className="transition hover:text-mangoOrange">
            Facebook
          </a>
          <a href="https://wa.me/?text=Vamos%20a%20MEGA%20MANGOS!" target="_blank" className="transition hover:text-mangoOrange">
            WhatsApp
          </a>
        </div>
        <p className="text-xs text-night/50">Copyright © {new Date().getFullYear()} · Est. 2012 Colombia · All rights reserved.</p>
      </div>
    </footer>
  );
}
