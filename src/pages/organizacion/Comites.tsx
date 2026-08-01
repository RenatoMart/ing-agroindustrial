import React from 'react';
import { User, BadgeCheck } from 'lucide-react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { comites, type ComiteMiembro } from '@profile/content/comites';

/**
 * Página agrupada "Comités". El navbar muestra los comités por separado; todos
 * llevan aquí, a su ancla correspondiente (#calidad, #tutoria, ...). Cada comité
 * con integrantes se muestra como una cuadrícula de tarjetas (docentes y
 * representantes estudiantiles); los comités aún sin datos muestran el aviso
 * "En construcción". Todo el contenido vive en el perfil (@profile/content/comites).
 */
function MiembroCard({ miembro }: { miembro: ComiteMiembro }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Franja superior con avatar */}
      <div className="relative bg-primary pt-6 pb-10 flex justify-center items-end">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        />
        <div className="relative w-24 h-28 bg-white overflow-hidden border-4 border-white/20 shadow-xl rounded-sm">
          {miembro.foto ? (
            <img
              src={miembro.foto}
              alt={miembro.nombre}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: miembro.fotoPosicion ?? 'center 25%' }}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-end justify-center">
              <User className="w-20 h-20 text-gray-300 -mb-2" />
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>

      {/* Rol · nombre */}
      <div className="flex flex-col flex-1 p-5 text-center justify-center">
        <span className="inline-flex items-center gap-1 self-center rounded-full bg-gold/15 text-gold-ink text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 mb-2">
          <BadgeCheck className="w-3 h-3" aria-hidden="true" /> {miembro.rol}
        </span>
        <h4 className="font-display font-bold text-primary text-sm leading-tight">
          {miembro.grado ? `${miembro.grado} ` : ''}{miembro.nombre}
        </h4>
      </div>
    </div>
  );
}

export default function Comites() {
  return (
    <>
      {comites.map((comite, idx) => (
        <AnchoredSection key={comite.id} id={comite.id}>
          {comite.miembros.length > 0 ? (
            <div className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
              <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
                <SectionTitle title={comite.titulo} subtitle={comite.descripcion} center />
                {comite.resolucion && (
                  <p className="-mt-6 mb-10 text-center text-sm text-gray-500">
                    Conformado mediante {comite.resolucion}
                  </p>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                  {comite.miembros.map((miembro, i) => (
                    <MiembroCard key={`${miembro.nombre}-${i}`} miembro={miembro} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <EnConstruccion titulo={comite.titulo} bg={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'} />
          )}
        </AnchoredSection>
      ))}
    </>
  );
}
