'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const navItems = [
  { label: 'Sabores', href: '#sabores' },
  { label: '¿Por qué?', href: '#porque' },
  { label: 'Locaciones', href: '#locaciones' },
  { label: 'Instagram', href: '#instagram' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3"
    >
      <div className="relative w-full max-w-6xl">
        <div
          className={`flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
            isScrolled
              ? 'border-white/60 bg-white/90 shadow-card backdrop-blur-2xl'
              : 'border-white/50 bg-white/60 backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center gap-4">
            <Logo size={isScrolled ? 'sm' : 'md'} />
            <div className="hidden flex-col text-[10px] uppercase tracking-[0.3em] text-night/60 sm:flex">
              <span>Est. 2012 · Colombia</span>
              <span>Street Fruit Lab</span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-night/70 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-3 py-1 transition hover:bg-night/5 hover:text-night">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="https://www.ubereats.com/"
              target="_blank"
              className="rounded-full bg-night text-xs font-bold uppercase tracking-[0.3em] text-white transition hover:scale-[1.03] hover:bg-night/90"
            >
              Uber Eats
            </Link>
            <a
              href="#sabores"
              className="rounded-full border border-night/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-night transition hover:border-night hover:text-night"
            >
              Explorar
            </a>
          </div>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-night/10 p-2 text-night lg:hidden"
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-5 w-5 transition ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="glass-card absolute left-1/2 top-[calc(100%+1rem)] w-full max-w-sm -translate-x-1/2 rounded-3xl border border-white/60 p-6 text-center shadow-card lg:hidden">
            <div className="space-y-4 text-sm font-semibold text-night">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl bg-white/60 px-4 py-2.5 transition hover:-translate-y-0.5 hover:bg-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="https://www.ubereats.com/"
                target="_blank"
                className="block rounded-2xl bg-gradient-to-r from-mangoRed via-mangoOrange to-mangoYellow px-5 py-3 text-xs font-black uppercase tracking-[0.3em] text-night"
              >
                Ordenar Ahora
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
