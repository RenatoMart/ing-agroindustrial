// Laboratorios y talleres de la Escuela Profesional de Ingeniería Agroindustrial.
// Fuente: lista proporcionada por el usuario (13-10-2026). Solo se tienen los
// nombres; descripción, equipamiento y fotos NO se han proporcionado, así que
// quedan vacíos a propósito (no se inventa).
// Nota: el nombre del 6.º laboratorio termina en "PAI" tal como llegó; el
// significado de la sigla no se confirmó (¿Productos Agroindustriales?).
import portada from '../assets/laboratorios/practica-laboratorio.webp';
import analisis from '../assets/laboratorios/practica-analisis.webp';
import grupo from '../assets/laboratorios/estudiantes-laboratorio.webp';

// Fotos del carrusel de la página (estudiantes en práctica de laboratorio,
// proporcionadas por el usuario 13-10-2026). No corresponden a un laboratorio
// en particular. `position` es el object-position del encuadre.
export const laboratoriosFotos = [
  {
    src: portada,
    alt: 'Estudiantes de Ingeniería Agroindustrial trabajando con micropipetas en un laboratorio',
    position: '50% 35%',
  },
  {
    src: analisis,
    alt: 'Estudiantes midiendo y registrando datos de muestras sobre una mesa de acero inoxidable',
    position: '50% 30%',
  },
  {
    src: grupo,
    alt: 'Grupo de estudiantes con guardapolvo y gorro frente a las mesas de trabajo del laboratorio',
    position: '50% 45%',
  },
];

// Primera foto: la usan Inicio (tarjeta de Ambientes) y la portada.
export const laboratoriosPortada = {
  src: laboratoriosFotos[0].src,
  alt: laboratoriosFotos[0].alt,
  pie: 'Prácticas de laboratorio de los estudiantes de la escuela',
};

export interface Laboratorio {
  nombre: string;
  tipo: 'Laboratorio' | 'Taller';
  descripcion: string;
  imagen: string | null;
}

export const laboratorios: Laboratorio[] = [
  { nombre: 'Laboratorio de Tecnología de Productos Agroindustriales', tipo: 'Laboratorio', descripcion: '', imagen: null },
  { nombre: 'Laboratorio de Análisis por Instrumentación', tipo: 'Laboratorio', descripcion: '', imagen: null },
  { nombre: 'Laboratorio de Análisis Sensorial', tipo: 'Laboratorio', descripcion: '', imagen: null },
  { nombre: 'Laboratorio de Tecnología de Productos No Alimentarios', tipo: 'Laboratorio', descripcion: '', imagen: null },
  { nombre: 'Laboratorio de Biomoléculas', tipo: 'Laboratorio', descripcion: '', imagen: null },
  { nombre: 'Laboratorio de Microbiología y Biotecnología de los PAI', tipo: 'Laboratorio', descripcion: '', imagen: null },
  { nombre: 'Laboratorio de Informática, Estadística (Centro de Cómputo)', tipo: 'Laboratorio', descripcion: '', imagen: null },
  { nombre: 'Taller: Panificación y Pastelería', tipo: 'Taller', descripcion: '', imagen: null },
  { nombre: 'Laboratorio de Ingeniería de Procesos Agroindustriales', tipo: 'Laboratorio', descripcion: '', imagen: null },
];
