import React from 'react';
import { FileText, Download } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import InfoCard from '../../components/ui/InfoCard';
import { convenios, registroConveniosUNT } from '@profile/content/investigacion';

export default function Convenios() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Convenios **Institucionales**" center subtitle="Alianzas estratégicas que potencian el desarrollo académico y las prácticas profesionales." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {convenios.map((convenio, idx) => (
            <InfoCard
              key={idx}
              titulo={convenio.institucion}
              tipo={convenio.tipo}
              descripcion={convenio.descripcion}
              metaLabel="Vigencia"
              metaValor={convenio.vigencia}
            />
          ))}
        </div>

        {/* La UNT mantiene cientos de convenios de toda la universidad; aquí
            solo se listan los vinculados al programa/facultad. Se enlaza el
            registro oficial completo para quien quiera verlo todo. */}
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-100">
          <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3">
            Registro completo de convenios de la UNT
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {registroConveniosUNT.map((doc) => (
              <a
                key={doc.titulo}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-gold/40 rounded-xl p-4 transition"
              >
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-primary leading-snug">{doc.titulo}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{doc.detalle}</p>
                </div>
                <Download className="w-4 h-4 text-gray-300 group-hover:text-gold shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
