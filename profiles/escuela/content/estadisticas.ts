// Cifras oficiales del programa (Tabla 0-1: "Cifras de Matriculados, Egresados y
// Graduados del Programa — Ingeniería Agroindustrial").
//
// - `porCiclo`: número de estudiantes matriculados en cada semestre académico
//   (1ro … 10mo). `null` = la fuente no reporta dato para ese ciclo ese año.
// - `total`: número total de estudiantes por año (tal como lo declara la fuente;
//   no es la suma de los ciclos).
// - `egresados`: número de egresados por año (terminaron los cursos).
// - `bachilleres`: grados de Bachiller otorgados por año.
// - `egresados`/`bachilleres` en `null` = aún no corresponde (año en curso).

export interface EstadisticaAnual {
  anio: string;
  porCiclo: (number | null)[];
  total: number;
  egresados: number | null;
  bachilleres: number | null;
  /** Marca una nota al pie (p. ej. cifras parciales del año en curso). */
  nota?: string;
}

export const ciclosLabels = ['1ro', '2do', '3ro', '4to', '5to', '6to', '7mo', '8vo', '9no', '10mo'];

export const estadisticasAnuales: EstadisticaAnual[] = [
  {
    anio: '2026',
    porCiclo: [71, 19, 51, 1, 43, null, 27, null, 38, 2],
    total: 252,
    egresados: null,
    bachilleres: null,
    nota: 'Cifras oficiales hasta el 2026-I, incluye cursos por repetición y suficiencia.',
  },
  { anio: '2025', porCiclo: [71, 39, 28, 44, 39, 41, 36, 36, 48, 45], total: 238, egresados: 48, bachilleres: 44 },
  { anio: '2024', porCiclo: [41, 35, 41, 32, 50, 43, 40, 54, 40, 35], total: 199, egresados: 61, bachilleres: 63 },
  { anio: '2023', porCiclo: [45, 25, 57, 46, 51, 47, 43, 41, 60, 58], total: 217, egresados: 36, bachilleres: 37 },
  { anio: '2022', porCiclo: [58, 48, 52, 49, 46, 49, 59, 55, 35, 34], total: 235, egresados: 58, bachilleres: 57 },
  { anio: '2021', porCiclo: [59, 54, 46, 48, 62, 63, 36, 35, 44, 55], total: 255, egresados: 53, bachilleres: 55 },
  { anio: '2020', porCiclo: [57, 57, 63, 63, 36, 36, 52, 50, 61, 60], total: 266, egresados: 61, bachilleres: 61 },
];

// Fuente declarada de estas cifras (Declaración Pública del programa).
export const fuenteEstadisticas = {
  label: 'Ficha pública del programa',
  url: 'https://www.admisionunt.info/carreraDetalle/24',
};
