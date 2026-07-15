// Plana docente. Cada docente:
//   - grado: el cargo/grado académico (Doctor, Magíster, Ingeniero…)
//   - departamento: el departamento académico al que pertenece (para filtrar/categorizar)
//   - cursoPrincipal: el curso/área principal que aparece en el FRENTE de la card
//   - especialidades: lista que aparece al voltear la card (reverso). Agrega 2-3 por docente.
//   - foto: ruta de la foto o null (muestra silueta placeholder)
//   - investigador: true si el docente es investigador (habilita el filtro "Investigadores")
//   - categoriaInvestigacion: categoría/nivel de investigación (p. ej. RENACYT). Solo aplica
//     si investigador === true; se muestra como distintivo en la card.
//   - condicion: régimen laboral del docente, "Nombrado" o "Contratado". Se muestra como
//     etiqueta en la card.
//
// Fuente: Área de Escalafón, Unidad de Recursos Humanos - UNT (hojas de vida públicas del
// SGA, consultadas el 14-07-2026). `grado`, `especialidades` y `condicion` provienen de ahí.
//
// PENDIENTE (no completar sin fuente oficial):
//   - cursoPrincipal: no hay asignación de cursos por docente. Queda vacío a propósito.
//   - investigador / categoriaInvestigacion: falta la condición RENACYT de cada docente.
//   - foto: faltan las fotografías.
export const docentes = [
  {
    nombre: "Raúl Benito Siche Jara",
    grado: "Doctor",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctor en Ingeniería de Alimentos — Universidade Estadual de Campinas (Brasil)",
      "Maestría en Economía, mención Gestión Empresarial — UNT",
      "Ingeniero Agroindustrial — Universidad Nacional del Santa"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Carmen Rosa Rojas Padilla",
    grado: "Doctora",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctora en Ciencias Agropecuarias — UNT",
      "Maestría en Ciencias, mención Microbiología Industrial y Biotecnología — UNT",
      "Ingeniera en Industrias Alimentarias — Universidad Nacional Agraria"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Guillermo Alberto Linares Luján",
    grado: "Doctor",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctor en Ciencias e Ingeniería — UNT",
      "Maestría en Ciencias, mención Biotecnología y Bioingeniería — UNT",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Viviano Paulino Ninaquispe Zare",
    grado: "Doctor",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctor en Ciencias e Ingeniería — UNT",
      "Maestría en Gerencia de Industrias Agropecuarias y Pesqueras — Universidad Nacional del Santa",
      "Ingeniero Agroindustrial — Universidad Nacional del Santa"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Julio César Rojas Naccha",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestría en Ciencias, mención Tecnología de Alimentos — UNT",
      "Ingeniero en Industrias Alimentarias — Universidad Nacional Agraria La Molina"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Gabriela del Carmen Barraza Jáuregui",
    grado: "Doctora",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctora en Ciencias e Ingeniería — UNT",
      "Maestría en Ciencias, mención Tecnología de Alimentos — UNT",
      "Ingeniera en Industrias Alimentarias — Universidad Nacional Agraria La Molina"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Jesús Alexander Sánchez González",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestría en Ciencias, mención Microbiología y Tecnología de Alimentos — UNT",
      "Maestría en Evaluación de la Calidad y Procesos de Certificación en Educación Superior — Universidad Internacional de La Rioja",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Karla Margielly Zavaleta Guzmán",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestría en Administración — Universidad ESAN",
      "Ingeniera Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Juan Carlos Solano Gaviño",
    grado: "Doctor",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctor en Ciencias e Ingeniería — UNT",
      "Maestría en Agronegocios — Universidad de Buenos Aires",
      "Especialización en Agronegocios y Alimentos — Universidad de Buenos Aires",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Walter Felipe Rodríguez Salinas",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestro en Administración de Empresas — Universidad Peruana de Ciencias Aplicadas",
      "Ingeniero Agroindustrial — Universidad Nacional de San Martín"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Contratado"
  },
  {
    nombre: "Kyara Yuriko Huaccha Cabrera",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestría en Ciencias de Ingeniería de Alimentos — Universidade de São Paulo (Brasil)",
      "Ingeniera Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Contratado"
  },
  {
    nombre: "Rodolfo Moisés Vegas Niño",
    grado: "Doctor",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctor en Ingeniería Química — Universidad de Vigo (España)",
      "Maestría en Ciencias, mención Tecnología de Alimentos — UNT",
      "Segunda Especialidad Profesional en Gestión de la Calidad e Inocuidad Alimentaria — UNT",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Daniel José Salvador Rodríguez",
    grado: "Doctor",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Doctor en Ciencia de los Alimentos — Universitat Autònoma de Barcelona (España)",
      "Maestría en Ciencias, mención Tecnología de Alimentos — UNT",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Freddy Waldir Gómez Escobedo",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestría en Ciencias, mención Sistemas Integrados de Gestión de la Calidad, Ambiente, Seguridad y Responsabilidad Social Corporativa — UNT",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Nilson Deonil Campos Vásquez",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestría en Ciencias, mención Sistemas Integrados de Gestión de la Calidad, Ambiente, Seguridad y Responsabilidad Social Corporativa — UNT",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  },
  {
    nombre: "Paul Alexis Sisniegas Gálvez",
    grado: "Magíster",
    departamento: "Departamento Académico de Ciencias Agroindustriales",
    cursoPrincipal: "",
    especialidades: [
      "Maestría en Ciencias, mención Gestión de Riesgos Ambientales y de Seguridad en las Empresas — UNT",
      "Ingeniero Agroindustrial — UNT"
    ],
    foto: null,
    investigador: false,
    categoriaInvestigacion: null,
    condicion: "Nombrado"
  }
];
