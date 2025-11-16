export default function Footer() {
  return (
    <footer className="px-6 pb-12 pt-20 text-center text-sm text-white/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} PulseFlow. Diseñado para creadores audaces.</p>
        <div className="flex gap-4 text-white/60">
          <a href="#" className="transition hover:text-white">
            Política
          </a>
          <a href="#" className="transition hover:text-white">
            Términos
          </a>
          <a href="#" className="transition hover:text-white">
            Soporte
          </a>
        </div>
      </div>
    </footer>
  );
}
