export const gradoAcademico = "Bachiller en Ingeniería Agroindustrial";
export const tituloProfesional = "Ingeniero Agroindustrial";

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

// Oportunidades de movilidad e intercambio (estudiantil y docente).
// Misma forma que `convenios`: se muestran como tarjetas.
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
