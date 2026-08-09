// Contenido del panel lateral de Admisión (FloatingAdmissions).
// Las modalidades se muestran como tarjetas (en el orden de la lista).

export interface ModalidadAdmision {
  titulo: string;
  dirigidoA: string;
  vacantes: string;
  descripcion: string;
}

export interface InfoUtilItem {
  titulo: string;
  detalle: string;
}

// Fuente: Reglamento N° 013-2023-DAD/UNT "Reglamento de Admisión a los Programas
// de Estudios de Pregrado en la UNT" V.2.0 (aprobado con R.C.U. N° 229-2026/UNT,
// vigente desde el proceso de admisión 2027-I). Es el reglamento general de la
// UNT (rige para todos los programas, incluido Ingeniería Agroindustrial, que
// pertenece al Área B - Ciencias Básicas y Tecnológicas, Prueba B, art. 42°).
// Vacantes: cifras OFICIALES del cuadro "Oferta de Vacantes Proceso de Admisión
// 2027-I — Sede Trujillo" (R.C.U. N° 254-2026/UNT), fila de Ingeniería
// Agroindustrial (código 24): Examen Ordinario 14 · CEPUNT-I 11 · Personas con
// Discapacidad 1 · Quinto de Secundaria 3 · Premios de Excelencia 3.
// Fuente: admisionunt.info/docs/VACANTES_2027.pdf
// Las modalidades sin cifra en ese cuadro son supernumerarias (el reglamento las
// asigna aparte), así que conservan la regla del reglamento.
export const modalidadesAdmision: ModalidadAdmision[] = [
  {
    titulo: 'Examen Ordinario',
    dirigidoA: 'Egresados de Educación Secundaria. Los estudiantes que cursan el 5.° año compiten por 3 vacantes reservadas aparte.',
    vacantes: '14 vacantes (+ 3 para 5.° de secundaria)',
    descripcion: 'Modalidad a la que se somete la mayoría de los postulantes, en igualdad de condiciones. Ingeniería Agroindustrial evalúa mediante la Prueba B (Área de Ciencias Básicas y Tecnológicas).',
  },
  {
    titulo: 'Centro Preuniversitario (CEPUNT)',
    dirigidoA: 'Estudiantes matriculados en el CEPUNT, con examen de ubicación y tres exámenes sumativos vigentes.',
    vacantes: '11 vacantes',
    descripcion: 'El ingresante por CEPUNT está exonerado del examen ordinario, pero no del pago por derecho de postulación.',
  },
  {
    titulo: 'Examen Extraordinario — Premios de Excelencia y COAR',
    dirigidoA: 'Los dos primeros puestos del orden de mérito de instituciones educativas secundarias de La Libertad y egresados del Colegio de Alto Rendimiento (COAR).',
    vacantes: '3 vacantes',
    descripcion: 'Vacantes supernumerarias asignadas y gestionadas por la Dirección de Admisión de la UNT.',
  },
  {
    titulo: 'Examen Extraordinario — Personas con Discapacidad',
    dirigidoA: 'Postulantes con discapacidad acreditada mediante certificado emitido por una IPRESS.',
    vacantes: '1 vacante',
    descripcion: 'Reserva de vacantes establecida por la Ley General de la Persona con Discapacidad.',
  },
  {
    titulo: 'Examen Extraordinario — Deportistas y Víctimas de la Violencia',
    dirigidoA: 'Deportistas calificados de alto nivel acreditados por el IPD y beneficiarios del Programa de Reparaciones de Víctimas de la Violencia.',
    vacantes: 'Vacantes supernumerarias, en la segunda fase del proceso',
    descripcion: 'Asignadas y gestionadas directamente por la Dirección de Admisión de la UNT.',
  },
  {
    titulo: 'Traslados y Segunda Profesión',
    dirigidoA: 'Estudiantes con 4 semestres (o 72 créditos) aprobados en una universidad, o profesionales titulados que postulan a una segunda carrera.',
    vacantes: 'Máximo 6 vacantes (traslados) o 4 vacantes (segunda profesión) por programa, supernumerarias',
    descripcion: 'El traslado solo procede entre programas homólogos o de la misma área de formación profesional.',
  },
];

export const infoUtilAdmision: InfoUtilItem[] = [
  {
    titulo: 'Requisitos',
    detalle: 'Inscripción en línea en el portal de la Dirección de Admisión, adjuntando: recibo de pago por derecho de inscripción, fotografía digital a color tamaño pasaporte con fondo blanco, DNI (o carné de extranjería/pasaporte) y, para postulantes de 5.° de secundaria, constancia de estudios y autorización del padre o apoderado.',
  },
  {
    // Fuente: admisionunt.info/acreditacioninfo (Acreditación de Ingresantes).
    titulo: 'Si ingresas',
    detalle: 'Para formalizar tu ingreso debes acreditarte ante la Dirección de Admisión con: certificado original de estudios de 1.° a 5.° de secundaria (o Constancia de Logros de Aprendizaje del MINEDU), DNI original, declaración jurada de veracidad y recibo de pago de S/ 50.00 por derecho de acreditación.',
  },
  { titulo: 'Fechas', detalle: 'Periodos o meses en que se realizan los exámenes de admisión.' },
];

// Botón inferior: portal oficial de admisión de la universidad.
export const portalAdmision = {
  label: 'Portal de Admisión',
  url: 'https://www.admisionunt.info/carreraDetalle/24',
};
