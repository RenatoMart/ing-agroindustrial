// Comités Académicos Especializados del Programa de Ingeniería Agroindustrial.
//
// Fuente de integrantes:
//   - R.D. N° 503-2026-FAC.CC.AGROP. (29-05-2026): comités de Seguimiento al
//     Egresado, Ciencia y Tecnología, y Tutoría y Nivelación.
//   - Documento de contenido mínimo del programa: Presidente del Comité de Calidad.
//
// Cada comité conserva el `id` que usan los anclajes del menú (config/navigation.ts):
// calidad · curriculo · tutoria · egresado · investigacion · responsabilidad.
// Si `miembros` queda vacío, la página muestra el aviso "En construcción".
//
// PENDIENTE: integrantes del Comité Técnico de Currículo y del Comité de
// Responsabilidad Social; fotos de los miembros que aún no la tienen.

// Fotos oficiales reutilizadas (carpeta compartida assets/personas/).
import fotoNinaquispe from '../assets/personas/ninaquispe-zare.webp';
import fotoSiche from '../assets/personas/siche-jara.webp';
import fotoBarraza from '../assets/personas/barraza-jauregui.webp';
import fotoLinares from '../assets/personas/linares-lujan.webp';
import fotoSolano from '../assets/personas/solano-gavino.webp';
import fotoRojasNaccha from '../assets/personas/rojas-naccha.webp';
import fotoRojasPadilla from '../assets/personas/rojas-padilla.webp';

export interface ComiteMiembro {
  nombre: string;
  /** Presidente | Responsable | Miembro | Estudiante */
  rol: string;
  /** Dr. · Dra. · MSc. · Ing. (si aplica; los estudiantes no lo llevan) */
  grado?: string;
  foto?: string | null;
  /** Encuadre de la foto dentro del marco, p. ej. '50% 60%' (por defecto centrado). */
  fotoPosicion?: string;
}

export interface Comite {
  id: string;
  titulo: string;
  descripcion?: string;
  /** Resolución que lo conforma (se muestra bajo el título). */
  resolucion?: string;
  miembros: ComiteMiembro[];
}

export const comites: Comite[] = [
  {
    id: 'calidad',
    titulo: 'Comité de Calidad',
    descripcion: 'Responsable de la autoevaluación y la acreditación de la calidad del programa.',
    miembros: [
      { nombre: 'Juan Carlos Solano Gaviño', grado: 'Dr.', rol: 'Presidente', foto: fotoSolano },
    ],
  },
  {
    id: 'curriculo',
    titulo: 'Comité Técnico de Currículo',
    miembros: [],
  },
  {
    id: 'tutoria',
    titulo: 'Comité de Tutoría y Nivelación',
    descripcion: 'Comité Académico Especializado en Tutoría y Nivelación.',
    resolucion: 'R.D. N° 503-2026-FAC.CC.AGROP.',
    miembros: [
      { nombre: 'Viviano Paulino Ninaquispe Zare', grado: 'Dr.', rol: 'Responsable', foto: fotoNinaquispe, fotoPosicion: '50% 40%' },
      { nombre: 'Julio César Rojas Naccha', grado: 'MSc.', rol: 'Miembro', foto: fotoRojasNaccha, fotoPosicion: '50% 40%' },
      { nombre: 'Gregorio Mayer Ascón Dionicio', grado: 'Ing.', rol: 'Miembro', foto: null },
      { nombre: 'Madeleine Darline Martinez Llempen', rol: 'Estudiante', foto: null },
      { nombre: 'Esteban Adrián Benites Carranza', rol: 'Estudiante', foto: null },
    ],
  },
  {
    id: 'egresado',
    titulo: 'Comité de Seguimiento al Egresado',
    descripcion: 'Comité Académico Especializado en Seguimiento al Egresado.',
    resolucion: 'R.D. N° 503-2026-FAC.CC.AGROP.',
    miembros: [
      { nombre: 'Guillermo Alberto Linares Luján', grado: 'Dr.', rol: 'Responsable', foto: fotoLinares, fotoPosicion: '50% 30%' },
      { nombre: 'Paul Alexis Sisniegas Gálvez', grado: 'MSc.', rol: 'Miembro', foto: null },
      { nombre: 'Maricielo Xiomara Rafael Pretel', rol: 'Estudiante', foto: null },
      { nombre: 'Leticia Esther Armas Medina', rol: 'Estudiante', foto: null },
    ],
  },
  {
    id: 'investigacion',
    titulo: 'Comité de Ciencia y Tecnología',
    descripcion: 'Comité Académico Especializado en Ciencia y Tecnología.',
    resolucion: 'R.D. N° 503-2026-FAC.CC.AGROP.',
    miembros: [
      { nombre: 'Gabriela del Carmen Barraza Jáuregui', grado: 'MSc.', rol: 'Responsable', foto: fotoBarraza, fotoPosicion: '50% 40%' },
      { nombre: 'Carmen Rosa Rojas Padilla', grado: 'Dra.', rol: 'Miembro', foto: fotoRojasPadilla, fotoPosicion: '50% 30%' },
      { nombre: 'Raúl Benito Siche Jara', grado: 'Dr.', rol: 'Miembro', foto: fotoSiche, fotoPosicion: '50% 40%' },
      { nombre: 'Astrid Carlolina Luján Ascón', rol: 'Estudiante', foto: null },
      { nombre: 'Felipe Jair Sagastegui Segura', rol: 'Estudiante', foto: null },
    ],
  },
  {
    id: 'responsabilidad',
    titulo: 'Comité de Responsabilidad Social',
    miembros: [],
  },
];
