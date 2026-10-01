import type { Edge } from 'reactflow';
import type { CourseData } from './malla';

// ── Plan de Estudios 2027 — Ingeniería Agroindustrial (UNT) ──────────────────
// Fuente: "Currículo del Programa de Estudios de Ingeniería Agroindustrial"
// (Vicerrectorado Académico UNT, 2026). Aprobado por Resolución de Consejo de
// Facultad N° 014-2026-FAC.CC.AGROP. (24-09-2026) y ratificado por Resolución
// de Consejo Universitario N° 464-2026/UNT (28-09-2026).
// Total: 60 obligatorios + 1 electivo (5 opciones) = 61 asignaturas · 203 créditos.
// `type` sigue la "Naturaleza" oficial: General → general · Específica → especifico
// · Especialidad → especialidad. `description` es el Resultado de Aprendizaje de
// Asignatura (RAA) oficial de cada curso (fuente, no resumen propio).
export const CURRICULUM_DATA_2027: CourseData[] = [
  // ── CICLO I ──
  { id: 'G11', name: 'Neurociencia del Aprendizaje', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false, description: 'Identifica los fundamentos neurocientíficos de los procesos afectivos, cognitivos y motivacionales, y estrategias cognitivas y metacognitivas, para optimizar su proceso formativo y la toma de decisiones orientada a su proyecto de vida personal.' },
  { id: 'G12', name: 'Lectura crítica y redacción de textos', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false, description: 'Analiza textos académicos, discrimina información relevante y redacta escritos coherentes y argumentados, usando fuentes confiables y normas básicas de comunicación académica.' },
  { id: 'G13', name: 'Cátedra José Faustino Sánchez Carrión: fundadores y personajes ilustres de la UNT', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false, description: 'Describe críticamente el pensamiento, legado e historia de Sánchez Carrión y otros personajes ilustres de la UNT, expresando su postura de manera oral y escrita, con propiedad, claridad, convicción y ética.' },
  { id: 'G14', name: 'Introducción a la matemática superior universitaria', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo I', isElective: false, description: 'Aplica lenguaje simbólico, razonamiento lógico y herramientas matemáticas básicas para modelar y resolver situaciones introductorias propias del contexto ingenieril.' },
  { id: 'G15', name: 'Química general', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo I', isElective: false, description: 'Aplica los principios de estructura de la materia, reacciones, estequiometría y equilibrio para interpretar fenómenos químicos vinculados con materias primas y procesos agroindustriales.' },
  { id: 'E16', name: 'Introducción a la ingeniería agroindustrial', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false, description: 'Describe la cadena de valor agroindustrial, sus procesos, actores y oportunidades de transformación, relacionándolos con criterios básicos de calidad, mercado y sostenibilidad.' },

  // ── CICLO II ──
  { id: 'G21', name: 'Física general', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo II', isElective: false, description: 'Aplica principios de mecánica, energía, fluidos y fenómenos físicos básicos para explicar y resolver situaciones introductorias de ingeniería agroindustrial.' },
  { id: 'G22', name: 'Cultura científica e Inteligencia Artificial', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false, description: 'Identifica y comprende la motivación, el problema científico, los métodos y el rol de la IA en descubrimientos y teorías representativas de la Física, Química, Biología-Medicina y Matemática, mediante el pensamiento crítico.' },
  { id: 'G23', name: 'Algoritmos y TICs', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false, description: 'Diseña algoritmos y utiliza herramientas TIC para procesar información y resolver problemas simples, comunicando resultados con orden lógico y precisión.' },
  { id: 'E24', name: 'Análisis matemático', type: 'especifico', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo II', isElective: false, description: 'Modela y resuelve problemas con funciones, límites y derivadas básicas, justificando procedimientos y resultados en contextos de ingeniería.' },
  { id: 'G25', name: 'Biología general', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo II', isElective: false, description: 'Caracteriza la organización biológica y la función de los sistemas vivos relevantes para la transformación agroindustrial, relacionando estructura, función y calidad de materias primas.' },
  { id: 'E26', name: 'Química orgánica', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false, description: 'Relaciona estructura, propiedades y reactividad de compuestos orgánicos con procesos de transformación, conservación y calidad de productos agroindustriales.' },

  // ── CICLO III ──
  { id: 'G35', name: 'Seguridad, Defensa Nacional e Inclusión de la Persona con Discapacidad', type: 'general', credits: 2, hoursT: 2, hoursP: 0, cycle: 'Ciclo III', isElective: false, description: 'Identifica información y situaciones problemáticas relacionadas con la seguridad y defensa nacional y las condiciones de inclusión de las personas con discapacidad, con pertinencia y objetividad.' },
  { id: 'E31', name: 'Cálculo integral', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: 'Resuelve problemas de acumulación, cambio y modelación mediante técnicas de integración, interpretando sus resultados en situaciones propias de la ingeniería.' },
  { id: 'G32', name: 'Estadística general', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: 'Organiza, analiza e interpreta datos mediante estadística descriptiva e inferencial básica para sustentar conclusiones iniciales en problemas académicos y agroindustriales.' },
  { id: 'E33', name: 'Geometría descriptiva y CAD', type: 'especifico', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo III', isElective: false, description: 'Representa y comunica objetos, componentes y arreglos básicos mediante dibujo técnico y CAD, respetando convenciones y precisión gráfica.' },
  { id: 'E34', name: 'Bioquímica general', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: 'Explica las transformaciones bioquímicas de biomoléculas y su relación con estabilidad, calidad y procesamiento de productos agroindustriales.' },
  { id: 'E36', name: 'Química analítica', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: 'Aplica métodos analíticos básicos para identificar y cuantificar componentes de muestras, interpretando resultados con criterios elementales de exactitud y confiabilidad.' },
  { id: 'E37', name: 'Principios de electricidad y electrónica', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false, description: 'Analiza circuitos y componentes eléctricos y electrónicos básicos para interpretar su funcionamiento y su aplicación inicial en sistemas de ingeniería.' },

  // ── CICLO IV ──
  { id: 'E41', name: 'Cálculo Diferencial', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: 'Modela fenómenos de variación y optimización utilizando derivadas y ecuaciones diferenciales introductorias para sustentar decisiones en problemas de ingeniería.' },
  { id: 'S42', name: 'Química de productos agroindustriales', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo IV', isElective: false, description: 'Caracteriza la composición y propiedades fisicoquímicas de productos agroindustriales para evaluar su aptitud tecnológica, conformidad y potencial de transformación.' },
  { id: 'S43', name: 'Termodinámica', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo IV', isElective: false, description: 'Analiza balances de energía, propiedades termodinámicas y eficiencia de sistemas para resolver problemas de transformación y aprovechamiento de recursos.' },
  { id: 'S44', name: 'Fisicoquímica agroindustrial', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: 'Relaciona equilibrio, cinética y fenómenos interfaciales con el comportamiento de productos y procesos agroindustriales para sustentar decisiones técnicas.' },
  { id: 'E45', name: 'Microbiología general', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: 'Identifica microorganismos de importancia agroindustrial y explica su efecto sobre la inocuidad, deterioro y bioprocesos en materias primas y alimentos.' },
  { id: 'S46', name: 'Economía Agroalimentaria', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false, description: 'Analiza variables económicas del sector agroalimentario para sustentar decisiones iniciales de producción, mercado y competitividad con enfoque sostenible.' },

  // ── CICLO V ──
  { id: 'E51', name: 'Programación y control de procesos', type: 'especifico', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo V', isElective: false, description: 'Modela, programa y monitorea variables de procesos agroindustriales para proponer esquemas de control que mejoren estabilidad, eficiencia y trazabilidad.' },
  { id: 'S52', name: 'Diseños experimentales para la investigación agroindustrial', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: 'Diseña experimentos, define variables y analiza resultados para sustentar técnicamente decisiones de mejora o innovación en procesos y productos agroindustriales.' },
  { id: 'S53', name: 'Transferencia de calor y masa', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo V', isElective: false, description: 'Analiza mecanismos y equipos de transferencia de calor y masa para seleccionar condiciones de operación pertinentes en procesos agroindustriales.' },
  { id: 'S54', name: 'Microbiología agroindustrial', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: 'Evalúa el comportamiento microbiológico en procesos de fermentación, conservación e inocuidad para controlar riesgos y aprovechar microorganismos de interés tecnológico.' },
  { id: 'E55', name: 'Contabilidad y finanzas de empresas', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: 'Interpreta estados financieros y costos básicos para apoyar decisiones de gestión y comunicar información económica con lenguaje técnico pertinente.' },
  { id: 'S56', name: 'Análisis instrumental en agroindustria', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false, description: 'Selecciona y aplica técnicas instrumentales para obtener, validar e interpretar datos útiles en control de calidad, investigación y desarrollo de productos.' },

  // ── CICLO VI ──
  { id: 'S61', name: 'Métodos de conservación de alimentos', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VI', isElective: false, description: 'Selecciona y evalúa métodos de conservación con base en mecanismos de deterioro, seguridad alimentaria, calidad y vida útil del producto.' },
  { id: 'E62', name: 'Metodología de la investigación', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: 'Formula problemas, objetivos y métodos de investigación, estructurando propuestas y reportes con rigor técnico y argumentación académica.' },
  { id: 'S63', name: 'Ingeniería de operaciones agroindustriales 1', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VI', isElective: false, description: 'Analiza y dimensiona operaciones unitarias agroindustriales para establecer condiciones de proceso seguras, eficientes y coherentes con el producto objetivo.' },
  { id: 'S64', name: 'Instrumentación y automatización de procesos', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VI', isElective: false, description: 'Integra sensores, actuadores, instrumentación y lógica de automatización para monitorear y mejorar el desempeño de procesos agroindustriales.' },
  { id: 'S65', name: 'Tecnología de refrigeración y congelación', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: 'Evalúa sistemas y parámetros de refrigeración y congelación para preservar calidad, inocuidad y eficiencia energética en cadenas agroindustriales.' },
  { id: 'S66', name: 'Tecnología de postcosecha', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false, description: 'Analiza operaciones de manejo postcosecha para reducir pérdidas, conservar calidad y sostener la competitividad de cadenas agroalimentarias.' },

  // ── CICLO VII ──
  { id: 'S71', name: 'Control y aseguramiento de la calidad', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VII', isElective: false, description: 'Diseña e implementa planes de control y aseguramiento de la calidad, interpretando requisitos técnicos, evidencias de conformidad y acciones de mejora.' },
  { id: 'S72', name: 'Sensometría', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: 'Diseña y ejecuta pruebas sensoriales, analiza resultados y comunica hallazgos para apoyar decisiones de formulación, aceptación y posicionamiento de productos.' },
  { id: 'S73', name: 'Ingeniería de operaciones agroindustriales 2', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: 'Integra operaciones, balances, restricciones y criterios de desempeño para optimizar sistemas agroindustriales con visión de proceso completo.' },
  { id: 'S74', name: 'Sistemas de envase y embalaje', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: 'Diseña soluciones de envase y embalaje considerando protección del producto, inocuidad, logística, normativa, sostenibilidad y necesidades del mercado.' },
  { id: 'E75', name: 'Administración y marketing', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false, description: 'Analiza mercados, segmentación, propuesta de valor y decisiones administrativas para formular estrategias comerciales viables en agroindustria.' },
  { id: 'S76', name: 'Tecnología agroindustrial I', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VII', isElective: false, description: 'Desarrolla técnicamente productos o procesos agroindustriales (frutas y hortalizas, cereales, café y cacao), definiendo parámetros operativos, controles de calidad y eficiencia productiva.' },

  // ── CICLO VIII ──
  { id: 'S81', name: 'Gestión de calidad e inocuidad', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VIII', isElective: false, description: 'Diseña y gestiona sistemas de calidad e inocuidad bajo normas y requisitos regulatorios, proponiendo controles y mejoras para asegurar conformidad y seguridad alimentaria.' },
  { id: 'S82', name: 'Biotecnología y bioingeniería Agroindustrial', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: 'Diseña alternativas biotecnológicas aplicadas al aprovechamiento, transformación o valorización de recursos agroindustriales, evaluando su factibilidad técnica y bioseguridad.' },
  { id: 'S83', name: 'Alimentación y nutrición', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: 'Evalúa la composición y el valor nutricional de alimentos para sustentar decisiones de formulación, rotulado y desarrollo de productos orientados al consumidor.' },
  { id: 'S84', name: 'Tecnología agroindustrial II', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VIII', isElective: false, description: 'Optimiza productos y procesos agroindustriales (recursos pecuarios, hidrobiológicos, forestales y bioproductos) integrando variables de operación, calidad, productividad y sostenibilidad.' },
  { id: 'S85', name: 'Agroexportación', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: 'Analiza requisitos de acceso a mercados, logística, costos, certificaciones y riesgos para diseñar estrategias de inserción competitiva de productos agroindustriales en comercio exterior.' },
  { id: 'S86', name: 'Gestión de operaciones agroindustriales', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false, description: 'Diseña y evalúa decisiones de capacidad, abastecimiento, programación y mejora operativa para incrementar el desempeño integral de sistemas agroindustriales.' },

  // ── CICLO IX ──
  { id: 'S91', name: 'Seguridad Salud Ocupacional y Medio Ambiente', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: 'Evalúa riesgos ocupacionales y ambientales y propone controles, indicadores y planes de mejora conforme a normativa, sostenibilidad y responsabilidad profesional.' },
  { id: 'S92', name: 'Cadena de Suministro y logística agroindustrial', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: 'Diseña estrategias logísticas y de cadena de suministro que articulen abastecimiento, almacenamiento, transporte y servicio, optimizando costo, tiempo y nivel de cumplimiento.' },
  { id: 'S93', name: 'Proyecto de tesis', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: 'Formula y sustenta un proyecto de investigación aplicado a la agroindustria, definiendo problema, método, viabilidad y aporte esperado con rigor académico.' },
  { id: 'S94', name: 'Emprendimiento agroindustrial', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IX', isElective: false, description: 'Diseña un modelo de negocio agroindustrial evaluando propuesta de valor, cliente, operación, riesgos y sostenibilidad económica para sustentar su viabilidad y generación de valor.' },
  { id: 'S95', name: 'Diseño y formulación de proyectos agroindustriales I', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo IX', isElective: false, description: 'Formula proyectos agroindustriales integrando diagnóstico, ingeniería básica, costos, riesgos, sostenibilidad y criterios de decisión técnico-económica.' },
  { id: 'S96', name: 'Tecnología agroindustrial III', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo IX', isElective: false, description: 'Optimiza integralmente una línea o sistema agroindustrial (lácteos, cárnicos, hidrobiológicos) articulando conocimiento especializado, control del proceso, calidad, costos e impacto ambiental.' },

  // ── CICLO X ──
  { id: 'S101', name: 'Integración y Auditorías de sistemas de gestión', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo X', isElective: false, description: 'Evalúa sistemas integrados de gestión mediante auditorías, análisis de hallazgos y propuestas de mejora continua orientadas al desempeño, al cumplimiento y a la competitividad.' },
  { id: 'S102', name: 'Trabajo de investigación', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: false, description: 'Ejecuta y comunica una investigación aplicada o tecnológica, analizando resultados con rigor metodológico y utilizando herramientas especializadas para producir conclusiones válidas.' },
  { id: 'S103', name: 'Seminario de desarrollo profesional', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: false, description: 'Argumenta decisiones profesionales y proyecta su desarrollo continuo, integrando ética, comunicación especializada, tendencias tecnológicas y empleabilidad.' },
  { id: 'S104', name: 'Agronegocios', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: false, description: 'Diseña y evalúa estrategias de agronegocio mediante el análisis de competitividad, financiamiento, riesgos, cadenas de valor y sostenibilidad para fortalecer la inserción en mercados nacionales e internacionales.' },
  { id: 'S105', name: 'Diseño y formulación de proyectos agroindustriales II', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo X', isElective: false, description: 'Evalúa la factibilidad y viabilidad integral de proyectos agroindustriales, sustentando técnica y económicamente alternativas de inversión y escalamiento.' },
  { id: 'S106', name: 'Electivo', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo X', isElective: true, description: 'Opciones: Agroindustria del azúcar y derivados · Tecnología de bebidas alcohólicas · Tecnología de productos hidrobiológicos · Tecnología del café y cacao · Certificaciones para la Agroexportación.' },
];

// Prerrequisitos oficiales (source = curso previo, target = curso que lo exige).
// Nota: el documento fuente trae algunas erratas de código en la columna de
// prerrequisitos (p. ej. "E35", "E43", "E52", "E85", "E94" no existen como curso);
// se interpretaron por el curso real equivalente más cercano en la estructura
// (E34, S43, S52, E75, S94 respectivamente) para que el grafo no quede roto.
const ORANGE = { stroke: '#fb923c', strokeWidth: 2 };
const SKY = { stroke: '#38bdf8', strokeWidth: 2 };
const EMERALD = { stroke: '#34d399', strokeWidth: 2 };

export const PREREQUISITES_EDGES_2027: Edge[] = [
  { id: 'q-1', source: 'G14', target: 'E24', style: ORANGE },
  { id: 'q-2', source: 'G15', target: 'E26', style: ORANGE },
  { id: 'q-3', source: 'E24', target: 'E31', style: ORANGE },
  { id: 'q-4', source: 'G14', target: 'G32', style: EMERALD },
  { id: 'q-5', source: 'G23', target: 'E33', style: ORANGE },
  { id: 'q-6', source: 'G25', target: 'E34', style: ORANGE },
  { id: 'q-7', source: 'E26', target: 'E36', style: ORANGE },
  { id: 'q-8', source: 'G21', target: 'E37', style: ORANGE },
  { id: 'q-9', source: 'E31', target: 'E41', style: ORANGE },
  { id: 'q-10', source: 'E34', target: 'S42', style: SKY },
  { id: 'q-11', source: 'E36', target: 'S43', style: SKY },
  { id: 'q-12', source: 'E34', target: 'S44', style: SKY },
  { id: 'q-13', source: 'E34', target: 'E45', style: ORANGE },
  { id: 'q-14', source: 'E16', target: 'S46', style: SKY },
  { id: 'q-15', source: 'E36', target: 'E51', style: ORANGE },
  { id: 'q-16', source: 'G32', target: 'S52', style: SKY },
  { id: 'q-17', source: 'S43', target: 'S53', style: SKY },
  { id: 'q-18', source: 'E45', target: 'S54', style: SKY },
  { id: 'q-19', source: 'S46', target: 'E55', style: ORANGE },
  { id: 'q-20', source: 'S42', target: 'S56', style: SKY },
  { id: 'q-21', source: 'S54', target: 'S61', style: SKY },
  { id: 'q-22', source: 'S53', target: 'S61', style: SKY },
  { id: 'q-23', source: 'S52', target: 'E62', style: ORANGE },
  { id: 'q-24', source: 'S53', target: 'S63', style: SKY },
  { id: 'q-25', source: 'S44', target: 'S63', style: SKY },
  { id: 'q-26', source: 'E51', target: 'S64', style: SKY },
  { id: 'q-27', source: 'S43', target: 'S65', style: SKY },
  { id: 'q-28', source: 'S54', target: 'S65', style: SKY },
  { id: 'q-29', source: 'E34', target: 'S66', style: SKY },
  { id: 'q-30', source: 'S42', target: 'S66', style: SKY },
  { id: 'q-31', source: 'S61', target: 'S71', style: SKY },
  { id: 'q-32', source: 'S52', target: 'S71', style: SKY },
  { id: 'q-33', source: 'E62', target: 'S72', style: SKY },
  { id: 'q-34', source: 'S63', target: 'S73', style: SKY },
  { id: 'q-35', source: 'S53', target: 'S73', style: SKY },
  { id: 'q-36', source: 'S61', target: 'S74', style: SKY },
  { id: 'q-37', source: 'S65', target: 'S74', style: SKY },
  { id: 'q-38', source: 'E55', target: 'E75', style: ORANGE },
  { id: 'q-39', source: 'S66', target: 'S76', style: SKY },
  { id: 'q-40', source: 'S63', target: 'S76', style: SKY },
  { id: 'q-41', source: 'S71', target: 'S81', style: SKY },
  { id: 'q-42', source: 'S76', target: 'S82', style: SKY },
  { id: 'q-43', source: 'S73', target: 'S82', style: SKY },
  { id: 'q-44', source: 'S76', target: 'S83', style: SKY },
  { id: 'q-45', source: 'S76', target: 'S84', style: SKY },
  { id: 'q-46', source: 'E75', target: 'S85', style: SKY },
  { id: 'q-47', source: 'S71', target: 'S86', style: SKY },
  { id: 'q-48', source: 'S81', target: 'S91', style: SKY },
  { id: 'q-49', source: 'S86', target: 'S92', style: SKY },
  { id: 'q-50', source: 'S84', target: 'S93', style: SKY },
  { id: 'q-51', source: 'S72', target: 'S93', style: SKY },
  { id: 'q-52', source: 'E75', target: 'S94', style: SKY },
  { id: 'q-53', source: 'S86', target: 'S95', style: SKY },
  { id: 'q-54', source: 'S81', target: 'S95', style: SKY },
  { id: 'q-55', source: 'S84', target: 'S96', style: SKY },
  { id: 'q-56', source: 'S82', target: 'S96', style: SKY },
  { id: 'q-57', source: 'S91', target: 'S101', style: SKY },
  { id: 'q-58', source: 'S93', target: 'S102', style: SKY },
  { id: 'q-59', source: 'S94', target: 'S103', style: SKY },
  { id: 'q-60', source: 'S96', target: 'S103', style: SKY },
  { id: 'q-61', source: 'S95', target: 'S103', style: SKY },
  { id: 'q-62', source: 'S94', target: 'S104', style: SKY },
  { id: 'q-63', source: 'S92', target: 'S104', style: SKY },
  { id: 'q-64', source: 'S95', target: 'S105', style: SKY },
  { id: 'q-65', source: 'S96', target: 'S106', style: SKY },
];

export const CYCLE_COLUMNS_2027: Record<string, number> = {
  'Ciclo I': 0, 'Ciclo II': 320, 'Ciclo III': 640, 'Ciclo IV': 960, 'Ciclo V': 1280,
  'Ciclo VI': 1600, 'Ciclo VII': 1920, 'Ciclo VIII': 2240, 'Ciclo IX': 2560, 'Ciclo X': 2880,
};
