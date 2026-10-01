import React, { useState } from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import PerfilIngresante from '../academico/PerfilIngresante';
import PerfilEgresado from '../academico/PerfilEgresado';
import CurriculumVersionSwitch from '../../components/academico/CurriculumVersionSwitch';
import { SectionTitle } from '../../components/ui/SectionTitle';
import CompetenciaItem from '../../components/academico/CompetenciaItem';
import { Check } from 'lucide-react';
import { site } from '@/profile';
import { GraduationCap } from 'lucide-react';
import { perfilIngresante2027, perfilEgresado2027, practicasPreprofesionales2027 } from '@profile/content/academico';

/**
 * Página agrupada "Perfiles". El navbar muestra "Perfil de ingreso" y "Perfil de
 * egreso" por separado; ambos llevan aquí (#ingreso / #egreso). Reutiliza el
 * contenido existente de cada perfil para el Plan 2018; el Plan 2027 se arma
 * en esta misma página (estructura de competencias distinta a la de 2018).
 */
export default function Perfiles() {
  const [version, setVersion] = useState('2018');

  return (
    <>
      {/* Selector de versión del plan curricular (2018 / 2027) */}
      <div className="bg-white pt-10">
        <div className="container mx-auto px-4 md:px-8">
          <CurriculumVersionSwitch value={version} onChange={setVersion} />
        </div>
      </div>

      {version === '2018' ? (
        <>
          <AnchoredSection id="ingreso">
            <PerfilIngresante />
          </AnchoredSection>
          <AnchoredSection id="egreso">
            <PerfilEgresado />
          </AnchoredSection>
        </>
      ) : (
        <>
          <AnchoredSection id="ingreso">
            <div className="bg-white py-16 md:py-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="w-full max-w-4xl mx-auto">
                  <SectionTitle
                    title="Perfil del Ingresante"
                    center
                    subtitle={`Currículo 2027 (RCU N° 464-2026/UNT). Perfil institucional UNT y perfil específico del ${site.programa.nombre}, con los pesos del examen de admisión.`}
                  />
                  <div className="mt-8 bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
                    <ul className="space-y-4">
                      {perfilIngresante2027.map((comp, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <div className="bg-gold/15 text-gold rounded-full p-1 flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4" strokeWidth={3} />
                          </div>
                          <div>
                            <span className="font-bold text-primary">{comp.area}: </span>
                            <span className="text-gray-600 font-body text-sm leading-relaxed">{comp.descripcion}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnchoredSection>
          <AnchoredSection id="egreso">
            <div className="bg-gray-50 py-16 md:py-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="w-full max-w-4xl mx-auto">
                  <SectionTitle
                    title="Perfil del Egresado"
                    center
                    subtitle={`Currículo 2027 (RCU N° 464-2026/UNT). Competencias generales, específicas y de especialidad, con sus niveles de progresión (básico, intermedio, avanzado).`}
                  />
                  <div className="mt-8 grid gap-4">
                    {perfilEgresado2027.map((comp, idx) => (
                      <CompetenciaItem key={idx} competencia={comp} index={idx} />
                    ))}
                  </div>

                  <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-3 items-start max-w-4xl mx-auto">
                    <div className="bg-gold/15 text-gold rounded-full p-2 flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      <span className="font-bold text-primary">Prácticas preprofesionales: </span>
                      el Currículo 2027 exige un mínimo de {practicasPreprofesionales2027.horasMinimas} horas,
                      de carácter {practicasPreprofesionales2027.modalidad.toLowerCase()}, desarrolladas a
                      partir del {practicasPreprofesionales2027.desde.toLowerCase()}. Son requisito para{' '}
                      {practicasPreprofesionales2027.requisitoPara.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnchoredSection>
        </>
      )}
    </>
  );
}
