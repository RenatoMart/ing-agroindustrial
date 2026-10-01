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

// ─────────────────────────────────────────────────────────────────────────
// Plan 2027 — Currículo del Programa de Estudios de Ingeniería Agroindustrial
// Fuente: documento oficial del Vicerrectorado Académico UNT (2026), aprobado
// por Resolución de Consejo de Facultad N° 014-2026-FAC.CC.AGROP. (24-09-2026)
// y ratificado por Resolución de Consejo Universitario N° 464-2026/UNT
// (28-09-2026). Se mantienen como exports separados de los del Plan 2018
// (arriba) para alimentar el selector de versión 2018/2027 ya existente en
// las páginas de Objetivos y Perfiles.
// ─────────────────────────────────────────────────────────────────────────

// Objetivos Académicos 2027 (OA1–OA5), con sus dos indicadores oficiales cada
// uno (la versión 2018 de `objetivosAcademicos` no trae indicadores porque la
// fuente de esa carga tenía la columna cortada; este documento sí la trae completa).
export const objetivosAcademicos2027 = [
  {
    codigo: "OA1",
    formulacion: "Gestionar y actualizar sistemáticamente el currículo de Ingeniería Agroindustrial.",
    indicador1: "Sílabos alineados y validados (=100%).",
    indicador2: "Acciones de mejora curricular implementadas (≥80%).",
  },
  {
    codigo: "OA2",
    formulacion: "Asegurar el logro progresivo del perfil de egreso y el éxito académico de los estudiantes.",
    indicador1: "Estudiantes que alcanzan el nivel esperado del perfil (≥70%).",
    indicador2: "Estudiantes en riesgo con atención oportuna (≥90%).",
  },
  {
    codigo: "OA3",
    formulacion: "Incorporar transversalmente la ética, la sostenibilidad y la responsabilidad social universitaria en el proceso formativo.",
    indicador1: "Asignaturas de especialidad que incorporan ética, sostenibilidad o RSU (=100%).",
    indicador2: "Beneficiarios satisfechos (≥70%).",
  },
  {
    codigo: "OA4",
    formulacion: "Fortalecer la vinculación con empresas, egresados, empleadores, instituciones públicas y otros grupos de interés.",
    indicador1: "Prácticas preprofesionales evaluadas (=100%).",
    indicador2: "Empleadores satisfechos con el desempeño de los egresados (≥70%).",
  },
  {
    codigo: "OA5",
    formulacion: "Consolidar una gestión académica basada en información, autoevaluación, gestión de riesgos y mejora continua.",
    indicador1: "Cumplimiento del Plan de Mejora (≥80%).",
    indicador2: "Cumplimiento del Plan Operativo (≥95%).",
  },
];

// Objetivos Educacionales 2027 (OE1–OE4). El texto coincide con el ya cargado
// en `objetivosEducacionales` (ambos provienen de la misma propuesta oficial);
// se duplica aquí para que la pestaña 2027 tenga su propia fuente de datos.
export const objetivosEducacionales2027 = [
  { codigo: "OE1", formulacion: "Desarrolla procesos, productos o servicios agroindustriales con sostenibilidad y responsabilidad social." },
  { codigo: "OE2", formulacion: "Gestiona procesos y sistemas productivos en organizaciones agroindustriales." },
  { codigo: "OE3", formulacion: "Ejerce la profesión con ética, comunicación efectiva, trabajo en equipo y aprendizaje continuo." },
  { codigo: "OE4", formulacion: "Participa o lidera proyectos de investigación e innovación en el ámbito agroindustrial." },
];

// Perfil de Ingreso 2027: perfil institucional (CI-1 a CI-7, común a toda la
// UNT) + perfil específico del programa (pesos del examen de admisión).
export const perfilIngresante2027 = [
  { area: "CI-1 · Autogestión personal básica", descripcion: "Gestiona su comportamiento y emociones de manera equilibrada, manteniendo condiciones básicas de salud física y mental, que le permiten cumplir responsabilidades académicas iniciales y relacionarse adecuadamente en el entorno universitario." },
  { area: "CI-2 · Competencia digital básica", descripcion: "Utiliza herramientas elementales de las tecnologías de la información y la comunicación para acceder, organizar y comunicar información académica, conforme a las exigencias iniciales del estudio universitario." },
  { area: "CI-3 · Base cultural y científica inicial", descripcion: "Aplica conocimientos culturales y científicos fundamentales para comprender contenidos introductorios de las áreas del conocimiento y desenvolverse en el proceso formativo universitario." },
  { area: "CI-4 · Razonamiento lógico matemático básico", descripcion: "Emplea el razonamiento lógico y matemático en la comprensión y resolución de problemas simples, utilizando procedimientos básicos de manera pertinente." },
  { area: "CI-5 · Convivencia y responsabilidad ciudadana", descripcion: "Actúa respetando normas de convivencia, principios ciudadanos y criterios básicos de cuidado del ambiente, en su interacción con la comunidad universitaria." },
  { area: "CI-6 · Comprensión lectora funcional", descripcion: "Comprende, analiza e interpreta instrucciones, consignas y textos académicos de nivel básico, considerando el contexto y el propósito comunicativo." },
  { area: "CI-7 · Respeto a la diversidad sociocultural", descripcion: "Interactúa con respeto y apertura frente a personas de diversas culturas, reconociendo la diversidad sociocultural como un valor para la convivencia universitaria." },
  { area: "Matemática (30% del examen de admisión)", descripcion: "Resuelve problemas aplicando razonamiento lógico y las bases matemáticas —aritmética, álgebra y geometría— requeridas." },
  { area: "Ciencia y Tecnología (30% del examen de admisión)", descripcion: "Explica fenómenos naturales utilizando nociones de biología, física y química, demostrando interés por el ámbito agroindustrial." },
  { area: "Comunicación (15% del examen de admisión)", descripcion: "Lee y se expresa con claridad oral y escrita en español, identificando intenciones, generando inferencias y valorando la validez de la información." },
  { area: "Historia (10%) / Ciudadanía y Cívica (5% del examen de admisión)", descripcion: "Argumenta posiciones éticas y ciudadanas, valorando su identidad y el patrimonio histórico, con responsabilidad por el bien común." },
  { area: "Inglés (5% del examen de admisión)", descripcion: "Comprende y produce mensajes básicos en inglés como herramienta de acceso a información técnica." },
];

// Perfil de Egreso 2027: 4 competencias generales + 2 específicas + 3 de
// especialidad, cada una con sus 3 niveles de progresión (básico, intermedio,
// avanzado) y el desempeño esperado oficial de cada nivel.
export const perfilEgresado2027 = [
  {
    area: "CG01 · Aprendizaje permanente (Competencia General)",
    descripcion: "Gestiona de manera autónoma y crítica procesos de aprendizaje complejos, anticipando necesidades futuras, integrando diversos saberes y aplicándolos para generar soluciones innovadoras y efectivas en contextos académicos, profesionales y sociales. Básico: identifica sus necesidades de aprendizaje utilizando diversas fuentes con rigor científico y académico. Intermedio: aplica estrategias para mejorar sus procesos de aprendizaje permanente, con actitud crítica y reflexiva. Avanzado: gestiona de manera autónoma procesos de formación especializada, anticipándose a cambios disruptivos y sintetizando evidencia científica para generar soluciones innovadoras.",
  },
  {
    area: "CG02 · Pensamiento crítico (Competencia General)",
    descripcion: "Evalúa información, ideas y argumentos para realizar juicios fundamentados, valorar y juzgar la solidez de las afirmaciones y conclusiones, tomando postura y fundamentando sus decisiones. Básico: comprende y describe información básica, garantizando su validez para formular conclusiones fundamentadas en evidencias. Intermedio: analiza información científica valorando su validez, confiabilidad y pertinencia para seleccionar alternativas fundamentadas. Avanzado: evalúa críticamente argumentos sobre el impacto de la ciencia y tecnología, integrando criterios éticos, regulatorios y de sostenibilidad para la toma de decisiones responsables.",
  },
  {
    area: "CG03 · Resolución de problemas (Competencia General)",
    descripcion: "Resuelve problemas complejos en contextos académicos, profesionales y sociales, aplicando conocimientos, herramientas y metodologías pertinentes, con criterios éticos, culturales y contextuales. Básico: comprende los principios fundamentales para el diseño de soluciones innovadoras, aplicando algoritmos, fórmulas o protocolos. Intermedio: analiza soluciones mediante metodologías y herramientas especializadas, considerando requisitos técnicos, económicos, ambientales y normativos. Avanzado: desarrolla soluciones integrales para problemas complejos con visión interdisciplinaria, integrando restricciones técnicas, económicas, sociales y ambientales.",
  },
  {
    area: "CG04 · Comunicación efectiva (Competencia General)",
    descripcion: "Comunica códigos verbales y no verbales, en español y una lengua extranjera, en forma oral y escrita, utilizando herramientas digitales pertinentes, adaptándose a la situación, audiencia y exigencias comunicativas interculturales. Básico: expresa códigos verbales y no verbales de manera efectiva usando herramientas digitales pertinentes. Intermedio: estructura textos técnicos y científicos con lenguaje riguroso propio de su especialidad. Avanzado: argumenta información compleja mediante estrategias adaptables a diferentes audiencias, integrando evidencia técnica, experimental y normativa.",
  },
  {
    area: "CE01 · Gestión por procesos (Competencia Específica)",
    descripcion: "Diseña e implementa procesos operativos, productivos y de gestión de información mediante herramientas cuantitativas y técnicas de control estadístico de la calidad, para incrementar la eficiencia organizacional y promover la mejora continua bajo estándares normativos vigentes. Básico: identifica y describe los elementos clave, variables, etapas e interacciones de los procesos. Intermedio: analiza procesos mediante indicadores, técnicas de modelamiento y herramientas estadísticas de control. Avanzado: diseña e implementa procesos integrando conocimientos especializados y criterios de salud, seguridad y sostenibilidad.",
  },
  {
    area: "CE02 · Gestión de proyectos (Competencia Específica)",
    descripcion: "Evalúa proyectos y soluciones tecnológicas integrando principios de gestión en ingeniería y análisis económico-financiero para optimizar recursos, evaluar riesgos y sustentar decisiones estratégicas orientadas a la sostenibilidad y generación de valor. Básico: reconoce los conceptos fundamentales de costos, presupuestos e indicadores económicos. Intermedio: aplica herramientas de gestión de proyectos y evaluación económico-financiera para estimar costos, beneficios y riesgos. Avanzado: evalúa proyectos en entornos multidisciplinarios integrando gestión en ingeniería, análisis económico-financiero y evaluación de riesgos.",
  },
  {
    area: "CES1 · Diseña y desarrolla productos y tecnologías agroindustriales (Especialidad)",
    descripcion: "Diseña, desarrolla y optimiza productos, procesos y tecnologías agroindustriales mediante la aplicación de conocimientos de ingeniería, ciencia de los alimentos, biotecnología e investigación aplicada, para agregar valor a los recursos agropecuarios. Básico: caracteriza materias primas y productos agroindustriales aplicando conocimientos de ciencias básicas y tecnología. Intermedio: diseña y desarrolla productos y procesos mediante métodos experimentales y análisis de datos. Avanzado: optimiza productos, procesos y tecnologías mediante investigación aplicada, integrando restricciones técnicas, económicas, sociales y ambientales.",
  },
  {
    area: "CES2 · Gestiona agronegocios y cadenas agroalimentarias (Especialidad)",
    descripcion: "Diseña y evalúa estrategias para la gestión y articulación de agronegocios y cadenas agroalimentarias, integrando criterios técnicos, comerciales, logísticos y de mercado, para fortalecer la competitividad y la inserción sostenible en entornos nacionales e internacionales. Básico: identifica la estructura y funcionamiento de los agronegocios y cadenas agroalimentarias. Intermedio: analiza estrategias de gestión comercial, logística y articulación de cadenas utilizando herramientas de análisis de mercado y TIC. Avanzado: diseña y evalúa estrategias evaluando oportunidades de mercado, riesgos y sostenibilidad en entornos nacionales e internacionales.",
  },
  {
    area: "CES3 · Gestiona la calidad, inocuidad y sostenibilidad agroindustrial (Especialidad)",
    descripcion: "Diseña y evalúa sistemas de calidad, inocuidad y estrategias de sostenibilidad en organizaciones agroindustriales, aplicando normas técnicas, requisitos regulatorios y herramientas de control y mejora continua, para garantizar la conformidad del producto y la seguridad alimentaria. Básico: identifica los principios de calidad, inocuidad y sostenibilidad de acuerdo con la normativa vigente. Intermedio: diseña sistemas de calidad e inocuidad aplicando normas técnicas y herramientas de control y mejora continua. Avanzado: evalúa sistemas de gestión de calidad, inocuidad y sostenibilidad en cadenas agroalimentarias, proponiendo estrategias de mejora continua.",
  },
];

// Prácticas preprofesionales 2027: requisito explícito del nuevo currículo
// (antes no estaba cuantificado en el perfil 2018 cargado).
export const practicasPreprofesionales2027 = {
  horasMinimas: 256,
  modalidad: "Extracurricular",
  desde: "Octavo ciclo",
  requisitoPara: "Matricularse en Seminario de desarrollo profesional (X ciclo) y para la obtención del grado de Bachiller.",
};
