import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { revistas } from '@profile/content/investigacion';

export default function Revistas() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Revistas **Científicas**"
          subtitle="Publicaciones periódicas vinculadas al programa para la difusión de investigación agroindustrial."
          center
        />

        <div className="flex flex-col gap-12 max-w-3xl mx-auto mt-12">
          {revistas.map((revista, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="border-l-4 border-gold pl-6 md:pl-8"
            >
              <span className="text-gold-ink text-[11px] font-black uppercase tracking-[0.2em]">
                Revista científica
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black text-primary leading-tight mt-1.5 mb-3">
                {revista.nombre}
              </h3>

              <p className="text-xs text-gray-400 font-medium mb-5">
                ISSN {revista.issn} &nbsp;·&nbsp; DOI {revista.doi} &nbsp;·&nbsp; {revista.periodicidad}
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {revista.descripcion}
              </p>

              <p className="text-sm text-gray-500 mb-7">
                <span className="font-bold text-gray-600">Indexada en:</span> {revista.indexaciones.join(', ')}
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href={revista.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-black text-primary hover:text-gold-ink transition-colors"
                >
                  Visitar la revista <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${revista.correo}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" /> {revista.correo}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
