import imgIfc from '../assets/noticias/ifc.webp';
import imgGranadas from '../assets/noticias/granadas.webp';
import imgCitricos from '../assets/noticias/citricos.webp';

// Noticias y eventos institucionales — editar aquí para actualizar el feed.
// `imagen` puede ser null: la tarjeta muestra entonces un panel azul con ícono.
// `link` externo (http…) abre en una pestaña nueva; uno interno usa el router.
export interface Noticia {
  id: number;
  categoria: string;
  categoriaColor: string;
  titulo: string;
  resumen: string;
  fecha: string; // YYYY-MM-DD
  fechaFormateada: string;
  link: string;
  imagen: string | null;
}

// Fuente: gestion.pe/noticias/agroindustria (consultado 13-10-2026). Se toman
// las 3 más recientes; los resúmenes son parafraseados de los extractos de la
// página. Las miniaturas son las de cada nota en gestion.pe (descargadas a
// assets/noticias/; crédito: Gestión).
export const noticias: Noticia[] = [
  {
    id: 1,
    categoria: 'Agroindustria · Gestión',
    categoriaColor: 'bg-[#12377B] text-white',
    titulo: "IFC: era necesario que Perú quite a la incertidumbre de la 'prima de riesgo' para inversión",
    resumen:
      'La IFC, del Grupo Banco Mundial, señala que era necesario reducir la incertidumbre asociada a la prima de riesgo del Perú para atraer inversión. Pasaría de invertir unos US$ 400–500 millones al año a apuntar a cerca de US$ 2,000 millones.',
    fecha: '2026-09-22',
    fechaFormateada: '22 Set 2026',
    link: 'https://gestion.pe/economia/ifc-del-grupo-banco-mundial-sobre-el-peru-era-necesario-que-el-pais-quite-a-la-incertidumbre-de-la-prima-de-riesgo-para-inversion-noticia/',
    imagen: imgIfc,
  },
  {
    id: 2,
    categoria: 'Agroindustria · Gestión',
    categoriaColor: 'bg-gold text-ink',
    titulo: 'Evergreen anticipa boom de granadas en Tacna y amplía negocio de empaque: ¿nuevo fruto?',
    resumen:
      'Evergreen Agro prevé que El Niño afecte la producción de granadas en Tacna, pero ve un panorama positivo a largo plazo. La empresa también amplía su negocio de empaque.',
    fecha: '2026-09-02',
    fechaFormateada: '02 Set 2026',
    link: 'https://gestion.pe/economia/empresas/el-nino-apagaria-produccion-de-granadas-evergreen-proyecta-impacto-pero-anticipa-boom-a-largo-plazo-noticia/',
    imagen: imgGranadas,
  },
  {
    id: 3,
    categoria: 'Agroindustria · Gestión',
    categoriaColor: 'bg-primary text-white',
    titulo: 'Empresas de cítricos cambian ante El Niño: los cultivos y mercados que ahora miran',
    resumen:
      'Procitrus proyecta una caída en las exportaciones de mandarina, el principal cítrico de exportación. Ante ello, las empresas del sector exploran otros cultivos y nuevos mercados.',
    fecha: '2026-08-22',
    fechaFormateada: '22 Ago 2026',
    link: 'https://gestion.pe/economia/empresas/empresas-de-citricos-frente-a-impacto-de-el-nino-exploran-opciones-nuevos-mercados-noticia/',
    imagen: imgCitricos,
  },
];
