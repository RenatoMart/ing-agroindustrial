import React from 'react';
import { CheckCircle2, FileText, Download } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import InfoCard from '../../components/ui/InfoCard';
import { movilidad, procedimientoMovilidad, documentosMovilidad } from '@profile/content/academico';

export default function Movilidad() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Movilidad **Académica**"
          center
          subtitle="Oportunidades de movilidad e intercambio para estudiantes y docentes del programa."
        />

        {/* Procedimiento oficial de la UNT (M01.01.03.03-PR-001): aplica a toda
            la universidad, no da convenios específicos por institución. */}
        <div className="max-w-5xl mx-auto mt-10 bg-gray-50 border border-gray-100 rounded-2xl p-7 md:p-9">
          <p className="text-[11px] font-black uppercase tracking-[0.15em] text-gold mb-3">
            Procedimiento oficial · M01.01.03.03-PR-001
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            {procedimientoMovilidad.objetivo}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">Alcance</p>
              <p className="text-gray-700">{procedimientoMovilidad.alcance}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">Oficina responsable</p>
              <p className="text-gray-700">{procedimientoMovilidad.responsable}</p>
            </div>
          </div>

          <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3">Cómo funciona el proceso</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {procedimientoMovilidad.fases.map((fase, idx) => (
              <div key={fase.titulo} className="bg-white rounded-xl border border-gray-100 p-4">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-[11px] font-black mb-2">
                  {idx + 1}
                </span>
                <h4 className="font-display font-bold text-primary text-sm mb-1">{fase.titulo}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{fase.descripcion}</p>
              </div>
            ))}
          </div>

          <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3">Formatos que se generan</p>
          <ul className="space-y-1.5">
            {procedimientoMovilidad.formatos.map((formato) => (
              <li key={formato} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                {formato}
              </li>
            ))}
          </ul>
        </div>

        {/* Documentos normativos (reglamentos y procedimiento oficiales). */}
        <div className="max-w-5xl mx-auto mt-10">
          <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3">Documentos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {documentosMovilidad.map((doc) => (
              <a
                key={doc.titulo}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 bg-white border border-gray-100 hover:border-gold/40 hover:shadow-sm rounded-xl p-4 transition"
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

        {/* Convenios específicos por institución (pendientes de confirmar). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          {movilidad.map((item, idx) => (
            <InfoCard
              key={idx}
              titulo={item.institucion}
              tipo={item.tipo}
              descripcion={item.descripcion}
              metaLabel="Modalidad"
              metaValor={item.modalidad}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
