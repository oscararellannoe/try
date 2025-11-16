'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const reasons = [
  {
    icon: '😋',
    title: 'Jugoso, picante y 100% explosivo',
    description: 'Limón recién exprimido, chamoy hecho en casa y toppings ilimitados para customizar.'
  },
  {
    icon: '🌎',
    title: 'Sabores de toda Latinoamérica',
    description: 'Ocho recetas icónicas: México, Colombia, Nicaragua, Cuba, Guatemala, Honduras, Venezuela y USA style.'
  },
  {
    icon: '🚚',
    title: 'Delivery via Uber Eats',
    description: 'Desde 7500 Bellaire Blvd Houston directo a tu sala. También pick-up express en cada locación.'
  }
];

export default function WhyMega() {
  return (
    <section id="porque" className="section-shell">
      <div className="section-container overflow-hidden rounded-[50px] border border-white/60 bg-gradient-to-br from-white via-mangoPeach to-white p-6 shadow-card sm:p-10">
        <div className="grid gap-10 rounded-[40px] bg-white/80 p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[1.1fr_1fr]">
          <SectionHeader
            eyebrow="¿Por qué Mega Mangos?"
            title="Sabemos a nostalgia, fiesta y familia"
            description="Bilingüe, auténtico y orgullosamente latino. Cada mordisco es un viaje a las calles de Bogotá, DF, Managua o La Habana."
            align="left"
          />
          <div className="rounded-[32px] border border-white/70 bg-gradient-to-br from-mangoYellow/15 via-white to-white p-6 text-sm text-night/70 shadow-card">
            <p className="text-xs uppercase tracking-[0.45em] text-night/50">Manifiesto</p>
            <p className="mt-3 text-lg font-semibold text-night">Hecho por latinos para quienes extrañan la esquina del barrio.</p>
            <p className="mt-2">
              Respetamos la receta clásica, usamos fruta madura y toppings artesanales, y nunca ahorramos en limón ni picante. Todo llega fresco,
              armadito y listo para compartir.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                  className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/85 p-6 text-night shadow-card"
                >
                  <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-mangoRed via-mangoOrange to-mangoYellow" aria-hidden />
                  <div className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-night/5 text-3xl">{reason.icon}</div>
                  <h3 className="mt-6 text-2xl font-black text-night">{reason.title}</h3>
                  <p className="mt-2 text-night/70">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
