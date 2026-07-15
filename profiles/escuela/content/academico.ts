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

export const titulacion = [
  {
    modalidad: "Modalidad de titulación 1",
    descripcion: "Descripción breve de la primera modalidad para obtener el título profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3"
    ]
  },
  {
    modalidad: "Modalidad de titulación 2",
    descripcion: "Descripción breve de la segunda modalidad para obtener el título profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2"
    ]
  }
];

export const tramites = [
  {
    id: "bachiller",
    titulo: "Grado de Bachiller",
    descripcion: "Descripción del trámite y procedimiento para obtener el Grado Académico de Bachiller.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3",
      "Requisito 4"
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Bachiller.pdf`
  },
  {
    id: "titulo",
    titulo: "Título Profesional",
    descripcion: "Descripción del trámite y procedimiento para obtener el Título Profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3",
      "Requisito 4"
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Titulo.pdf`
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
