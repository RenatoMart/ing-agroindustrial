import React from 'react';
import { BadgeCheck, User } from 'lucide-react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { consejoFacultad } from '@profile/content/autoridades';
import fotoCentroFederado from '@profile/assets/organos-gobierno/centro-federado.webp';

// Misma tarjeta que usan Docentes y Comités (foto a todo el ancho, 4:5, borde
// azul institucional), para que todas las páginas de Organización se vean
// consistentes.
function MiembroCard({ miembro }: { miembro: { nombre: string; rol: string; cargo?: string; foto?: string | null } }) {
  return (
    <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-t-2xl border-2 border-primary bg-primary">
        {miembro.foto ? (
          <img src={miembro.foto} alt={miembro.nombre} loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-end justify-center">
            <User className="w-1/2 h-auto text-gray-300 -mb-2" />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 px-5 pt-5 pb-4 text-center justify-start">
        <span className="inline-flex items-center gap-1 self-center text-gold text-[10px] font-black uppercase tracking-[0.08em]">
          <BadgeCheck className="w-3 h-3" aria-hidden="true" /> {miembro.rol}
        </span>
        <div className="border-t border-gray-100 my-3" />
        <h4 className="font-display font-bold text-primary text-sm leading-tight">{miembro.nombre}</h4>
        {miembro.cargo && <p className="text-gray-500 text-xs mt-1">{miembro.cargo}</p>}
      </div>
    </div>
  );
}

/**
 * Página agrupada "Órganos de Gobierno". El navbar muestra cada órgano por
 * separado; todos llevan aquí, a su ancla correspondiente. Reúne las instancias
 * de gobierno de la facultad/escuela (Consejo de Facultad y representantes
 * estudiantiles como el Centro Federado). Denominaciones oficiales; pueden
 * variar por facultad.
 *
 * "Consejeros" se retiró (01-10-2026, a pedido del usuario): no formará parte
 * de esta página.
 */
export default function OrganosGobierno() {
  return (
    <>
      <AnchoredSection id="consejo-facultad">
        <div className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="Consejo de **Facultad**"
              subtitle="Máximo órgano de gobierno de la facultad: aprueba políticas académicas y administrativas. Lo preside el Decano."
              center
            />
            {/* PENDIENTE: faltan los demás consejeros (docentes y estudiantiles). */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto mt-8">
              {consejoFacultad.map((miembro, i) => (
                <MiembroCard key={`${miembro.nombre}-${i}`} miembro={miembro} />
              ))}
            </div>
          </div>
        </div>
      </AnchoredSection>

      <AnchoredSection id="representantes">
        <div className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="Centro **Federado**"
              subtitle="Representación estudiantil ante los órganos de gobierno de la Escuela Profesional de Ingeniería Agroindustrial."
              center
            />
            <div className="max-w-3xl mx-auto mt-8">
              <img
                src={fotoCentroFederado}
                alt="Integrantes del Centro Federado de Ingeniería Agroindustrial"
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </AnchoredSection>
    </>
  );
}
