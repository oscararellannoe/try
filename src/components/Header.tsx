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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-4 py-2 backdrop-blur-2xl transition-all ${
          isScrolled ? 'bg-night/70 shadow-neon' : 'bg-white/10'
        }`}
      >
        <div className="flex items-center gap-3">
          <Logo size={isScrolled ? 'sm' : 'md'} />
          <div className="flex flex-col text-[11px] uppercase tracking-[0.25em] text-white/70">
            <span>Est. 2012 · Colombia</span>
            <span>@patycohen</span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <Link
          href="https://www.ubereats.com/"
          target="_blank"
          className="hidden rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-night transition hover:scale-[1.03] sm:inline-flex"
        >
          Uber Eats
        </Link>
      </div>
    </motion.header>
  );
}
