'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo';

const slides = [
  {
    name: '🇲🇽 Mango Mexicano',
    description: 'Rojo intenso, chilito, limón y esa chispa que te despierta el alma.',
    color: '#ff004d',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '🇺🇸 Mango Americano',
    description: 'Suave, cremoso y perfecto para quienes quieren spice con un twist dulce.',
    color: '#ff6b35',
    image: 'https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '🇨🇴 Mango Colombiano',
    description: 'El clásico de casa con panela, limón, sal rosada y mucho amor.',
    color: '#ffd700',
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '🇳🇮 Mango Nicaragüense',
    description: 'Chiltoma, tajín casero y piquín para un golpe de nostalgia centroamericana.',
    color: '#00ff84',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '🇨🇺 Mango Cubano',
    description: 'Hierba buena, pimienta dulce y limón amarillo. Tropical AF.',
    color: '#ff9f1c',
    image: 'https://images.unsplash.com/photo-1529927066849-09cb256ab504?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '🇬🇹 Mango Guatemalteco',
    description: 'Pepitoria tostada, limón mandarina y salsita de tamarindo.',
    color: '#00a8ff',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '🇭🇳 Mango Hondureño',
    description: 'Sal negra, chile cabro y toque de maracuyá. Dulce + picante.',
    color: '#ff4d00',
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '🇻🇪 Mango Venezolano',
    description: 'Chamoy casero, queso costeño rallado y limón verde recién exprimido.',
    color: '#ff6bd6',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80'
  }
];

const social = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/megamangosoriginal',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      </svg>
    )
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/sharer/sharer.php?u=https://megamangos.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M13 3h4V0h-4c-3.309 0-6 2.691-6 6v3H4v4h3v11h4V13h4l1-4h-5V6c0-1.103.897-2 2-2z" />
      </svg>
    )
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/?text=Vamos%20a%20MEGA%20MANGOS!',
    icon: (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M16.027 3C9.397 3 4 8.334 4 14.883c0 2.493.82 4.801 2.214 6.676L4.927 29l7.67-1.987c1.878 1.033 4.03 1.619 6.242 1.619C25.47 28.632 30 23.297 30 16.75 30 10.2 25.47 4.867 18.84 4.867h-.016C17.22 4.867 16.027 3 16.027 3zm.044 3.134c5.563 0 10.095 4.503 10.095 10.063 0 5.561-4.532 10.064-10.095 10.064-1.99 0-3.93-.584-5.59-1.688l-.4-.25-4.55 1.18 1.215-4.408-.261-.417C5.312 19.105 4.7 17.027 4.7 15.014c0-5.56 4.532-10.064 10.095-10.064zM11.8 10.92a1 1 0 00-.979.721c-.138.489-.53 1.512-.568 1.623-.1.254-.197.609.117 1.194.315.585 1.181 1.934 2.54 3.13 1.748 1.536 3.22 2.013 3.658 2.236.466.236 1.01.201 1.342.122.409-.098 1.253-.512 1.43-1.005.177-.494.177-.918.124-1.005-.053-.088-.197-.142-.413-.25-.216-.107-1.254-.617-1.449-.688-.195-.071-.337-.106-.48.107-.142.213-.55.688-.674.832-.124.142-.249.16-.466.053-.216-.107-.912-.336-1.737-1.03-.642-.55-1.074-1.227-1.198-1.44-.124-.213-.013-.327.094-.429.095-.093.216-.236.33-.353.107-.118.142-.213.212-.355.071-.142.036-.266-.018-.374-.053-.106-.48-1.17-.657-1.6-.173-.419-.352-.425-.518-.43z" />
      </svg>
    )
  }
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <section id="hero" ref={heroRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-36 sm:px-10 lg:flex-row lg:items-center">
      <motion.div
        style={{ y: parallax }}
        className="absolute inset-0 -z-10 bg-hero-gradient opacity-70"
      />
      <motion.div
        style={{ y: parallax }}
        className="pointer-events-none absolute -left-10 top-10 -z-10 h-80 w-80 rounded-full bg-mangoYellow/30 blur-3xl"
      />
      <motion.div
        style={{ y: parallax }}
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-mangoGreen/30 blur-3xl"
      />
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <Logo size="lg" showTagline className="mx-auto lg:mx-0" />
        <p className="text-sm uppercase tracking-[0.6em] text-night/60">Houston · Fort Worth · Dallas · New York · California</p>
        <h1 className="text-4xl font-black leading-tight text-night sm:text-5xl lg:text-6xl">
          ¡Delicioso mango colombiano! <span className="text-mangoYellow">¿Ya lo probaste?</span>
        </h1>
        <p className="text-lg text-night/70 sm:text-xl">
          El sabor que te hace viajar a casa. Street food vibes, sazón latina y delivery via Uber Eats. 🥭🌶️
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            href="https://www.ubereats.com/"
            target="_blank"
            className="btn-glow w-full rounded-full bg-gradient-to-r from-mangoRed via-mangoOrange to-mangoYellow px-8 py-3 text-center text-sm font-extrabold uppercase tracking-[0.3em] text-night shadow-neon transition hover:scale-[1.03] sm:w-auto"
          >
            Ordena Ahora
          </Link>
          <a
            href="#sabores"
            className="w-full rounded-full border border-night/10 px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-night transition hover:border-mangoOrange hover:text-mangoOrange sm:w-auto"
          >
            Explora Sabores
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase text-night/60 lg:justify-start">
          <span className="rounded-full bg-night/5 px-3 py-1">Delivery con Uber Eats</span>
          <span className="rounded-full bg-night/5 px-3 py-1">Est. 2012 Colombia</span>
          <span className="rounded-full bg-night/5 px-3 py-1">CEO @patycohen</span>
        </div>
        <div className="flex items-center justify-center gap-3 lg:justify-start">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Compartir en ${item.label}`}
              className="rounded-full border border-night/10 p-3 text-night/70 transition hover:border-mangoOrange hover:text-mangoOrange"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 flex-1 lg:mt-0">
        <div className="relative rounded-[32px] border border-night/10 bg-white p-4 shadow-[0_25px_80px_rgba(5,6,10,0.08)]">
          <motion.div
            key={activeSlide.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="overflow-hidden rounded-[28px]"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.name}
              width={800}
              height={600}
              className="h-[320px] w-full rounded-[28px] object-cover"
              priority
            />
          </motion.div>
          <div className="mt-4 rounded-2xl bg-white p-5 text-center shadow-[0_20px_60px_rgba(5,6,10,0.08)]">
            <p className="text-sm uppercase tracking-[0.4em] text-night/50">En rotación</p>
            <p className="mt-2 text-2xl font-black" style={{ color: activeSlide.color }}>
              {activeSlide.name}
            </p>
            <p className="mt-2 text-night/70">{activeSlide.description}</p>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.name}
                onClick={() => setCurrentSlide(index)}
                className={`overflow-hidden rounded-2xl border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mangoYellow ${
                  currentSlide === index ? 'border-mangoYellow' : 'border-transparent'
                }`}
                aria-label={`Mostrar ${slide.name}`}
              >
                <Image src={slide.image} alt={slide.name} width={200} height={200} className="h-16 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
