import type { SiteConfig } from '@/profile-types';

/**
 * Identidad del programa de estudios. Editar este archivo (y `branding.ts`) cubre
 * la mayor parte de la re-tematización para un programa nuevo.
 *
 * Los textos de abajo son PLANTILLA: describen qué va en cada campo. Reemplázalos
 * por los datos de tu programa.
 */
export const site: SiteConfig = {
  programa: {
    nombre: 'Programa de Estudios de Ingeniería Agroindustrial',
    nombreCorto: 'Ingeniería Agroindustrial',
  },
  universidad: {
    nombre: 'Universidad Nacional de Trujillo',
    siglas: 'UNT',
    url: 'https://www.unitru.edu.pe',
    // Dominio para acotar el buscador del navbar (site:dominio). Déjalo vacío
    // para una búsqueda general en Google.
    dominio: 'unitru.edu.pe',
  },
  facultad: 'Facultad de Ciencias Agropecuarias',

  // Denominación del tipo de unidad académica. Se usa en subtítulos genéricos.
  denominacion: 'Programa de Estudios',

  // Wordmark del navbar: se muestra en dos líneas (línea 1 en azul, línea 2 en dorado).
  wordmark: { linea1: 'Ingeniería', linea2: 'Agroindustrial' },

  tagline:
    'Crea y transmite conocimiento científico, tecnológico e innovador con responsabilidad social acorde con las necesidades de la región y del país.',

  hero: {
    eyebrow: 'Programa de Estudios de',
    titulo: { linea1: 'Ingeniería', linea2: 'Agroindustrial' },
    descripcion:
      'Formamos profesionales competitivos y éticos, capaces de formular, planificar y gestionar proyectos y empresas para la generación de productos y/o servicios agroindustriales, mediante la enseñanza integral, efectiva, moderna y la investigación científica.',
    ctas: {
      primary: { label: 'Ver Plan de Estudios', to: '/academico/malla-curricular' },
      secondary: { label: 'Perfiles académicos', to: '/academico/perfiles' },
    },
  },

  // Sello de acreditación (badge del hero).
  // PENDIENTE: el documento del programa indica que está acreditado y con
  // reconocimiento internacional, pero NO nombra a la entidad acreditadora.
  // Reemplazar `entidad` y `texto` cuando se confirme (¿ICACIT, SINEACE?).
  acreditacion: {
    entidad: 'Entidad Acreditadora',
    estado: 'acreditada',
    texto: 'Acreditada por la Entidad',
    mostrarSello: true,
  },

  // Cifras destacadas de la franja del hero. Reemplaza números y etiquetas.
  cifras: [
    { numero: '830', etiqueta: 'Egresados', sub: 'A lo largo de 17 promociones' },
    { numero: '208', etiqueta: 'Créditos', sub: 'Plan de estudios 2018' },
    { numero: '1993', etiqueta: 'Año de creación', sub: 'Primer graduado en julio de 2000' },
  ],

  decana: {
    nombre: 'Dr. Raúl Benito Siche Jara',
    cargo: 'Decano de la Facultad de Ciencias Agropecuarias',
    // Fuente: saludo institucional del decano, confirmado por el usuario (11-09-2026).
    mensaje:
      'Es un honor, como Decano de la Facultad de Ciencias Agropecuarias de la Universidad Nacional de Trujillo, expresar mi cordial saludo a toda la comunidad del Programa de Ingeniería Agroindustrial, integrada por docentes, estudiantes y egresados comprometidos con la formación, la investigación y el desarrollo de nuestra sociedad. La Ingeniería Agroindustrial cumple un rol estratégico en el desarrollo de nuestra región y del país, al integrar la ciencia, la tecnología y la innovación para transformar nuestros recursos agropecuarios, generar valor agregado y contribuir a un desarrollo sostenible. En este contexto, nuestro Programa tiene el importante desafío de formar profesionales íntegros, críticos, éticos e innovadores, capaces de responder a las necesidades del sector productivo y de generar soluciones frente a los grandes retos de nuestro tiempo, con una visión regional, nacional y global. Desde la Facultad de Ciencias Agropecuarias reafirmamos nuestro compromiso con la excelencia académica, la investigación científica, la innovación y la responsabilidad social y ambiental, convencidos de que estos son pilares fundamentales para formar profesionales capaces de transformar su entorno. A toda la comunidad de Ingeniería Agroindustrial, mi reconocimiento y mis mejores deseos de éxito. Sigamos trabajando juntos para construir una profesión cada vez más innovadora, competitiva y comprometida con el desarrollo sostenible. Formar ingenieros agroindustriales es formar agentes de cambio capaces de convertir nuestros recursos en oportunidades, el conocimiento en innovación y la innovación en desarrollo sostenible.',
    // Video junto al mensaje escrito del decano. Por ahora NO es un video del
    // decano: es el mensaje del Dr. Juan Carlos Solano Gaviño, Presidente del
    // Comité de Calidad del programa (confirmado por el usuario, 01-10-2026).
    // `nombre`/`cargo` identifican a quien aparece en el video; si se
    // reemplaza por un video del propio decano, basta con quitarlos.
    video: {
      youtubeId: '4n88vKsfwik',
      start: 0,
      nombre: 'Dr. Juan Carlos Solano Gaviño',
      cargo: 'Presidente del Comité de Calidad del Programa de Ingeniería Agroindustrial',
    },
  },

  enlaces: {
    libroReclamaciones: 'https://reclamos.servicios.gob.pe/?institution_id=247',
    bolsaTrabajo: '#',
  },

  enlacesInstitucionales: [
    { label: 'Enlace institucional 1', url: '#' },
    { label: 'Enlace institucional 2', url: '#' },
    { label: 'Enlace institucional 3', url: '#' },
  ],
};
