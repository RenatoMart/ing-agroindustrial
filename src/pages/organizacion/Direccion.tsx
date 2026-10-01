import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import { SectionTitle } from '../../components/ui/SectionTitle';
import AutoridadCard from '../../components/personas/AutoridadCard';
import DireccionEscuela from '../autoridades/Direccion';
import { directorDepartamento } from '@profile/content/autoridades';

/**
 * Página agrupada "Dirección". El navbar muestra "Director de escuela" y "Director
 * de departamento" por separado; ambos llevan aquí (#escuela / #departamento).
 *
 * "#departamento" mostraba un placeholder genérico ("En Construcción") aunque el
 * dato real (directorDepartamento) ya existía en el perfil — corregido 01-10-2026
 * a pedido del usuario.
 */
export default function Direccion() {
  return (
    <>
      <AnchoredSection id="escuela">
        <DireccionEscuela />
      </AnchoredSection>
      <AnchoredSection id="departamento">
        <div className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle title="Director de **Departamento**" center />
            <div className="max-w-3xl mx-auto mt-8">
              <AutoridadCard autoridad={directorDepartamento} principal={true} />
            </div>
          </div>
        </div>
      </AnchoredSection>
    </>
  );
}
