import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Utensils } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { laboratorios, laboratoriosPortada } from '@profile/content/laboratorios';

export default function Laboratorios() {
  const totalLabs = laboratorios.filter((l) => l.tipo === 'Laboratorio').length;
  const totalTalleres = laboratorios.length - totalLabs;

  return (
    <>
      {/* Portada: la foto manda; el texto se apoya en un degradado azul institucional */}
      <section className="relative isolate overflow-hidden bg-primary">
        <img
          src={laboratoriosPortada.src}
          alt={laboratoriosPortada.alt}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/10 md:to-transparent" />
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-36 lg:py-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="w-10 h-0.5 bg-gold rounded-full mb-4" />
            <h2 className="font-display font-black text-white text-3xl md:text-5xl leading-tight">
              Labora<span className="text-gold">torios</span>
            </h2>
            <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
              La escuela cuenta con {totalLabs} laboratorios y {totalTalleres} taller para las prácticas de análisis,
              procesos, microbiología y cómputo de la carrera.
            </p>
          </motion.div>
        </div>
        <p className="absolute bottom-3 right-4 text-[11px] text-white/70">{laboratoriosPortada.pie}</p>
      </section>

      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nuestros **ambientes**"
            subtitle="Laboratorios y talleres disponibles para la formación práctica y la investigación."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-12">
            {laboratorios.map((lab, idx) => {
              const Icono = lab.tipo === 'Taller' ? Utensils : FlaskConical;
              return (
                <motion.article
                  key={lab.nombre}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 2) * 0.08, duration: 0.35 }}
                  className="group flex overflow-hidden rounded-xl border border-gray-100 border-l-4 border-l-gold bg-white shadow-sm hover:shadow-md hover:border-gold/40 transition"
                >
                  {lab.imagen && (
                    <img src={lab.imagen} alt={lab.nombre} loading="lazy" className="w-32 object-cover shrink-0" />
                  )}
                  <div className="flex items-start gap-4 p-5">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-primary flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Icono className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.15em] text-gold">{lab.tipo}</span>
                      <h3 className="font-display font-bold text-primary text-base leading-snug">{lab.nombre}</h3>
                      {lab.descripcion && <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{lab.descripcion}</p>}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
