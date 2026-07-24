import type { Edge } from 'reactflow';

// Datos del plan de estudios de la escuela (contenido del perfil).
// El componente MallaFlow (sistema) consume estos datos vía @profile/content/malla.

// ── Tipos ──────────────────────────────────────────────────────────────────
export type AreaType = 'general' | 'especifico' | 'especialidad';

export interface CourseData {
  id: string;
  name: string;
  type: AreaType;
  credits: number;
  hoursT: number;
  hoursP: number;
  cycle: string;
  isElective: boolean;
  description: string;
}

// ── Plan de Estudios 2018 — Ingeniería Agroindustrial (UNT) ──────────────────
// Fuente: malla curricular oficial (MALLA CURRICULAR.xlsx). El `id` es el código
// de curso oficial. `hoursP` combina horas de práctica + laboratorio (P + L).
// `type` corresponde al área curricular por color de la malla oficial:
//   general → Estudios Generales · especifico → Específicas · especialidad → Especialidad.
// Los cuatro cursos electivos se representan como un nodo genérico por ciclo
// (igual que la malla oficial); sus opciones reales se listan en `description`.
// Total: 59 obligatorios + 4 electivos = 63 cursos · 208 créditos.
//
// PENDIENTE: falta la descripción/sumilla de cada asignatura (no consta en la
// fuente). Por eso `description` va vacío en los cursos obligatorios.
export const CURRICULUM_DATA: CourseData[] = [
  // ── CICLO I ──
  { id: '1992', name: 'Introducción a la Ingeniería Agroindustrial', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false, description: '' },
  { id: '1854', name: 'Desarrollo Personal', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false, description: '' },
  { id: '1855', name: 'Desarrollo del Pensamiento Lógico-Matemático', type: 'general', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo I', isElective: false, description: '' },
  { id: '1857', name: 'Lectura Crítica y Redacción de Textos Académicos', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false, description: '' },
  { id: '1863', name: 'Introducción al Análisis Matemático', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo I', isElective: false, description: '' },
  { id: '1864', name: 'Química General', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo I', isElective: false, description: '' },
  { id: 'EL-1', name: 'Electivo I', type: 'general', credits: 1, hoursT: 0, hoursP: 2, cycle: 'Ciclo I', isElective: true, description: 'Opciones: Taller de Técnicas de Comunicación Eficaz · Taller de Música · Taller de Liderazgo y Trabajo en Equipo · Taller de Deporte · Taller de Teatro.' },

  // ── CICLO II ──
  { id: '2038', name: 'Química Orgánica', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false, description: '' },
  { id: '1858', name: 'Sociedad, Cultura y Ecología', type: 'general', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo II', isElective: false, description: '' },
  { id: '1859', name: 'Cultura Investigativa y Pensamiento Crítico', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false, description: '' },
  { id: '1860', name: 'Ética, Convivencia Humana y Ciudadanía', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false, description: '' },
  { id: '1861', name: 'Análisis Matemático', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo II', isElective: false, description: '' },
  { id: '1874', name: 'Biología General', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo II', isElective: false, description: '' },
  { id: 'EL-2', name: 'Electivo II', type: 'general', credits: 1, hoursT: 0, hoursP: 2, cycle: 'Ciclo II', isElective: true, description: 'Opciones: Taller de Manejo de TIC · Taller de Danzas Folclóricas · Taller de Deporte · Taller de Música.' },

  // ── CICLO III ──
  { id: '2323', name: 'Física General', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: '' },
  { id: '2324', name: 'Geometría Descriptiva y CAD', type: 'especifico', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo III', isElective: false, description: '' },
  { id: '2325', name: 'Cálculo Integral', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: '' },
  { id: '2326', name: 'Bioquímica General', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: '' },
  { id: '2327', name: 'Estadística General', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: '' },
  { id: '2328', name: 'Química Analítica', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: '' },

  // ── CICLO IV ──
  { id: '2482', name: 'Termodinámica', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: '' },
  { id: '2483', name: 'Química y Análisis de Productos Agroindustriales', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: '' },
  { id: '2484', name: 'Ecuaciones Diferenciales', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: '' },
  { id: '2485', name: 'Fisiología Postcosecha y Animales de Beneficio', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: '' },
  { id: '2486', name: 'Microbiología General', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: '' },
  { id: '2487', name: 'Principios de Electricidad y Electrónica', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: '' },

  // ── CICLO V ──
  { id: '2951', name: 'Lenguaje de Programación', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: '' },
  { id: '2952', name: 'Métodos Estadísticos para la Investigación', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: '' },
  { id: '2953', name: 'Fenómenos de Transporte', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: '' },
  { id: '2954', name: 'Fisicoquímica Agroindustrial', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: '' },
  { id: '2955', name: 'Microbiología Agroindustrial', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: '' },
  { id: '2956', name: 'Economía General', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: '' },

  // ── CICLO VI ──
  { id: '3067', name: 'Resistencia de Materiales en Agroindustria', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: '' },
  { id: '3068', name: 'Sensometría', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: '' },
  { id: '3069', name: 'Ingeniería de Operaciones I', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: '' },
  { id: '3070', name: 'Principios de Control y Automatización', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: '' },
  { id: '3071', name: 'Método de Conservación de Alimentos', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: '' },
  { id: '3072', name: 'Contabilidad General y Costos', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: '' },

  // ── CICLO VII ──
  { id: '3387', name: 'Control y Aseguramiento de la Calidad', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: '' },
  { id: '3388', name: 'Metodología de la Investigación', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: '' },
  { id: '3389', name: 'Ingeniería de Operaciones II', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: '' },
  { id: '3390', name: 'Tecnología de Refrigeración y Congelación', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: '' },
  { id: '3391', name: 'Tecnología Agroindustrial I', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VII', isElective: false, description: '' },
  { id: '3392', name: 'Administración y Finanzas de Empresas', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: '' },

  // ── CICLO VIII ──
  { id: '3757', name: 'Gestión de Calidad e Inocuidad', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: '' },
  { id: '3758', name: 'Biotecnología y Bioingeniería', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: '' },
  { id: '3759', name: 'Sistemas de Envase y Embalaje', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: '' },
  { id: '3760', name: 'Agronegocios', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: '' },
  { id: '3761', name: 'Tecnología Agroindustrial II', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VIII', isElective: false, description: '' },
  { id: '3762', name: 'Contrataciones del Estado', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: '' },
  { id: '3763', name: 'Prácticas Preprofesionales I', type: 'especialidad', credits: 2, hoursT: 0, hoursP: 4, cycle: 'Ciclo VIII', isElective: false, description: '' },

  // ── CICLO IX ──
  { id: '3764', name: 'Sistemas Integrados de Gestión', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: '' },
  { id: '3765', name: 'Logística', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: '' },
  { id: '3766', name: 'Gestión de la Innovación e Investigación', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: '' },
  { id: '3767', name: 'Tecnología Agroindustrial III', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo IX', isElective: false, description: '' },
  { id: '3768', name: 'Diseño y Formulación de Proyectos Agroindustriales', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: '' },
  { id: '3769', name: 'Prácticas Pre Profesionales II', type: 'especialidad', credits: 2, hoursT: 0, hoursP: 4, cycle: 'Ciclo IX', isElective: false, description: '' },
  { id: 'EL-3', name: 'Electivo III', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: true, description: 'Opciones: Alimentación y Nutrición · Gestión del Talento Humano · Herramientas de Gestión Ambiental.' },

  // ── CICLO X ──
  { id: '3773', name: 'Auditorías de Sistemas de Gestión', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: false, description: '' },
  { id: '3775', name: 'Planeamiento y Control de la Producción', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: false, description: '' },
  { id: '3776', name: 'Prácticas Pre Profesionales III', type: 'especialidad', credits: 8, hoursT: 0, hoursP: 16, cycle: 'Ciclo X', isElective: false, description: '' },
  { id: '5228', name: 'Trabajo de Investigación', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: false, description: '' },
  { id: 'EL-4', name: 'Electivo IV', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: true, description: 'Opciones: Tecnología de Biocombustibles · Tecnología de Bebidas Alcohólicas y Enología · Industria del Cuero y Textil.' },
];

// Prerrequisitos oficiales (source = curso previo, target = curso que lo exige).
// El color de la arista sigue el área del curso destino.
const ORANGE = { stroke: '#fb923c', strokeWidth: 2 };
const SKY = { stroke: '#38bdf8', strokeWidth: 2 };
const EMERALD = { stroke: '#34d399', strokeWidth: 2 };

export const PREREQUISITES_EDGES: Edge[] = [
  { id: 'p-1', source: '1864', target: '2038', style: ORANGE },
  { id: 'p-2', source: '1863', target: '1861', style: EMERALD },
  { id: 'p-3', source: '1861', target: '2323', style: ORANGE },
  { id: 'p-4', source: '1861', target: '2325', style: ORANGE },
  { id: 'p-5', source: '1874', target: '2326', style: ORANGE },
  { id: 'p-6', source: '2038', target: '2326', style: ORANGE },
  { id: 'p-7', source: '1861', target: '2327', style: ORANGE },
  { id: 'p-8', source: '2038', target: '2328', style: ORANGE },
  { id: 'p-9', source: '2323', target: '2482', style: ORANGE },
  { id: 'p-10', source: '2325', target: '2482', style: ORANGE },
  { id: 'p-11', source: '2038', target: '2483', style: ORANGE },
  { id: 'p-12', source: '2325', target: '2484', style: ORANGE },
  { id: 'p-13', source: '2326', target: '2485', style: SKY },
  { id: 'p-14', source: '1874', target: '2486', style: ORANGE },
  { id: 'p-15', source: '2323', target: '2487', style: ORANGE },
  { id: 'p-16', source: '2487', target: '2951', style: ORANGE },
  { id: 'p-17', source: '2327', target: '2952', style: ORANGE },
  { id: 'p-18', source: '2484', target: '2953', style: ORANGE },
  { id: 'p-19', source: '2482', target: '2954', style: ORANGE },
  { id: 'p-20', source: '2486', target: '2955', style: SKY },
  { id: 'p-21', source: '2953', target: '3067', style: ORANGE },
  { id: 'p-22', source: '2952', target: '3068', style: SKY },
  { id: 'p-23', source: '2953', target: '3069', style: ORANGE },
  { id: 'p-24', source: '2951', target: '3070', style: ORANGE },
  { id: 'p-25', source: '2954', target: '3071', style: SKY },
  { id: 'p-26', source: '2955', target: '3071', style: SKY },
  { id: 'p-27', source: '2956', target: '3072', style: ORANGE },
  { id: 'p-28', source: '3071', target: '3387', style: SKY },
  { id: 'p-29', source: '3068', target: '3388', style: ORANGE },
  { id: 'p-30', source: '3069', target: '3389', style: ORANGE },
  { id: 'p-31', source: '3071', target: '3391', style: SKY },
  { id: 'p-32', source: '3072', target: '3392', style: ORANGE },
  { id: 'p-33', source: '3387', target: '3757', style: SKY },
  { id: 'p-34', source: '3389', target: '3759', style: SKY },
  { id: 'p-35', source: '3390', target: '3759', style: SKY },
  { id: 'p-36', source: '3392', target: '3760', style: SKY },
  { id: 'p-37', source: '3067', target: '3761', style: SKY },
  { id: 'p-38', source: '3757', target: '3764', style: SKY },
  { id: 'p-39', source: '3388', target: '3766', style: SKY },
  { id: 'p-40', source: '3763', target: '3769', style: SKY },
  { id: 'p-41', source: '3764', target: '3773', style: SKY },
];

export const CYCLE_COLUMNS: Record<string, number> = {
  'Ciclo I': 0, 'Ciclo II': 320, 'Ciclo III': 640, 'Ciclo IV': 960, 'Ciclo V': 1280,
  'Ciclo VI': 1600, 'Ciclo VII': 1920, 'Ciclo VIII': 2240, 'Ciclo IX': 2560, 'Ciclo X': 2880,
};
