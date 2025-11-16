'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-32 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-mint" />
          Edición 2025 · Beta cerrada
        </div>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Orquesta experiencias <span className="text-aurora">hiper-personalizadas</span> con IA en tiempo real.
        </h1>
        <p className="mt-6 text-lg text-white/70">
          PulseFlow sincroniza datos, contenido y automatizaciones para que cada cliente viva un viaje memorable. Diseño minimalista, animaciones suaves y decisiones asistidas por IA.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#cta"
            className="w-full rounded-full bg-aurora px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-night shadow-glow transition hover:scale-[1.01] sm:w-auto"
          >
            Explorar plataforma
          </Link>
          <button className="w-full rounded-full border border-white/30 px-8 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:w-auto">
            Ver manifesto
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mx-auto mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-3xl md:grid-cols-3"
      >
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-white/5 bg-black/20 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-sm text-white/60">{metric.caption}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const metrics = [
  { label: 'Tiempo real', value: '120ms', caption: 'Latencia promedio de orquestación' },
  { label: 'Retención', value: '+48%', caption: 'Incremento luego de 6 semanas' },
  { label: 'Integraciones', value: '40+', caption: 'Listas para conectar vía API' }
];
