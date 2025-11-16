'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const features = [
  {
    title: 'Playbooks inteligentes',
    description: 'Arrastra bloques de IA, datos y automatización para diseñar journeys hiper dinámicos sin tocar código.',
    iconBg: 'bg-aurora/20',
    iconColor: 'text-aurora'
  },
  {
    title: 'Panel predictivo',
    description: 'Predicciones de churn, engagement y revenue en tiempo real con recomendaciones accionables.',
    iconBg: 'bg-mint/20',
    iconColor: 'text-mint'
  },
  {
    title: 'Colaboración async',
    description: 'Briefings compartidos, comentarios contextuales y aprobaciones rápidas desde cualquier dispositivo.',
    iconBg: 'bg-blush/20',
    iconColor: 'text-blush'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-28 md:px-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row"
      >
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">CORE STACK</p>
          <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
            Todo lo que necesitas para orquestar experiencias fluidas en un solo canvas.
          </h2>
          <p className="mt-4 text-white/70">
            Diseñado para equipos de producto, marketing y CX que quieren medir, iterar y lanzar en días.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <div className={`h-10 w-10 rounded-2xl ${feature.iconBg} flex items-center justify-center ${feature.iconColor}`}>
                •
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
