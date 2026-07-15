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
    // PENDIENTE: falta el texto real del mensaje de bienvenida del decano.
    mensaje:
      'Mensaje de bienvenida del decano(a). Aquí va un párrafo que recibe a los visitantes y resume el espíritu del programa. Reemplazar por texto real del decano(a) de tu programa.',
    // ID del video de YouTube para el mensaje de bienvenida. Déjalo vacío hasta
    // tener el video de tu programa; al ponerlo, el reproductor aparece solo.
    video: { youtubeId: '', start: 0 },
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
