'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Producto', href: '#features' },
  { label: 'Integraciones', href: '#integrations' },
  { label: 'Clientes', href: '#testimonials' },
  { label: 'Contacto', href: '#cta' }
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
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 px-6 py-3 backdrop-blur-xl transition-all ${
          isScrolled ? 'bg-black/70 shadow-glow' : 'bg-white/5'
        }`}
      >
        <Link href="#" className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-aurora shadow-glow" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">PulseFlow</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="rounded-full border border-white/40 px-4 py-1 text-sm font-medium text-white transition hover:border-white hover:bg-white/10">
          Demo en vivo
        </button>
      </div>
    </motion.header>
  );
}
