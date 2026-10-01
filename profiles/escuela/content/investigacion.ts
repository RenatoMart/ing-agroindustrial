// Fuente: "LINEA DE INVESTIGACION" (Drive), tabla docente → líneas. Se invirtió a
// línea → docentes (varios docentes comparten línea). El documento no declara un
// responsable único por línea ni una descripción del área, así que:
//   - `responsable` lista a los docentes que trabajan en esa línea (no hay un
//     único responsable designado en la fuente).
//   - `descripcion` queda vacía a propósito: no hay texto de sumilla en la fuente
//     y no se debe inventar.
export const lineasInvestigacion = [
  {
    nombre: "Bioquímica y Biología Molecular",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González, Víctor Javier Vásquez Villalobos"
  },
  {
    nombre: "Biotecnología Industrial",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González, Carmen Rosa Rojas Padilla, Gabriela del Carmen Barraza Jáuregui, Víctor Javier Vásquez Villalobos"
  },
  {
    nombre: "Ciencias Animales y Lechería",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González"
  },
  {
    nombre: "Ingeniería Industrial",
    descripcion: "",
    responsable: "Guillermo Alberto Linares Luján, Jesús Alexander Sánchez González, Juan Carlos Solano Gaviño"
  },
  {
    nombre: "Alimentos y Bebidas",
    // Fuente: Currículo 2027 del programa, que cita la RCU 0220-2022/UNT (líneas
    // de investigación de la UNT) y señala esta alineación con los ODS.
    descripcion: "Línea de investigación consolidada de la UNT (RCU N° 0220-2022/UNT), alineada a los Objetivos de Desarrollo Sostenible (ODS) 2 — Hambre Cero—, 3 —Salud y Bienestar— y 12 —Producción y Consumo Responsables.",
    responsable: "Viviano Paulino Ninaquispe Zare, Juan Carlos Solano Gaviño, Carmen Rosa Rojas Padilla, Gabriela del Carmen Barraza Jáuregui, Julio César Rojas Naccha, Karla Margielly Zavaleta Guzmán, Gregorio Mayer Ascón Dionicio"
  },
  {
    nombre: "Negocios y Management",
    descripcion: "",
    responsable: "Juan Carlos Solano Gaviño, Karla Margielly Zavaleta Guzmán"
  },
  {
    nombre: "Automatización y Sistemas de Control",
    descripcion: "",
    responsable: "Raúl Benito Siche Jara, Víctor Javier Vásquez Villalobos"
  },
  {
    nombre: "Ingeniería de Materiales",
    descripcion: "",
    responsable: "Raúl Benito Siche Jara"
  },
  {
    nombre: "Nanomateriales",
    descripcion: "",
    responsable: "Carmen Rosa Rojas Padilla, Gabriela del Carmen Barraza Jáuregui"
  },
  {
    nombre: "Otras Ciencias Agropecuarias",
    descripcion: "",
    responsable: "Carmen Rosa Rojas Padilla, Julio César Rojas Naccha"
  },
  {
    nombre: "Otras Ingenierías y Tecnologías",
    descripcion: "",
    responsable: "Gregorio Mayer Ascón Dionicio"
  },
  {
    nombre: "Biología Celular y Microbiología",
    descripcion: "",
    responsable: "Víctor Javier Vásquez Villalobos"
  }
];

export const proyectos = [
  {
    titulo: "Título del proyecto de investigación 1",
    estado: "En ejecución",
    año: "2023-2024",
    descripcion: "Descripción breve del primer proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  },
  {
    titulo: "Título del proyecto de investigación 2",
    estado: "Finalizado",
    año: "2022-2023",
    descripcion: "Descripción breve del segundo proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  }
];

// Fuente: revistas.unitru.edu.pe/index.php/agroindscience (revista de la propia
// UNT). Se incluye la publicación de una docente del programa en el número
// vigente (Vol. 16 N.° 2, 2026).
export const publicaciones = [
  {
    titulo: "Nanoencapsulación de compuestos bioactivos de plantas medicinales infravaloradas: Una revisión narrativa con enfoque bibliométrico",
    autores: "Jacobo-Cruz, L., Chilon-Neyra, J., & Barraza-Jáuregui, G.",
    año: 2026,
    revista: "Agroindustrial Science, Vol. 16, N.° 2, pp. 319-328",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es/article/view/7505"
  },
  {
    titulo: "Oca (Oxalis tuberosa): Propiedades nutritivas y funcionales. Contenido de oxalato y su influencia en el humano",
    autores: "Dionicio-Varas, E., Boñon-Rocha, E., Llontop-Ayasta, N., Rojas-Naccha, J. C., & Vásquez-Villalobos, V. J.",
    año: 2026,
    revista: "Agroindustrial Science, Vol. 16, N.° 1, pp. 165-174",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es/article/view/7152"
  },
  {
    titulo: "Secado del tarwi (Lupinus mutabilis) por combinación de microondas y aire caliente",
    autores: "Ninaquispe Zare, V. P.",
    año: 2014,
    revista: "Agroindustrial Science, Vol. 3, N.° 2, pp. 147-154",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es/article/view/521"
  }
];

// Revistas científicas vinculadas al programa.
// Fuente: revistas.unitru.edu.pe/index.php/agroindscience (consultada 25-07-2026).
export interface Revista {
  nombre: string;
  descripcion: string;
  issn: string;
  doi: string;
  periodicidad: string;
  indexaciones: string[];
  correo: string;
  url: string;
}

export const revistas: Revista[] = [
  {
    nombre: "Agroindustrial Science",
    descripcion: "Revista científica de acceso abierto de la Universidad Nacional de Trujillo, donde profesionales de las ciencias agroindustriales difunden sus trabajos de investigación en español, inglés o portugués: biotecnología, manejo de plagas, sistemas agrícolas, postcosecha, procesos agroindustriales, industria de alimentos, biocombustibles, envases y embalajes, y gestión agroindustrial.",
    issn: "2226-2989 (Electrónico)",
    doi: "10.17268/agroind.sci",
    periodicidad: "Cuatrimestral",
    indexaciones: ["DOAJ", "EBSCO", "REDIB", "DIALNET", "MIAR", "LATINDEX", "BASE", "Sherpa Romeo"],
    correo: "agroind.science@unitru.edu.pe",
    url: "https://revistas.unitru.edu.pe/index.php/agroindscience/es"
  }
];

// Fuente: "Convenios Internacionales Actualizados" y "Convenios Nacionales
// Actualizados" de la Oficina de Relaciones Nacionales e Internacionales (ORNI),
// UNT (01-10-2026). Esos registros completos tienen ~170 convenios de TODA la
// universidad (Medicina, Derecho, Ingeniería, etc.); aquí solo se listan los que
// están directamente vinculados a la Facultad de Ciencias Agropecuarias o a
// docentes de Ingeniería Agroindustrial como coordinador responsable. El
// registro completo de la ORNI se enlaza al pie de la página (botón "Ver todos
// los convenios de la UNT").
export const convenios = [
  {
    institucion: "Universidad de Campinas",
    tipo: "Convenio Internacional · Brasil",
    descripcion: "Acuerdo de cooperación académica internacional. Coordinador: Dr. Raúl Benito Siche Jara (docente del programa).",
    vigencia: "Desde 21/05/2020 · Indefinido"
  },
  {
    institucion: "Universidad de Los Lagos",
    tipo: "Convenio Internacional · Chile",
    descripcion: "Convenio Marco de Cooperación. Coordinador: Dr. Raúl Benito Siche Jara (docente del programa).",
    vigencia: "Desde 11/11/2013 · Indefinido"
  },
  {
    institucion: "Universidad Federal de Viçosa (UFV)",
    tipo: "Convenio Internacional · Brasil",
    descripcion: "Memorándum de entendimiento. Coordinador: Dr. Víctor Javier Vásquez Villalobos (docente del programa).",
    vigencia: "29/09/2021 – 29/09/2026"
  },
  {
    institucion: "Universidad de Jos, Estado de Plateau",
    tipo: "Convenio Internacional · Nigeria",
    descripcion: "Memorando de Entendimiento. Coordinador: Dr. Gilmar Mendoza Ordoñez, docente de la Facultad de Ciencias Agropecuarias.",
    vigencia: "22/11/2023 – 22/12/2028"
  },
  {
    institucion: "Universidad Nacional del Litoral",
    tipo: "Convenio Internacional · Argentina",
    descripcion: "Carta de Intención con la Escuela Profesional de Zootecnia de la UNT. Coordinador: Dr. Gilmar Edgardo Mendoza Ordoñez.",
    vigencia: "23/03/2022 – 23/03/2027"
  },
  {
    institucion: "Universidad Católica de Santa María",
    tipo: "Convenio Nacional",
    descripcion: "Convenio Marco de Cooperación Interinstitucional. Coordinador: Dr. Víctor Javier Vásquez Villalobos, en su momento Decano de la Facultad de Ciencias Agropecuarias.",
    vigencia: "03/10/2023 – 03/10/2027"
  },
  {
    institucion: "Proyecto Especial Chavimochic",
    tipo: "Convenio Nacional",
    descripcion: "Convenio de Colaboración Interinstitucional. Coordinador: Decano de la Facultad de Ciencias Agropecuarias. Chavimochic es la obra que impulsó la creación del programa en 1993.",
    vigencia: "04/09/2025 – 04/09/2028"
  },
  {
    institucion: "Asociación Peruana de Avicultura",
    tipo: "Convenio Nacional",
    descripcion: "Convenio Marco de Cooperación Interinstitucional. Coordinadora: Directora de la Escuela Profesional de Ingeniería Zootecnista (misma Facultad).",
    vigencia: "21/05/2025 – 21/05/2030"
  }
];

// Registro oficial completo de convenios de la UNT (PDF alojados en public/).
export const registroConveniosUNT = [
  {
    titulo: "Convenios Internacionales de la UNT",
    detalle: "Registro completo, actualizado a septiembre 2026 (ORNI)",
    url: `${import.meta.env.BASE_URL}Convenios_Internacionales_UNT_2026.pdf`,
  },
  {
    titulo: "Convenios Nacionales de la UNT",
    detalle: "Registro completo, actualizado 2026 (ORNI)",
    url: `${import.meta.env.BASE_URL}Convenios_Nacionales_UNT_2026.pdf`,
  },
];
