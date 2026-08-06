import React, { useState } from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';
import CurriculumVersionSwitch from '../../components/academico/CurriculumVersionSwitch';
import { SectionTitle } from '../../components/ui/SectionTitle';
import CompetenciaItem from '../../components/academico/CompetenciaItem';
import { objetivosAcademicos, objetivosEducacionales } from '@profile/content/academico';

/**
 * Página agrupada "Objetivos". El navbar muestra "Objetivos educativos" y
 * "Objetivos académicos" por separado; ambos llevan aquí (#educativos / #academicos).
 */
export default function Objetivos() {
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
          <AnchoredSection id="academicos">
            <div className="bg-white py-16 md:py-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="w-full max-w-4xl mx-auto">
                  <SectionTitle
                    title="Objetivos **Académicos**"
                    center
                    subtitle="Lineamientos que orientan la gestión académica del programa de Ingeniería Agroindustrial."
                  />
                  <div className="mt-8 grid gap-4">
                    {objetivosAcademicos.map((texto, idx) => (
                      <CompetenciaItem
                        key={idx}
                        competencia={{ area: `Objetivo académico ${idx + 1}`, descripcion: texto }}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnchoredSection>

          <AnchoredSection id="educativos">
            <div className="bg-gray-50 py-16 md:py-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="w-full max-w-4xl mx-auto">
                  <SectionTitle
                    title="Objetivos **Educacionales**"
                    center
                    subtitle="Lo que se espera que el egresado de Ingeniería Agroindustrial logre en los primeros años de ejercicio profesional."
                  />
                  <div className="mt-8 grid gap-4">
                    {objetivosEducacionales.map((obj, idx) => (
                      <CompetenciaItem
                        key={obj.codigo}
                        competencia={{ area: obj.codigo, descripcion: obj.formulacion }}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnchoredSection>
        </>
      ) : (
        <EnConstruccion titulo="Objetivos **2027**" descripcion="Los objetivos del plan 2027 estarán disponibles próximamente." />
      )}
    </>
  );
}
