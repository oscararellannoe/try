'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/motion';

const partners = ['Notion', 'Figma', 'Linear', 'Slack', 'Zapier', 'Segment'];

export default function Integrations() {
  return (
    <section id="integrations" className="relative px-6 py-28 md:px-16">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-10 backdrop-blur-3xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">ECOSISTEMA</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Conecta tus herramientas favoritas y despliega experiencias sin fricción.
            </h2>
            <p className="mt-4 text-white/70">
              APIs modernas, webhooks instantáneos y plantillas listas para tus flujos. Extiende PulseFlow con bloques propios y mantenlo sincronizado con toda tu pila.
            </p>
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-1 flex-wrap justify-center gap-4"
          >
            {partners.map((partner) => (
              <div key={partner} className="group flex h-24 w-32 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70">
                <div className="text-lg font-semibold tracking-wide">{partner}</div>
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">Sync</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-xl font-semibold">Infraestructura segura</h3>
            <p className="mt-3 text-white/70">Cifrado extremo a extremo, control granular de permisos y auditoría continua.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-xl font-semibold">Flujos visuales</h3>
            <p className="mt-3 text-white/70">Mapea journeys con nodos inteligentes y visualiza el impacto en tiempo real.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
