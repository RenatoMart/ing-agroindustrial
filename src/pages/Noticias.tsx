import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/layout/PageHero';
import { Card } from '../components/ui/Card';
import NoticiaLink from '../components/ui/NoticiaLink';
import { noticias } from '@profile/content/noticias';
import { site } from '@/profile';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

export default function Noticias() {
  return (
    <PageWrapper>
      <PageHero
        title="Noticias y Actualidad"
        subtitle={`Eventos, convocatorias y logros del ${site.programa.nombre}.`}
        icon={Newspaper}
        breadcrumbs={[{ label: 'Noticias' }]}
      />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          {noticias.length === 0 ? (
            <div className="flex flex-col items-center text-center max-w-md mx-auto py-12">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-4">
                <Newspaper className="w-7 h-7 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-primary text-lg">No hay noticias por el momento</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Cuando haya nuevos eventos, convocatorias o comunicados del programa, los publicaremos aquí.
              </p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {noticias.map((noticia, idx) => (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <NoticiaLink to={noticia.link} className="block h-full group">
                  <Card className="h-full flex flex-col p-0 overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Franja superior */}
                    <div className="h-1.5 bg-primary w-full" />
                    {/* Imagen */}
                    <div className="h-48 w-full overflow-hidden shrink-0">
                      {noticia.imagen ? (
                        <img
                          src={noticia.imagen}
                          alt={noticia.titulo}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-primary relative flex items-center justify-center">
                          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                          <Newspaper className="w-12 h-12 text-gold relative" aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.categoriaColor}`}>
                          {noticia.categoria}
                        </span>
                        <span className="flex items-center gap-1 text-gray-500 text-xs ml-auto">
                          <Calendar className="w-3 h-3" />
                          {noticia.fechaFormateada}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-primary text-base leading-snug mb-3 group-hover:text-gold transition-colors flex-1">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {noticia.resumen}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 text-gold text-sm font-bold group-hover:gap-2 transition-[gap]">
                        Leer más <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Card>
                </NoticiaLink>
              </motion.div>
            ))}
          </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
