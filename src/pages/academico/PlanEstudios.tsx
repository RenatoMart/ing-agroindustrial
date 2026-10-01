import { useState } from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import MallaFlow from '../../components/academico/MallaFlow';
import CurriculumVersionSwitch from '../../components/academico/CurriculumVersionSwitch';
import {
  CURRICULUM_DATA_2027,
  PREREQUISITES_EDGES_2027,
  CYCLE_COLUMNS_2027,
} from '@profile/content/malla2027';

export default function PlanEstudios() {
  const [version, setVersion] = useState('2018');

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Plan de **Estudios**"
          center
          subtitle="Explora la malla como un mapa interactivo: cada curso muestra créditos, horas y prerrequisitos. Toca un curso para ver su detalle."
        />

        {/* Selector de versión de la malla (2018 / 2027) */}
        <div className="mt-8 flex justify-start">
          <CurriculumVersionSwitch value={version} onChange={setVersion} />
        </div>

        <div className="mt-10">
          {version === '2018' ? (
            <MallaFlow key="2018" />
          ) : (
            <MallaFlow
              key="2027"
              data={CURRICULUM_DATA_2027}
              prerequisitesEdges={PREREQUISITES_EDGES_2027}
              cycleColumns={CYCLE_COLUMNS_2027}
              planPdfUrl={`${import.meta.env.BASE_URL}Curriculo_Ingenieria_Agroindustrial_2027.pdf`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
