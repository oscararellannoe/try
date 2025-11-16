'use client';

import { motion } from 'framer-motion';

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
    <section id="porque" className="relative px-4 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-night/10 bg-white p-10 text-center shadow-[0_30px_100px_rgba(5,6,10,0.08)]">
        <p className="text-sm uppercase tracking-[0.5em] text-night/50">¿Por qué Mega Mangos?</p>
        <h2 className="mt-4 text-4xl font-black text-night sm:text-5xl">
          Sabemos a nostalgia, fiesta y familia.
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-night/70">
          Bilingüe, auténtico y orgullosamente latino. Cada mordisco es un viaje a las calles de Bogotá, DF, Managua o La Habana.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="rounded-[28px] border border-night/10 bg-white p-6 text-night shadow-[0_15px_45px_rgba(5,6,10,0.05)]"
            >
              <div className="text-4xl">{reason.icon}</div>
              <h3 className="mt-4 text-2xl font-black text-night">{reason.title}</h3>
              <p className="mt-2 text-night/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
