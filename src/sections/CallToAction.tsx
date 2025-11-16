'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section id="cta" className="relative px-6 py-32 md:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-aurora/20 via-blush/20 to-transparent p-12 text-center backdrop-blur-3xl"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">LISTA DE ESPERA</p>
        <h2 className="mt-6 text-4xl font-semibold">
          Construye experiencias conscientes con la plataforma favorita de los equipos modernos.
        </h2>
        <p className="mt-4 text-white/70">
          Solicita acceso anticipado para desbloquear workshops privados, librerías de plantillas y soporte estratégico.
        </p>
        <form className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="tu@email.com"
            className="h-12 flex-1 rounded-full border border-white/20 bg-black/40 px-6 text-sm text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none"
          />
          <button className="h-12 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.3em] text-night transition hover:scale-[1.01]">
            Unirme
          </button>
        </form>
      </motion.div>
    </section>
  );
}
