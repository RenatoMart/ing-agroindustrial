export const gradoAcademico = "Bachiller en Ingeniería Agroindustrial";
export const tituloProfesional = "Ingeniero Agroindustrial";

// Objetivos Educacionales del programa (OE1–OE4). Fuente: propuesta de Objetivos
// Educacionales y Académicos del Programa de Ingeniería Agroindustrial, UNT
// (Vicerrectorado Académico), confirmada por el usuario el 25-07-2026.
export const objetivosEducacionales = [
  { codigo: "OE1", formulacion: "Desarrolla procesos, productos o servicios agroindustriales con sostenibilidad y responsabilidad social." },
  { codigo: "OE2", formulacion: "Gestiona procesos y sistemas productivos en organizaciones agroindustriales." },
  { codigo: "OE3", formulacion: "Ejerce la profesión con ética, comunicación efectiva, trabajo en equipo y aprendizaje continuo." },
  { codigo: "OE4", formulacion: "Participa o lidera proyectos de investigación e innovación en el ámbito agroindustrial." }
];

// Objetivos Académicos del programa. Fuente: misma propuesta de Objetivos
// Educacionales y Académicos (Vicerrectorado Académico UNT), confirmada por el
// usuario el 25-07-2026. La tabla fuente traía una segunda columna que quedó
// cortada en la captura y no se pudo leer; no se incluye (no se inventa).
export const objetivosAcademicos = [
  "Gestionar y actualizar sistemáticamente el currículo de Ingeniería Agroindustrial.",
  "Asegurar el logro progresivo del perfil de egreso y el éxito académico de los estudiantes.",
  "Incorporar transversalmente la ética, la sostenibilidad y la responsabilidad social universitaria en el proceso formativo.",
  "Fortalecer la vinculación con empresas, egresados, empleadores, instituciones públicas y otros grupos de interés.",
  "Consolidar una gestión académica basada en información, autoevaluación, gestión de riesgos y mejora continua."
];

// El perfil del ingresante al Programa de Ingeniería Agroindustrial comprende el
// perfil general del ingresante a la Universidad Nacional de Trujillo, más la
// competencia propia del programa.
export const perfilIngresante = [
  {
    area: "Competencias instrumentales",
    descripcion: "Formación básica en las tecnologías de la información y la comunicación (TIC). Se comunica oralmente, lee y escribe diversos tipos de textos. Tiene un acervo cultural y científico básico que le permite comprender la realidad. Comprende, analiza y utiliza la lógica y las matemáticas de modo pertinente y creativo para resolver problemas del contexto real y de la vida académica."
  },
  {
    area: "Competencias interpersonales",
    descripcion: "Muestra una actitud de respeto a las normas de convivencia y del medioambiente. Se desenvuelve demostrando equilibrio emocional y salud física y mental."
  },
  {
    area: "Competencias sistémicas",
    descripcion: "Organiza su aprendizaje y trabaja en equipo. Aprecia las manifestaciones artístico-culturales. Convive y participa en forma democrática y construye interpretaciones históricas. Identifica proyectos de emprendedurismo económico social."
  },
  {
    area: "Competencia del programa",
    descripcion: "Demuestra disposición e interés para el estudio de temas sociales, culturales, productivos y ecológicos relevantes y de la Ingeniería Agroindustrial."
  }
];

// Competencias específicas del egresado (UC1–UC4).
export const perfilEgresado = [
  {
    area: "UC1 · Gestión de procesos productivos",
    descripcion: "Gestiona procesos productivos, optimiza y toma decisiones respecto de los recursos, procesos, maquinaria y equipo con la finalidad de solucionar problemas técnico-productivos en la generación de productos y/o servicios en la pequeña, mediana y gran empresa agroindustrial, en un contexto de productividad y competitividad, en el marco del desarrollo sostenible y la responsabilidad social."
  },
  {
    area: "UC2 · Proyectos agroindustriales",
    descripcion: "Realiza la formulación, implementación, ejecución, seguimiento y evaluación de proyectos inherentes a la actividad agroindustrial; identificando las oportunidades de negocio para la generación, producción, transformación y/o comercialización de bienes y/o servicios; empleando instrumentos y herramientas técnicas, económicas y financieras apropiadas que permitan tomar decisiones de viabilidad y factibilidad técnica y económica, en el marco del cumplimiento de normas y procedimientos establecidos."
  },
  {
    area: "UC3 · Sistemas de gestión",
    descripcion: "Planifica, implementa y evalúa sistemas de gestión en empresas e instituciones relacionadas al ámbito agroindustrial, basado en la excelencia y la mejora continua."
  },
  {
    area: "UC4 · Investigación e innovación",
    descripcion: "Desarrolla e informa investigación básica y aplicada para el diseño de productos, envases y procesos agroindustriales innovadores, así como el mejoramiento de los ya existentes; en función de la problemática agroindustrial, su contexto, prospectiva, desarrollo sostenible y responsabilidad social."
  }
];

// Modalidades para obtener el Título Profesional de Ingeniero Agroindustrial
// (RCU 274-2022 UNT; Reglamento N° 007-2022-UNT/URA).
export const titulacion = [
  {
    modalidad: "Tesis Profesional",
    descripcion: "Elaboración, ejecución y sustentación de una tesis con asesor, dentro de una línea de investigación del programa.",
    requisitos: [
      "Contar con el grado de Bachiller en Ingeniería Agroindustrial.",
      "Proyecto de tesis aprobado y resolución de nombramiento de jurado.",
      "Sustentación aprobada y tesis empastada con reporte de originalidad (Turnitin < 20%)."
    ]
  },
  {
    modalidad: "Trabajo de Suficiencia Profesional",
    descripcion: "Informe de experiencia en el campo profesional, conforme a la RCU 274-2022 UNT.",
    requisitos: [
      "Contar con el grado de Bachiller en Ingeniería Agroindustrial.",
      "Acreditar 1 año consecutivo o 2 años alternos de experiencia profesional posterior al bachillerato.",
      "Informe estructurado según el Reglamento N° 007-2022-UNT/URA y sustentación."
    ]
  }
];

// Fuente: documentos oficiales "GRADO BACHILLER" y "TÍTULO PROFESIONAL" del
// programa (Drive). Base normativa: RCU 274-2022 UNT, RCD N° 0042-2024-SUNEDU,
// Reglamento N° 007-2022-UNT/URA.
export const tramites = [
  {
    id: "bachiller",
    titulo: "Grado de Bachiller",
    descripcion: "Grado de Bachiller en Ingeniería Agroindustrial. Se otorga a quienes han aprobado el currículo vigente, con una duración mínima de cinco años o diez semestres académicos.",
    requisitos: [
      "Haber aprobado todas las asignaturas y créditos del programa de estudios de su currículo de ingreso.",
      "Acreditar conocimiento de un idioma (de preferencia inglés) en nivel básico, certificado por CIDUNT, el Departamento de Idiomas y Lingüística u otra institución reconocida.",
      "Aprobar el curso de Trabajo de Investigación (currículo 2018, vigente desde el 01 de abril de 2025)."
    ],
    // RCU N° 185-2025 UNT (adecuación de requisitos de grado).
    pdfUrl: "https://drive.google.com/file/d/1HTOC2JIKhDjlxEQbabvMTXVq2TVz-zFz/view"
  },
  {
    id: "titulo",
    titulo: "Título Profesional",
    descripcion: "Título de Ingeniero Agroindustrial. Se obtiene por Tesis Profesional o por Trabajo de Suficiencia Profesional, previa obtención del grado de Bachiller.",
    requisitos: [
      "Contar con el grado de Bachiller en Ingeniería Agroindustrial.",
      "Tesis Profesional: proyecto con asesor, sustentación y tesis empastada con reporte de originalidad (Turnitin < 20%).",
      "Trabajo de Suficiencia Profesional: 1 año consecutivo o 2 alternos de experiencia profesional (RCU 274-2022 UNT).",
      "Declaración jurada de autoría y carta de autorización de publicación."
    ],
    // Reglamento General de Otorgamiento de Grados y Títulos (N° 007-2022-UNT/URA).
    pdfUrl: "https://drive.google.com/file/d/1gI41xirJI8IYYi7w3wid1P19v8JQlSSd/view"
  }
];

// Procedimiento general de Movilidad y Becas de la UNT (aplica a todas las
// carreras de pregrado). Fuente: "PROCEDIMIENTO PARA LA MOVILIDAD Y BECAS"
// (M01.01.03.03-PR-001, V.2, aprobado 6/02/2024), documento oficial del
// Sistema de Gestión de la Calidad de la UNT.
// Documentos normativos oficiales de la UNT sobre movilidad académica y
// convenios (PDF alojados en public/). El Reglamento de Convenios (RCU
// 559-2024) establece las pautas para la suscripción de convenios de
// cooperación, pero —igual que el procedimiento— no nombra instituciones
// específicas con convenio ya firmado.
export const documentosMovilidad = [
  {
    titulo: "Procedimiento para la Movilidad y Becas",
    detalle: "M01.01.03.03-PR-001, V.2 (6/02/2024)",
    url: `${import.meta.env.BASE_URL}Procedimiento_Movilidad_Becas.pdf`,
  },
  {
    titulo: "Reglamento de Movilidad Académica para Docentes",
    detalle: "R.C.U. N° 0246-2023/UNT",
    url: `${import.meta.env.BASE_URL}Reglamento_Movilidad_Docente_RCU_246-2023.pdf`,
  },
  {
    titulo: "Reglamento del Programa de Movilidad Académica Estudiantil (PROMOVE-UNT)",
    detalle: "R.C.U. N° 0345-2024/UNT",
    url: `${import.meta.env.BASE_URL}Reglamento_Movilidad_Estudiantil_PROMOVE_RCU_345-2024.pdf`,
  },
  {
    titulo: "Reglamento de Convenios Nacionales e Internacionales de Movilidad Académica y Proyectos de Investigación",
    detalle: "R.C.U. N° 0559-2024/UNT",
    url: `${import.meta.env.BASE_URL}Reglamento_Convenios_RCU_559-2024.pdf`,
  },
];

export const procedimientoMovilidad = {
  objetivo: "Establecer los lineamientos para la ejecución de los convenios con universidades/instituciones públicas y privadas, nacionales e internacionales, para la movilidad de estudiantes, docentes y personal administrativo, así como para el intercambio de experiencias y el otorgamiento de becas.",
  alcance: "Para todas las carreras profesionales de pregrado de la UNT.",
  responsable: "Oficina de Relaciones Nacionales e Internacionales (ORNI)",
  // Fases resumidas del flujo oficial (37 actividades en el documento fuente).
  fases: [
    {
      titulo: "Convocatoria",
      descripcion: "ORNI recibe y difunde las convocatorias de universidades e instituciones, mediante webinars, charlas y redes sociales."
    },
    {
      titulo: "Postulación",
      descripcion: "El estudiante o docente presenta su expediente a la Facultad y lo deriva a ORNI, que lo tramita ante la institución de destino."
    },
    {
      titulo: "Aceptación y matrícula",
      descripcion: "Si es aceptado, se registra en el Sistema de Movilidad Académica (SIMOVAC) y se matricula en la UNT y en la institución de destino (con exoneración si hay convenio)."
    },
    {
      titulo: "Resultados y convalidación",
      descripcion: "Al finalizar, se presenta el certificado de estudios para la convalidación de experiencias curriculares y el registro de notas."
    }
  ],
  // Formatos oficiales que genera el procedimiento.
  formatos: [
    "Registro de Postulantes a Movilidad Académica (Estudiantes y Docentes)",
    "Registro de Postulantes Aceptados para realizar Movilidad Académica",
    "Registro de Resultados de Movilidad Académica"
  ],
  baseNormativa: [
    "Ley Universitaria N° 30220",
    "Estatuto Reformado de la UNT",
    "Reglamento del Sistema de Movilidad Académica de la UNT (SIMOVAC)",
    "Reglamento de Convenios Nacionales e Internacionales de intercambio académico",
    "Reglamento del Programa de Movilidad Estudiantil de la Red Peruana de Universidades (PROMOERPU)"
  ]
};

// Oportunidades de movilidad e intercambio (estudiantil y docente): convenios
// específicos con universidades de destino. El documento oficial trae el
// procedimiento general (arriba), pero no nombra convenios concretos.
// PENDIENTE: falta la relación real de universidades/instituciones con convenio activo.
export const movilidad = [
  {
    institucion: "Universidad o institución de destino",
    tipo: "Movilidad estudiantil",
    descripcion: "Descripción breve de la oportunidad de movilidad para estudiantes: destino, qué cubre y requisitos.",
    modalidad: "Semestral",
  },
  {
    institucion: "Universidad o institución de destino",
    tipo: "Movilidad docente",
    descripcion: "Descripción breve de la oportunidad de movilidad para docentes: estancias, intercambio o investigación.",
    modalidad: "Estancia corta",
  },
];
