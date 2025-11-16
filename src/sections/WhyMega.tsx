'use client';

import { motion } from 'framer-motion';
import { HeartHandshakeIcon, LeafIcon, TruckIcon } from '../components/LucideIcons';

const reasons = [
  {
    icon: HeartHandshakeIcon,
    title: 'Experiencia boutique',
    description: 'Equipos bilingües, empaque impecable y servicio en vivo con protocolo hospitalario.'
  },
  {
    icon: LeafIcon,
    title: 'Recetas con trazabilidad',
    description: 'Productores aliados entre Colombia, México y USA. Cada topping tiene ficha técnica y lote.'
  },
  {
    icon: TruckIcon,
    title: 'Logística nacional',
    description: 'Delivery express, food trucks certificados y operaciones listas para corporate catering.'
  }
];

export default function WhyMega() {
  return (
    <section id="porque" className="relative px-4 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[50px] border border-white/60 bg-gradient-to-br from-white via-mangoPeach to-white p-10 shadow-card">
        <div className="rounded-[40px] bg-white/80 p-8 text-center backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.5em] text-night/50">¿Por qué Mega Mangos?</p>
          <h2 className="mt-4 text-4xl font-black text-night sm:text-5xl">Sabemos a nostalgia, fiesta y familia.</h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-night/70">
            Bilingüe, auténtico y orgullosamente latino. Cada mordisco es un viaje a las calles de Bogotá, DF, Managua o La
            Habana.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-6 text-night shadow-card"
              >
                <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-mangoRed via-mangoOrange to-mangoYellow" aria-hidden />
                <div className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-night/5">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-night">{reason.title}</h3>
                <p className="mt-2 text-night/70">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
